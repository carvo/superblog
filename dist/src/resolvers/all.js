import { Blog } from "./blog.resolver.js";
import { Comment } from "./comment.resolver.js";
import { UserStatus } from "./enum.resolver.js";
import { Query } from "./query.resolver.js";
import { User } from "./user.resolver.js";
export const resolvers = {
    Query,
    User,
    Blog,
    Comment,
    UserStatus
};
