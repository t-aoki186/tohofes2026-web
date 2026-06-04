import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    // JSONデータを取得
    const response = await fetch('https://pic.atserver186.jp/json/tf26/credit.json');
    
    if (!response.ok) {
        throw new Error(`データの取得に失敗しました: ${response.status}`);
    }
    
    const items = await response.json();
    
    return {
        // OS側の /etc/environment 等に設定した変数名
        serverLocation: env.SERVER_LOCATION || 'Unknown Server',
        items: items
    };
};