import { fetchOrganizations } from "$lib/server/organizations";

export async function load({ url }) {
  const categoryParam = url.searchParams.get("category");
  const search = url.searchParams.get("search");

  //全データを取得
  const allData = await fetchOrganizations();

  let results = allData;

  //category/typeでの検索
  if (categoryParam) {
    results = allData.filter((item: any) => {
      //パラメータが jsonの "category" または "type" のいずれかに一致するか確認
      return item.category === categoryParam || item.type === categoryParam;
    });
  }

  //キーワード検索
  if (search) {
    const lower = search.toLowerCase();
    results = results.filter((item: any) =>
      item.title.toLowerCase().includes(lower) ||
      item.body.toLowerCase().includes(lower)
    );
  }

  return { results, category: categoryParam, search };
}