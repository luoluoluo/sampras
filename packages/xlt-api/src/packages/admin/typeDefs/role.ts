const typeDefs = /* GraphQL */ `
  type Role {
    id: String!
    name: String!
    rolePermissions: [RolePermission]
    createdAt: String
  }

  input RoleInput {
    name: String!
    permissions: [String!]
  }

  type RolePagination {
    edges: [Role!]
    totalCount: Int!
  }

  input RoleQuery {
    id: String
    offset: Int
    limit: Int
  }

  type Query {
    "Role detail"
    role(query: RoleQuery!): Role
    "Role list"
    roles(query: RoleQuery!): RolePagination
  }

  type Mutation {
    "Create role"
    createRole(input: RoleInput!): Role
    "Edit role"
    updateRole(query: RoleQuery!, input: RoleInput!): Role
    "Delete role"
    deleteRole(query: RoleQuery!): Role
  }
`;
export default typeDefs;
