export class CommentRepository {
    findAll() {
        return CommentRepository.comments;
    }
    findByBlogId(blogId) {
        return CommentRepository.comments.filter(it => it.blogId == blogId);
    }
}
CommentRepository.comments = [
    { id: 33, content: 'Que blog lixão..', blogId: 1, commentatorId: 4 },
    { id: 34, content: 'Achei um lixo tbm', blogId: 1, commentatorId: 3 },
    { id: 35, content: 'Tudo cara de paçoca', blogId: 2, commentatorId: 4 },
    { id: 36, content: 'Eu sou bobo então gostei', blogId: 3, commentatorId: 1 }
];
