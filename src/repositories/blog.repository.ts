import { Blog } from "../entities/blog.entity.js";

export class BlogRepository {
    static blogs: Blog[] = [
        { id: 1, userId: 1, title: "Title 1", content: "Content 1", published: false },
        { id: 2, userId: 1, title: "Title 2", content: "Content 2", published: true },
        { id: 3, userId: 2, title: "Title 3", content: "Content 3", published: true },
        { id: 4, userId: 2, title: "Title 4", content: "Content 4", published: false }
    ]

    findAll(): Blog[] {
        return BlogRepository.blogs
    }

    findById(id: number): Blog {
        return BlogRepository.blogs.find(it => it.id == id)
    }

    findByUserId(userId: number): Blog[] {
        return BlogRepository.blogs.filter( it => it.userId == userId)
    }
}