import formatDate from "../lib/formatDate";

export default function BlogCard({ article }) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={article.link}
      key={article.title}
    >
      <div
        key={article.title}
        className="rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-40 object-cover rounded-t-md"
        />

        <div className="w-full flex md:flex-col flex-row space-x-0 md:space-x-2 items-start p-2 gap-2">
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
      </div>
    </a>
  );
}
