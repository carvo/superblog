export class UserRepository {
    findAll() {
        return UserRepository.users;
    }
    findById(id) {
        return UserRepository.users.find(it => it.id == id);
    }
    findUsers(firstnamePart, emailPart) {
        return UserRepository.users.filter(it => (firstnamePart ? it.firstname.includes(firstnamePart) : true)
            &&
                (emailPart ? it.email.includes(emailPart) : true));
    }
}
UserRepository.users = [
    { id: 1, firstname: 'Names 1', email: 'some1@bol.com', yearOfBirth: 1982, },
    { id: 2, firstname: 'Namez 2', email: 'some2@bol.com', yearOfBirth: 2002, },
    { id: 3, firstname: 'Namew 3', email: 'some3@bol.com', yearOfBirth: 1999, },
    { id: 4, firstname: 'Names 4', email: 'some4@bol.com', yearOfBirth: 2010, }
];
