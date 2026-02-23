export async function fetchOrganizations() {
  const res = await fetch("https://pic.atserver186.jp/json/tf26/organizations.json");
  return await res.json();
}