export async function fetchOrganizations() {
	try {
		const res = await fetch('https://api.atserver186.jp/tf26/api/json/organization.json');
		if (!res.ok) throw new Error('内容の取得に失敗しました。');
		const data = await res.json();
		return data;
	} catch (e) {
		return [];
	}
}
