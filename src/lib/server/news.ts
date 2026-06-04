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
    console.error('News fetch error:', e);
    return [];
  }
}
