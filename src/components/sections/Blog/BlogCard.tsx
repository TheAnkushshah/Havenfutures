interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  tags: string[];
}

const BlogCard = ({ title, excerpt, image, author, date, readTime, tags }: BlogCardProps) => {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={author.avatar} alt={author.name} className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-sm font-medium">{author.name}</p>
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>
          <span className="text-sm text-gray-500">{readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;