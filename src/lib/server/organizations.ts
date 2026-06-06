import * as fs from 'fs';
import * as path from 'path';

export async function fetchOrganizations() {
	try {
		const backupPath = path.join(process.cwd(), 'src/lib/server/data/organization.json');
		const backupData = fs.readFileSync(backupPath, 'utf-8');
		return JSON.parse(backupData);
	} catch (error) {
		console.error('参加団体情報の取得に失敗しました。:', error);
		return [];
	}
}
