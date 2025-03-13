import { useEffect, useState } from "react";
import BlogCard from "./BlogCard.jsx";
import PageHeader from "./PageHeader.jsx";
import { LuLoaderCircle } from "react-icons/lu";
import { PiArticleMediumBold } from "react-icons/pi";
import fetchArticles from "../lib/articles.js";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      const articlesList = await fetchArticles();
      setArticles(articlesList);
      setLoading(false);
    };

    loadArticles();
  }, []);

  return (
    <div>
      <PageHeader icon={<PiArticleMediumBold size={36} />} text="Articles" />
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 relative">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center h-100">
              <LuLoaderCircle className="animate-spin h-12 w-12 text-gray-700" />
            </div>
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
