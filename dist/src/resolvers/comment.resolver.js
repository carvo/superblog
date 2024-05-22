export const Comment = {
    blog: (parent, args, context) => context.blogRepository.findById(parent.blogId),
    commentator: (parent, args, context) => context.userRepository.findById(parent.commentatorId)
};
