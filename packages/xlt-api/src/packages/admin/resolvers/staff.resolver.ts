import { Resolvers } from "../generated/graphql";
import { Context } from "../index";
import { PrismaSelect } from "@paljs/plugins";
import { genId } from "@/utils/genId";
import prisma from "@/core/prisma";
import bcrypt from "bcryptjs";
import { hashPassword, sign } from "@/utils/auth";
import redisClient from "@/core/redis";
import { graphQLError } from "@/utils/graphql";

const staffResolver: Resolvers<Context> = {
  Query: {
    async me(_, args, context) {
      return { ...context.staff, password: "" } as any;
    },
    async staffs(_, args, context, info) {
      const select = new PrismaSelect(info).value;
      const staffs = await prisma.staff.findMany({
        take: args.query?.limit || undefined,
        skip: args.query?.offset || undefined,
        select: select.select.edges.select,
        orderBy: [{ id: "desc" }],
      });
      const count = await prisma.staff.count();
      return {
        totalCount: count,
        edges: staffs as any,
      };
    },
    async staff(_, args, context, info) {
      if (!args.query?.id) {
        throw graphQLError({ message: "Input error" });
      }
      const select = new PrismaSelect(info).value;
      const staff = await prisma.staff.findFirst({
        where: { id: args.query?.id },
        select: select.select,
      });
      return staff as any;
    },
  },
  Mutation: {
    async login(_, args) {
      if (!args.code || !args.password) {
        throw graphQLError({ message: "Input error" });
      }
      const errCountCacheKey = `staff-login-err-${args.code}`;
      const errorCount = Number(
        (await redisClient.get(errCountCacheKey)) || "0"
      );
      if (errorCount >= 6) {
        throw graphQLError({
          message: "Too many errors, please try again after 120 seconds",
        });
      }
      const staff = await prisma.staff.findFirst({
        where: { code: args.code },
      });
      if (!staff || !staff.password) {
        throw graphQLError({ message: "Invalid user or password" });
      }
      const isValid = await bcrypt.compare(args.password, staff.password);
      if (!isValid) {
        redisClient.incr(errCountCacheKey);
        redisClient.expire(errCountCacheKey, 120);
        throw graphQLError({ message: "Invalid user or password" });
      }
      const token = sign(staff.id, staff.password);
      return {
        id: staff.id,
        token,
      };
    },
    async createStaff(_, args, context) {
      if (!args.input?.code || !args.input?.name || !args.input?.password) {
        throw graphQLError({ message: "Input error" });
      }
      const hashedPassword = await hashPassword(args.input?.password);
      const createdStaff = await prisma.staff.create({
        data: {
          id: genId(),
          code: args.input?.code,
          name: args.input?.name,
          password: hashedPassword,
          staffRoles: {
            create: (args.input.roleIds || []).map((roleId) => ({
              id: genId(),
              roleId: roleId!,
            })),
          },
        },
      });

      return createdStaff as any;
    },
    async updateStaff(_, args, context, info) {
      if (!args.query?.id) {
        throw graphQLError({ message: "Input error" });
      }
      let hashedPassword: string | undefined = undefined;
      if (args.input?.password) {
        hashedPassword = await hashPassword(args.input.password);
      }
      const updatedStaff = await prisma.$transaction(async (tx) => {
        await tx.staffRole.deleteMany({
          where: { staffId: args.query.id! },
        });
        return await tx.staff.update({
          where: { id: args.query.id! },
          data: {
            code: args.input?.code || undefined,
            name: args.input?.name || undefined,
            password: hashedPassword,
            staffRoles: {
              create: (args.input?.roleIds || [])?.map((roleId) => ({
                id: genId(),
                roleId: roleId!,
              })),
            },
          },
        });
      });
      return updatedStaff as any;
    },
    async deleteStaff(_, args, context) {
      if (!args.query?.id) {
        throw graphQLError({ message: "Input error" });
      }
      const deletedStaff = await prisma.$transaction(async (tx) => {
        await tx.staffRole.deleteMany({
          where: { staffId: args.query?.id! },
        });
        return await tx.staff.delete({
          where: { id: args.query?.id! },
        });
      });
      return deletedStaff as any;
    },
    async updateMePassword(_, args, context) {
      if (!args.input?.newPassword) {
        throw graphQLError({ message: "Input error" });
      }
      // 检验oldpassword
      const isValid = await bcrypt.compare(
        args.input.oldPassword,
        context.staff?.password!
      );
      // console.log(args.input.oldPassword, context.staff?.password!);
      if (!isValid) {
        throw graphQLError({ message: "Invalid password" });
      }

      const updatedStaff = await prisma.staff.update({
        where: { id: context.staff?.id },
        data: {
          password: await hashPassword(args.input.newPassword),
        },
      });
      return updatedStaff as any;
    },
  },
};

export default staffResolver;
