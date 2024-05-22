export const typeDefs = `

  type Query {
    firstUser: User
    users: [User!]!
    findUsers(input: FindUserFilter): [User!]

    blogs: [Blog!]
    blogById(id: Int): Blog

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
    blogs: [Blog]
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
