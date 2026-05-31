// カテゴリーの型定義
export type CategoryKey = 'general' | 'food' | 'bands' | 'other';

// カテゴリー情報の型定義
export interface CategoryInfo {
	label: string;
	icon: string;
	//color?: string;
}

// カテゴリー変換マップ（ラベル＋アイコン）
export const categoryMap: Record<CategoryKey, CategoryInfo> = {
	general: {
		label: '一般',
		icon: 'fa-regular fa-building'
		//color: '#000'
	},
	food: {
		label: '飲食',
		icon: 'fa-solid fa-utensils',
		//color: '#000'
	},
	bands: {
		label: 'バンド',
		icon: 'fa-solid fa-guitar',
		//color: '#000'
	},
	other: {
		label: 'その他',
		icon: 'fa-solid fa-guitar',
		//color: '#000'
	}
};

// ラベルのみを取得する関数（シンプル版）
export function getCategoryLabel(category: string): string {
	return categoryMap[category as CategoryKey]?.label || category;
}

export function getCategoryInfo(category: string): CategoryInfo & { label: string } {
  const info = categoryMap[category as CategoryKey];
  return info || { label: category, icon: 'fa-solid fa-tag' };
}