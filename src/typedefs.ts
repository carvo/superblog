export const typeDefs = `

  type Query {
    firstUser: User
    users: [User!]!
    findUsers(input: FindUserFilter): [User!]

    blogs: [Blog!]
    blogById(id: ID!): Blog

    comments: [Comment!]
  }

  input FindUserFilter {
    firstnamePart: String
    emailPart: String
  }

  type User {
    id: ID!
    firstname: String!
    email: String
    yearOfBirth: Int
    status: UserStatus!
    blogs: [Blog]
  }

  enum UserStatus {
    REGISTERED
    ACTIVE
    DISABLED
    EXPIRED
  }

  type Blog {
    id: ID!
    title:	String!
    content:	String!
    published:	Boolean!
    creator: User
    comments: [Comment]
  }

  type Comment {
    id: ID!
    content: String!
    blog: Blog!
    commentator: User!
  }

`;