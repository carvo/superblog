export const Query = {
    firstUser: (parent, args, context) => context.userRepository.findAll()[0],
    users: (parent, args, context) => context.userRepository.findAll(),
    findUsers: (parent, args, context) => context.userRepository.findUsers(args.input.firstnamePart, args.input.emailPart),

    blogs: (parent, args, context) => context.blogRepository.findAll(),
    blogById: (parent, args, context) => context.blogDataloader.load(args.id),

    comments: (parent, args, context) => context.commentRepository.findAll()
}