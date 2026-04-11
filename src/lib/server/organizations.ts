export async function fetchOrganizations() {
	try {
		const res = await fetch('https://pic.atserver186.jp/json/tf26/organizations.json');
		if (!res.ok) throw new Error('内容の取得に失敗しました。');
		const data = await res.json();
		return data;
	} catch (e) {
		return [];
	}
}
