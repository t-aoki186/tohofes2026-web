import { fetchNews } from "$lib/server/news";
import { fetchOrganizations } from "$lib/server/organizations";

export async function load({ url }) {
  const category = url.searchParams.get("category");
  const search = url.searchParams.get("search");

  // まず両方読み込む
  const news = await fetchNews();
  const orgs = await fetchOrganizations();

  let results = [];

  // カテゴリ絞り込み
  if (category === "news") {
    results = news;
  } else if (category === "organizations") {
    results = orgs;
  } else {
    // カテゴリ指定なし → 全部
    results = [...news, ...orgs];
  }

  // キーワード検索
  if (search) {
    const lower = search.toLowerCase();
    results = results.filter((item:any) =>
      item.title.toLowerCase().includes(lower) ||
      item.body.toLowerCase().includes(lower)
    );
  }

  return { results, category, search };
}