import { Resolvers } from "../generated/graphql";
import { Context } from "../index";
import { PrismaSelect } from "@paljs/plugins";
import prisma from "@/core/prisma";
import { graphQLError } from "@/utils/graphql";

const fileResolver: Resolvers<Context> = {
  Query: {
    async files(_, args, context, info) {
      const select = new PrismaSelect(info).value;
      const files = await prisma.file.findMany({
        take: args.query?.limit || undefined,
        skip: args.query?.offset || undefined,
        // where: {
        //   userId: args.query.me ? me?.id : undefined,
        // },
        select: select.select.edges.select,
        orderBy: [{ id: "desc" }],
      });
      const count = await prisma.file.count();
      return {
        totalCount: count,
        edges: files as any,
      };
    },
    async file(_, args, context, info) {
      const select = new PrismaSelect(info).value;
      if (!args.query?.id) {
        throw graphQLError({ message: "Input error" });
      }
      const file = await prisma.file.findFirst({
        where: {
          id: args.query.id,
        },
        select: select.select,
      });
      return file as any;
    },
  },
  Mutation: {
    async deleteFile(_, args, context) {
      if (!args.query?.id) {
        throw graphQLError({ message: "Input error" });
      }
      const deletedFile = await prisma.file.delete({
        where: {
          id: args.query.id,
        },
      });
      return deletedFile as any;
    },
  },
};

export default fileResolver;
