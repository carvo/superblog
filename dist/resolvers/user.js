import { users } from "../data/users.js";
export const resolvers = {
    Query: {
        firstUser: () => users[0],
        users: () => users,
    },
};
