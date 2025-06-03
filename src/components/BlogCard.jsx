import formatDate from "../lib/formatDate";

export default function BlogCard({ article }) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={article.link}
      key={article.title}
      className="flex flex-col sm:flex-row gap-4 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out dark:border-gray-800 hover:shadow-[0_0_15px_3px_rgba(156,163,175,0.7)] dark:hover:shadow-[0_0_15px_3px_rgba(66,65,81,0.9)]"
    >
      <img
        src={article.thumbnail}
        alt={article.title}
        className="w-full sm:w-1/2 aspect-video object-cover rounded-l-md"
      />

      <div className="w-full flex flex-col items-start p-2 gap-2">
        <h2 className="font-bold">{article.title}</h2>
        <div className="flex flex-wrap gap-1">
          {article.categories.map((category) => (
            <span
              key={category}
              className="bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 px-2 py-1 text-xs rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 w-[100px] ">
          {formatDate(article.date)}
        </p>
      </div>
    </a>
  );
}
