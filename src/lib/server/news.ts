import * as fs from 'fs';
import * as path from 'path';

// 取得したいJSONのURLを指定
const NEWS_URL = 'https://api.atserver186.jp/tf26/api/json/news.json';

export async function fetchNews() {
  try {
    const response = await fetch(NEWS_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    // API失敗時はローカルバックアップから読み込む
    try {
      const backupPath = path.join(process.cwd(), 'src/lib/server/data/news.json');
      const backupData = fs.readFileSync(backupPath, 'utf-8');
      console.warn('APIアクセス失敗、ローカルバックアップから読み込みました:', e);
      return JSON.parse(backupData);
    } catch (backupError) {
      console.error('バックアップファイル読み込み失敗:', backupError);
      return [];
    }
  }
}
