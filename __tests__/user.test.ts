import { ApolloServer } from '@apollo/server';
import { describe, expect, test } from '@jest/globals';
import { typeDefs } from '../src/typedefs';
import { resolvers } from '../dist/src/resolvers/all';
import assert from 'assert';
import { UserRepository } from '../src/repositories/user.repository';
import { User } from '../src/entities/user.entity';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

describe('user tests using the repo', () => {

    test('get first user', async () => {
        const response = await server.executeOperation<{ user: User }>(
            { query: '{ user: firstUser { id } }' },
            {
                contextValue: {
                    userRepository: new UserRepository()
                }
            }
        )

        assert(response.body.kind === 'single')
        expect(response.body.singleResult.data.user.id).toBe("1")
    });

    test('find user using filter', async () => {
        const response = await server.executeOperation<{ users: User[] }>(
            {
                query: `query ($input: FindUserFilter) { 
                    users: findUsers(input: $input) { 
                        id
                        firstname
                        email 
                    }    
                }`,
                variables: {
                    input: {
                        firstnamePart: "Names",
                        emailPart: "bol.com"
                    }
                }
            },
            {
                contextValue: {
                    userRepository: new UserRepository()
                }
            }
        )

        assert(response.body.kind === 'single')
        expect(response.body.singleResult.data.users[0]).toMatchObject({
            id: '1',
            firstname: 'Names 1',
            email: 'some1@bol.com'
        })
        expect(response.body.singleResult.data.users[1]).toMatchObject({
            id: '4',
            firstname: 'Names 4',
            email: 'some4@bol.com'
        })
    });

});