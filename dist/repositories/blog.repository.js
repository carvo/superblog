export class BlogRepository {
    findAll() {
        return BlogRepository.blogs;
    }
    findById(id) {
        return BlogRepository.blogs.find(it => it.id == id);
    }
    findByUserId(userId) {
        return BlogRepository.blogs.filter(it => it.userId == userId);
    }
}
BlogRepository.blogs = [
    { id: 1, userId: 1, title: "Title 1", content: "Content 1", published: false },
    { id: 2, userId: 1, title: "Title 2", content: "Content 2", published: true },
    { id: 3, userId: 2, title: "Title 3", content: "Content 3", published: true },
    { id: 4, userId: 2, title: "Title 4", content: "Content 4", published: false }
];
