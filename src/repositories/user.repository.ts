import { User } from "../entities/user.entity";

export class UserRepository {
    static users: User[] = [
        { id: 1, firstname: 'Name 1', email: 'some1@bol.com', yearOfBirth: 1982, },
        { id: 2, firstname: 'Name 2', email: 'some2@bol.com', yearOfBirth: 2002, },
        { id: 3, firstname: 'Name 3', email: 'some3@bol.com', yearOfBirth: 1999, },
        { id: 4, firstname: 'Name 4', email: 'some4@bol.com', yearOfBirth: 2010, }
    ];

    findAll(): User[] {
        return UserRepository.users
    }

    findById(id: number): User {
        return UserRepository.users.find(it => it.id == id)
    }

    findByFirstNameContaining(part: string): User[] {
        return UserRepository.users.filter(it => it.firstname.includes(part))
    }

}