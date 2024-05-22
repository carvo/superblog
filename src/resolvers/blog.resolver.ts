export const Blog = {
    comments: (parent, args, context) => context.dataloader.findByBlogId(parent.id)
}