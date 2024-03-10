const typeDefs = /* GraphQL */ `
  type File {
    id: String
    name: String
    size: Int
    type: String
    key: String
    createdAt: String
  }

  input FileInput {
    name: String
    size: Int
    type: String
    key: String
  }

  input FileQuery {
    id: String
    offset: Int
    limit: Int
  }

  type Policy {
    expire: String
    policy: String
    signature: String
    accessid: String
    host: String
    callback: String
    dir: String
  }

  type FilePagination {
    edges: [File!]
    totalCount: Int!
  }

  input FileQuery {
    id: String
    me: Boolean
    offset: Int
    limit: Int
  }

  type Query {
    "File detail"
    file(query: FileQuery!): File
    "File list"
    files(query: FileQuery!): FilePagination
  }

  type Mutation {
    "Delete file"
    deleteFile(query: FileQuery!): File
  }
`;
export default typeDefs;
