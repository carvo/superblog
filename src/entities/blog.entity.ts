import { User } from "./user.entity"

export interface Blog {
    id:	number
    userId: number
    creator?: User
    title: string
    content: string
    published: boolean
}