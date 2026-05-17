import { fetchOrganizations } from "$lib/server/organizations";

export async function load() {
  const org = await fetchOrganizations();

  // 配列をランダムに並び替えて先頭の5件を取得
  const randomOrg = [...org].sort(() => Math.random() - 0.5).slice(0, 5);

  return {
    site_title: '第75回桐朋祭(桐朋祭2026)',
    logo: 'https://pic.atserver186.jp/img/tohofes/tf26-logo-m-v2.webp',
    logo_2: 'https://pic.atserver186.jp/img/tohofes/tf26-logo-s.webp',
    logo_alt: '第75回桐朋祭ロゴ',
    random: randomOrg
  };
}
