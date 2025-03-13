import * as cheerio from "cheerio";

export default async function fetchArticles() {
  try {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sylneyshii"
    );
    const data = await response.json();

    return data.items.map((article) => {
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
  } catch {
    console.error("Failed to get Medium RSS feed!");
    return [];
  }
}
