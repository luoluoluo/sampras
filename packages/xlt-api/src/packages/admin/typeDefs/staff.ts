const typeDefs = /* GraphQL */ `
  type Staff {
    id: String!
    code: String
    name: String
    password: String
    staffRoles: [StaffRole]
    createdAt: String
  }

  type Token {
    token: String!
    id: String!
  }

  input StaffInput {
    code: String!
    name: String
    password: String
    roleIds: [String]
  }

  type StaffPagination {
    edges: [Staff!]
    totalCount: Int!
  }

  input StaffQuery {
    id: String
    offset: Int
    limit: Int
    me: Boolean
  }

  input UpdatePasswordInput {
    oldPassword: String!
    newPassword: String!
  }

  type Query {
    "My info"
    me: Staff
    "Staff detail"
    staff(query: StaffQuery!): Staff
    "Staff list"
    staffs(query: StaffQuery!): StaffPagination
  }

  type Mutation {
    "Ligin"
    login(code: String!, password: String!): Token
    "Create staff"
    createStaff(input: StaffInput!): Staff
    "Edit staff"
    updateStaff(query: StaffQuery!, input: StaffInput!): Staff
    "Delete staff"
    deleteStaff(query: StaffQuery!): Staff
    "Update my password"
    updateMePassword(input: UpdatePasswordInput!): Staff
  }
`;
export default typeDefs;
