import { ApolloServer } from '@apollo/server';
import { describe, expect, test } from '@jest/globals';
import { typeDefs } from '../src/typedefs';
import { resolvers } from '../src/resolvers/all';
import assert from 'assert';
import { UserRepository } from '../src/repositories/user.repository';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

describe('user tests using the repo', () => {

    test('find first user', async () => {

        console.log('Aabababababbaa.XXXX...')
        const response = await server.executeOperation(
            { query: '{ firstUserXXX { id } }' },
            // {
            //     contextValue: {
            //         userRepository: new UserRepository()
            //     }
            // }
        )

        assert(response.body.kind === 'single');
        console.log(response.body.singleResult.data)
    });


});