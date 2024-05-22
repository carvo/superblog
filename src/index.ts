import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers/all.js";
import { typeDefs } from "./typedefs.js";
import { BlogRepository } from "./repositories/blog.repository.js";
import { UserRepository } from "./repositories/user.repository.js";
import { CommentRepository } from "./repositories/comment.repository.js";


const server = new ApolloServer({
    typeDefs,
    resolvers,
});


const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
		return {
			userRepository: new UserRepository(),
			blogRepository: new BlogRepository(),
            commentRepository: new CommentRepository()
		};
	},
});

console.log(`🚀  Server ready at: ${url}`);