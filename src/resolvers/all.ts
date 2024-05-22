

export const resolvers = {
    Query: {
        firstUser: (parent, args, context) => context.userRepository.findAll()[0],
        users: (parent, args, context) => context.userRepository.findAll(),
        findUsers: (parent, args, context) => context.userRepository.findByFirstNameContaining(args.namePart),

        blogs: (parent, args, context) => context.blogRepository.findAll(),
        blogById: (parent, args, context) => context.blogRepository.findById(args.id),

        comments: (parent, args, context) => context.commentRepository.findAll()
    },
    User: {
        blogs: (parent, args, context) => context.blogRepository.findByUserId(parent.id)
    },
    Blog: {
        comments: (parent, args, context) => context.commentRepository.findByBlogId(parent.id)
    },
    Comment: {
        blog: (parent, args, context) => context.blogRepository.findById(parent.blogId),
        commentator: (parent, args, context) => context.userRepository.findById(parent.commentatorId)
    }
};