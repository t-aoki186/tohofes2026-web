import { fetchOrganizations } from '$lib/server/organizations';

//カテゴリをカンマ区切りで分割して配列として返す
function getCategories(category?: string) {
	if (!category || typeof category !== 'string') return [];
	return category
		.split(',')
		.map((value) => value.trim())
		.filter((value) => value.length > 0);
}

function hasCategory(category?: string, query?: string) {
	if (!query) return false;
	return getCategories(category).includes(query);
}

export async function load({ url }) {
	const categoryParam = url.searchParams.get('category');
	const search = url.searchParams.get('search');

	//除外カテゴリ
	const excludeCategories = ['stage', 'student-lessons'];

	//全データを取得し、指定されたカテゴリを除外
	const allData = await fetchOrganizations();
	const filteredData = allData.filter(
		(item: any) => !excludeCategories.some((exclude) => hasCategory(item.category, exclude))
	);

	let results = filteredData;

	//category/typeでの検索
	if (categoryParam) {
		results = filteredData.filter((item: any) => {
			return hasCategory(item.category, categoryParam) || item.type === categoryParam;
		});
	}

	//キーワード検索
	if (search) {
		const lower = search.toLowerCase();
		results = results.filter(
			(item: any) =>
				item.title?.toLowerCase().includes(lower) ||
				item.body?.toLowerCase().includes(lower) ||
				item.location?.toLowerCase().includes(lower)
		);
	}

	return { results, category: categoryParam, search };
}
