export const User = {
    blogs: (parent, args, context) => context.blogRepository.findByUserId(parent.id)
};
