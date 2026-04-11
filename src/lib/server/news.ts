export async function fetchNews() {
  try {
    const res = await fetch("https://pic.atserver186.jp/json/tf26/news.json");
    if (!res.ok) throw new Error("Fetch failed");
    const data = await res.json();
    return data;
  } catch (e) {
    return [];
  }
}