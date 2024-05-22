export const Blog = {
    comments: (parent, args, context) => context.commentRepository.findByBlogId(parent.id)
};
