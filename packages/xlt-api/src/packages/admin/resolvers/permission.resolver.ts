import { Permission, Resolvers } from "../generated/graphql";
import { Context } from "../index";
import { parse } from "graphql";
import { loadTypeDefs } from "@/utils/graphql";
import { ignoreAclPermissions } from "../variables/permission";

const permissionResolver: Resolvers<Context> = {
  Query: {
    async permissions() {
      const typeDefs = await loadTypeDefs(`${__dirname}/../typeDefs`);
      const permissions: Permission[] = [
        {
          value: "*",
          name: "All permissions",
        },
      ];
      const parsedTypeDefs = parse(typeDefs);
      parsedTypeDefs.definitions.map((definition: any) => {
        const definitionName = (definition.name.value as string).toLowerCase();
        if (!["query", "mutation"].includes(definitionName)) return;
        definition.fields.map((field: any) => {
          const value = `${definitionName}.${field.name.value}`;
          const name = field.description?.value || "";
          if (ignoreAclPermissions.includes(value)) return;
          permissions.push({
            name,
            value,
          });
        });
      });
      return {
        totalCount: permissions.length,
        edges: permissions,
      };
    },
  },
  Mutation: {},
};
export default permissionResolver;
