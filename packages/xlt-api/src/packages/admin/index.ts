import { expressMiddleware } from "@apollo/server/express4";
import { Request, Express } from "express";
import { ApolloServer } from "@apollo/server";
import logger from "@/core/logger";
import { GraphQLError, parse } from "graphql";
import { graphQLError, loadResolvers, loadTypeDefs } from "@/utils/graphql";
import prisma from "@/core/prisma";
import { ignoreAcl, ignoreAuth, verify } from "@/utils/auth";
import { Staff } from "./generated/graphql";
// import { Staff } from "@prisma/client";

export interface Context {
  token?: string;
  staff?: Staff;
}

const context = async ({ req }: { req: Request }) => {
  const ctx: Context = {};
  ctx.token = String(req.headers.token || "");
  // queryPermissions
  const parsedQuery = parse(req.body.query);
  const queryPermissions: string[] = [];
  parsedQuery.definitions.map((definition: any) => {
    const operation = definition.operation;
    if (!operation) return;
    definition.selectionSet.selections.map((selection: any) => {
      const name = selection.name.value;
      queryPermissions.push(`${operation}.${name}`);
    });
  });

  console.log(queryPermissions);
  // ignore auth
  if (ignoreAuth(queryPermissions)) {
    return ctx;
  }

  if (!ctx.token) {
    throw graphQLError({ message: "UNAUTHENTICATED", code: "UNAUTHENTICATED" });
  }

  const tokenStaff = verify(ctx.token);
  if (!tokenStaff) {
    throw graphQLError({ message: "UNAUTHENTICATED", code: "UNAUTHENTICATED" });
  }

  const staff = await prisma.staff.findFirst({
    where: { id: tokenStaff?.id || "" },
    include: {
      staffRoles: {
        include: {
          role: {
            include: {
              rolePermissions: true,
            },
          },
        },
      },
    },
  });
  if (!staff) {
    throw graphQLError({ message: "UNAUTHENTICATED", code: "UNAUTHENTICATED" });
  }
  if (tokenStaff?.password !== staff?.password) {
    throw graphQLError({ message: "UNAUTHENTICATED", code: "UNAUTHENTICATED" });
  }

  ctx.staff = staff as any;

  // ignore acl
  if (ignoreAcl(queryPermissions)) {
    return ctx;
  }
  // acl
  const hasPermissions: string[] = [];
  staff.staffRoles.map((staffRole) => {
    staffRole.role.rolePermissions.map((rolePermission) => {
      hasPermissions.push(rolePermission.permission);
    });
  });

  if (hasPermissions.includes("*")) {
    return ctx;
  }

  for (const queryPermission of queryPermissions) {
    if (!hasPermissions.includes(queryPermission)) {
      throw graphQLError({ message: "无权访问", code: "FORBIDDEN" });
    }
  }
  return ctx;
};

export const startServer = async (app: Express) => {
  const typeDefs = await loadTypeDefs(`${__dirname}/typeDefs`);
  const resolvers = await loadResolvers(`${__dirname}/resolvers`);
  const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
    formatError: (formattedError, error) => {
      logger.error(formattedError);
      let message = formattedError.message;
      if (message.includes("Foreign key constraint failed on the field")) {
        message = "Foreign key constraint failed on the field";
      }

      return {
        ...formattedError,
        message,
      };
    },
  });
  await server.start();
  app.use(
    "/admin",
    expressMiddleware(server, {
      context,
    })
  );
};
