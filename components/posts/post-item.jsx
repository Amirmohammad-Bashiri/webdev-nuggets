function PostItem({ post }) {
  return (
    <li className="space-y-4">
      <h2 className="text-lg md:text-2xl text-gray-900 dark:text-gray-100">
        {post.title}
      </h2>
      <p className="text-sm xl:text-base text-gray-500">{post.date}</p>
      <p className="text-base text-gray-500 dark:text-gray-400">
        {post.excerpt}
      </p>
    </li>
  );
}

export default PostItem;
