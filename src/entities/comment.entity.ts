import { Blog } from "./blog.entity";
import { User } from "./user.entity";

export interface Comment {
    id: number
    content: string
    blogId: number
    commentatorId: number
    blog?: Blog
    commentator?: User
}