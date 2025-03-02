import { useEffect, useState } from "react";
import ArrowIcon from "./icons/ArrowIcon.jsx";
import TextSkeleton from "./TextSkeleton.jsx";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sylneyshii",
    )
      .then((res) => res.json())
      .then((data) => {
        const articlesList = data.items.map((article) => ({
          title: article.title,
          link: article.guid,
          date: article.pubDate,
        }));

        setArticles(articlesList);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      {loading ? (
        <TextSkeleton />
      ) : (
        articles.map((article) => (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={article.link}
            key={article.title}
            className="flex flex-col space-y-1 mb-4"
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 items-center">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {new Date(article.date.replace(" ", "T")).toLocaleDateString(
                  undefined,
                  {},
                )}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {article.title}
              </p>
              <ArrowIcon />
            </div>
          </a>
        ))
      )}
    </div>
  );
}
