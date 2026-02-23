export async function fetchNews() {
  const res = await fetch("https://pic.atserver186.jp/json/tf26/news.json");
  const data = await res.json();
  return data;
}