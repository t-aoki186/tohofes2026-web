import { fetchOrganizations } from "$lib/server/organizations";

export async function load({ url }) {
  const category = url.searchParams.get("category");
  const search = url.searchParams.get("search");

  // 組織データのみを取得
  const orgs = await fetchOrganizations();

  let results = [];

  // カテゴリが organizations の場合、または指定がない場合に表示
  if (!category || category === "organizations") {
    results = orgs;
  }

  // キーワード検索の処理
  if (search) {
    const lower = search.toLowerCase();
    results = results.filter((item: any) =>
      item.title.toLowerCase().includes(lower) ||
      item.body.toLowerCase().includes(lower)
    );
  }

  return { results, category, search };
}