import * as fs from 'fs';
import * as path from 'path';

export async function fetchNews() {
  try {
    const backupPath = path.join(process.cwd(), 'src/lib/server/data/news.json');
    const backupData = fs.readFileSync(backupPath, 'utf-8');
    return JSON.parse(backupData);
  } catch (error) {
    console.error('お知らせの読み込みに失敗しました。:', error);
    return [];
  }
}
