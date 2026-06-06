import * as fs from 'fs';
import * as path from 'path';

export async function fetchOrganizations() {
	try {
		const res = await fetch('https://api.atserver186.jp/tf26/api/json/organization.json');
		if (!res.ok) throw new Error('内容の取得に失敗しました。');
		const data = await res.json();
		return data;
	} catch (e) {
		// API失敗時はローカルバックアップから読み込む
		try {
			const backupPath = path.join(process.cwd(), 'src/lib/server/data/organization.json');
			const backupData = fs.readFileSync(backupPath, 'utf-8');
			console.warn('APIアクセス失敗、ローカルバックアップから読み込みました:', e);
			return JSON.parse(backupData);
		} catch (backupError) {
			console.error('バックアップファイル読み込み失敗:', backupError);
			return [];
		}
	}
}
