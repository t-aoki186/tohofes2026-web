import { fetchNews } from "$lib/server/news";

export async function load() {
  const news = await fetchNews();
  return { news };
}