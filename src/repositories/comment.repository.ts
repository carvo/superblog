import { Comment } from "../entities/comment.entity";

export class CommentRepository {
    static comments: Comment[] = [
        { id: 33, content: 'Que blog lixão..', blogId: 1, commentatorId: 4 },
        { id: 34, content: 'Achei um lixo tbm', blogId: 1, commentatorId: 3 },
        { id: 35, content: 'Tudo cara de paçoca', blogId: 2, commentatorId: 4 },
        { id: 36, content: 'Eu sou bobo então gostei', blogId: 3, commentatorId: 1 }
    ]

    findAll(): Comment[] {
        return CommentRepository.comments
    }

    findByBlogId(blogId: number): Comment[] {
        return CommentRepository.comments.filter(it => it.blogId == blogId)
    }
}