import { Resolvers } from "../generated/graphql";
import { Context } from "../index";
import { genId } from "@/utils/genId";
import prisma from "@/core/prisma";
import { graphQLError } from "@/utils/graphql";
import { PrismaSelect } from "@paljs/plugins";

const roleResolver: Resolvers<Context> = {
  Query: {
    async roles(_, args, context, info) {
      const select = new PrismaSelect(info).value;
      const roles = await prisma.role.findMany({
        take: args.query?.limit || undefined,
        skip: args.query?.offset || undefined,
        select: select.select.edges.select,
        orderBy: [{ id: "desc" }],
      });
      const count = await prisma.role.count();
      return {
        totalCount: count,
        edges: roles as any,
      };
    },
    async role(_, args, context, info) {
      if (!args.query?.id) {
        throw graphQLError({ message: "Input error" });
      }
      const select = new PrismaSelect(info).value;
      const role = await prisma.role.findFirst({
        where: { id: args.query?.id },
        select: select.select,
      });
      return role as any;
    },
  },
  Mutation: {
    async createRole(_, args, context) {
      if (!args.input?.name) {
        throw graphQLError({ message: "Input error" });
      }
      const createdUser = await prisma.role.create({
        data: {
          id: genId(),
          name: args.input?.name,
          rolePermissions: {
            create: args.input?.permissions?.map((permission) => ({
              id: genId(),
              permission,
            })),
          },
        },
      });
      return createdUser as any;
    },
    async updateRole(_, args, context) {
      if (!args.query?.id) {
        throw graphQLError({ message: "Input error" });
      }
      if (!args.input?.name) {
        throw graphQLError({ message: "Input error" });
      }
      const updatedUser = await prisma.$transaction(async (tx) => {
        await tx.rolePermission.deleteMany({
          where: { roleId: args.query?.id! },
        });
        return tx.role.update({
          where: { id: args.query?.id! },
          data: {
            name: args.input?.name,
            rolePermissions: {
              create:
                args.input?.permissions?.map((permission) => ({
                  id: genId(),
                  permission,
                })) || [],
            },
          },
        });
      });
      return updatedUser as any;
    },
    async deleteRole(_, args, context) {
      if (!args.query?.id) {
        throw graphQLError({ message: "Input error" });
      }
      const deletedUser = await prisma.$transaction(async (tx) => {
        await tx.rolePermission.deleteMany({
          where: { roleId: args.query?.id! },
        });
        return await tx.role.delete({
          where: { id: args.query?.id! },
        });
      });
      return deletedUser as any;
    },
  },
};
export default roleResolver;
