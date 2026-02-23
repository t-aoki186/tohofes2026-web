import { fetchNews } from '$lib/server/news';

export async function load({ params }) {
	const news = await fetchNews();
	const item = news.find((n: any) => n.id === params.id);

	if (!item) {
		return {
			status: 404,
			error: new Error('ニュースが見つかりませんでした')
		};
	}
	return { item };
}
