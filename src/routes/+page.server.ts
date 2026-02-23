import { fetchNews } from "$lib/server/news";

export async function load() {
  const news = await fetchNews();

  // 最新5件だけ
  const latest = news.slice(0, 5);

  return { latest };
}