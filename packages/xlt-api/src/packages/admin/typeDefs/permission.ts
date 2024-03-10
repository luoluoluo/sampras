const typeDefs = /* GraphQL */ `
  type Permission {
    name: String
    value: String!
  }

  type PermissionPagination {
    edges: [Permission!]
    totalCount: Int!
  }

  type Query {
    "Permission list"
    permissions: PermissionPagination
  }
`;
export default typeDefs;
