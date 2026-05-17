import { fetchOrganizations } from "$lib/server/organizations";

export async function load() {
  const org = await fetchOrganizations();

  // 配列をランダムに並び替えて先頭の5件を取得
  const randomOrg = [...org].sort(() => Math.random() - 0.5).slice(0, 5);

  return { random: randomOrg };
}
