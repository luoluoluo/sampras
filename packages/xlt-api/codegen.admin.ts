import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/packages/admin/typeDefs/*.ts",
  generates: {
    "src/packages/admin/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
