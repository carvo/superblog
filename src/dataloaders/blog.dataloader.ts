import DataLoader from "dataloader";
import { BlogRepository } from "../repositories/blog.repository";


export class BlogDataloader {
    blogRespository: BlogRepository
    loader = new DataLoader(async (ids: readonly number[]) => {
        return this.blogRespository.findAllByIds(ids)
    })

    constructor(blogRespository: BlogRepository) {
        this.blogRespository = blogRespository
    }

    load(id: number) {
        return this.loader.load(id)
    }

}