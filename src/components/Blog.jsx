import { useEffect, useState } from "react";
import * as cheerio from "cheerio";
import TextSkeleton from "./TextSkeleton.jsx";
import BlogCard from "./BlogCard.jsx";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sylneyshii"
    )
      .then((res) => res.json())
      .then((data) => {
        const articlesList = data.items.map((article) => {
          console.log(article);
          const $ = cheerio.load(article.description);
          const thumbnail = $("img").first().attr("src") || "default-image.jpg";
          return {
            title: article.title,
            categories: article.categories,
            link: article.guid,
            date: article.pubDate,
            thumbnail,
          };
        });

        setArticles(articlesList);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {loading ? (
            <TextSkeleton />
          ) : (
            articles.map((article) => (
              <BlogCard article={article} key={article.title} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
