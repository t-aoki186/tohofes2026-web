<script lang="ts">
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
	import { getUrl } from '$lib/utils/getUrl';
	import { page } from '$app/state';

	import Modal from '$lib/components/Modal_Search.svelte';
	let show = $state(false);

	let pageTitle = '参加団体';

	import { getCategoryLabel, getCategoryInfo } from '$lib/utils/orgCategoryMap.js';

	/*s: 絞り込み検索*/
	type QueryKey = 'category' | 'place' | 'date';

	function getChangedUrl(key: QueryKey, value: string | number): string {
		const searchParams = new URLSearchParams(page.url.searchParams);
		searchParams.set(key, String(value));
		return `?${searchParams.toString()}`;
	}

	// アクティブ判定用のヘルパー関数
	function isActive(key: QueryKey, value: string | number): boolean {
		const currentValue = page.url.searchParams.get(key);
		return currentValue === String(value);
	}

	// date用のアクティブ判定（特別な値の場合）
	function isDateActive(value: string): boolean {
		const currentDate = page.url.searchParams.get('date');
		return currentDate === value;
	}

	// この close 関数を追加または修正
	const close = () => {
		show = false;
	};
	/*e: 絞り込み検索*/
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
	<meta property="og:title" content="{pageTitle} | {data.site_title}" />
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<Modal bind:showModal={show}>
		<p class="mb-4 text-center text-xl font-bold text-(--main-text-color)">絞り込み検索</p>
		<div>
			<div class="mb-2">
				<p class="tf26-dialog-title mb-2">カテゴリー</p>
				<a
					href={getChangedUrl('category', '')}
					class:active={isActive('category', '')}
					class="sp-refined-date"
				>
					<p class="text-lg text-(--main-text-color)">すべて</p>
				</a>
				<p class="text-lg text-(--main-text-color)">参加団体</p>
				<a
					href={getChangedUrl('category', 'general')}
					class="sp-refined-date-s"
					class:active={isActive('category', 'general')}
				>
					<p class="text-sm text-(--main-text-color)">一般</p>
				</a>
				<a
					href={getChangedUrl('category', 'food')}
					class="sp-refined-date-s"
					class:active={isActive('category', 'food')}
				>
					<p class="text-sm text-(--main-text-color)">飲食</p>
				</a>
				<a
					href={getChangedUrl('category', 'bands')}
					class="sp-refined-date-s"
					class:active={isActive('category', 'bands')}
				>
					<p class="text-sm text-(--main-text-color)">バンド</p>
				</a>
				<a
					href={getChangedUrl('category', 'other')}
					class="sp-refined-date-s"
					class:active={isActive('category', 'other')}
				>
					<p class="text-sm text-(--main-text-color)">その他</p>
				</a>
				<p class="text-lg text-(--main-text-color)">企画カテゴリ</p>
				<a
					href={getChangedUrl('category', '展示')}
					class="sp-refined-date-s"
					class:active={isActive('category', '展示')}
				>
					<p class="text-sm text-(--main-text-color)">展示</p>
				</a>
				<a
					href={getChangedUrl('category', 'パフォーマンス')}
					class="sp-refined-date-s"
					class:active={isActive('category', 'パフォーマンス')}
				>
					<p class="text-sm text-(--main-text-color)">パフォーマンス</p>
				</a>
				<a
					href={getChangedUrl('category', '体験')}
					class="sp-refined-date-s"
					class:active={isActive('category', '体験')}
				>
					<p class="text-sm text-(--main-text-color)">体験</p>
				</a>
				<a
					href={getChangedUrl('category', 'アクティビティ')}
					class="sp-refined-date-s"
					class:active={isActive('category', 'アクティビティ')}
				>
					<p class="text-sm text-(--main-text-color)">アクティビティ</p>
				</a>
				<a
					href={getChangedUrl('category', 'bands')}
					class="sp-refined-date-s"
					class:active={isActive('category', 'bands')}
				>
					<p class="text-sm text-(--main-text-color)">バンド</p>
				</a>
				<a
					href={getChangedUrl('category', '屋台')}
					class="sp-refined-date-s"
					class:active={isActive('category', '屋台')}
				>
					<p class="text-sm text-(--main-text-color)">屋台</p>
				</a>
				<a
					href={getChangedUrl('category', '喫茶')}
					class="sp-refined-date-s"
					class:active={isActive('category', '喫茶')}
				>
					<p class="text-sm text-(--main-text-color)">喫茶</p>
				</a>
				<p class="text-lg text-(--main-text-color)">企画特記事項</p>
				<a
					href={getChangedUrl('category', 'グループ向け')}
					class="sp-refined-date-s"
					class:active={isActive('category', 'グループ向け')}
				>
					<p class="text-sm text-(--main-text-color)">グループ向け</p>
				</a>
				<a
					href={getChangedUrl('category', '受験生向け')}
					class="sp-refined-date-s"
					class:active={isActive('category', '受験生向け')}
				>
					<p class="text-sm text-(--main-text-color)">受験生向け</p>
				</a>
				<a
					href={getChangedUrl('category', '配布物あり')}
					class="sp-refined-date-s"
					class:active={isActive('category', '配布物あり')}
				>
					<p class="text-sm text-(--main-text-color)">配布物あり</p>
				</a>
				<a
					href={getChangedUrl('category', '所要時間短め')}
					class="sp-refined-date-s"
					class:active={isActive('category', '所要時間短め')}
				>
					<p class="text-sm text-(--main-text-color)">所要時間短め</p>
				</a>
				<a
					href={getChangedUrl('category', 'SNS映え')}
					class="sp-refined-date-s"
					class:active={isActive('category', 'SNS映え')}
				>
					<p class="text-sm text-(--main-text-color)">SNS映え</p>
				</a>
				<a
					href={getChangedUrl('category', '有志団体')}
					class="sp-refined-date-s"
					class:active={isActive('category', '有志団体')}
				>
					<p class="text-sm text-(--main-text-color)">有志団体</p>
				</a>
				<p class="text-lg text-(--main-text-color)">ブログ</p>
				<a
					href={getChangedUrl('category', 'article')}
					class="sp-refined-date-s"
					class:active={isActive('category', 'article')}
				>
					<p class="text-sm text-(--main-text-color)">参加団体特設記事</p>
				</a>
			</div>
			<!--
			<div>
				<p class="tf26-dialog-title mb-2">場所</p>
				test
			</div>
			-->
		</div>
		<!--s:閉じる/リセット-->
		<div class="mt-auto">
			<hr class="main-hr" />
			<div class="flex">
				<a href="/organizations/" class="link-main">
					<div class="link-main-underline">
						<i class="fa-solid fa-arrow-rotate-left"></i>
						<span>リセット</span>
					</div>
				</a>
				<button onclick={close} class="link-main" type="button">
					<div class="link-main-underline">
						<i class="fa-solid fa-xmark"></i>
						<span>閉じる</span>
					</div>
				</button>
			</div>
		</div>
		<!--e:閉じる/リセット-->
	</Modal>

	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-10 mb-25 rounded bg-white p-4">
		<form class="s-search-form mb-4" action="/organizations/" method="GET">
			<input
				class="s-search-input"
				type="text"
				id="searchTerm"
				name="search"
				placeholder="検索..."
			/>
			<button
				type="button"
				class="m-search-button mr-4"
				onclick={() => (show = true)}
				title="絞り込み検索する"><i class="fa-solid fa-sliders"></i></button
			>
			<button class="m-search-button" type="submit" title="検索する"
				><i class="fas fa-search"></i></button
			>
		</form>
		<p class="my-4">{data.results.length}件の {pageTitle} が見つかりました。</p>
		<div class="flex flex-wrap justify-center gap-4">
			{#each data.results as item}
				<article class="sp-search-result-card">
					<a href={getUrl(item)} class="sp-search-result-link-overlay"
						><p class="hidden">hidden:エラー対策</p></a
					>
					<div class="mb-2 flex">
						<p class="w-full text-xl font-bold text-(--main-text-color)">{item.title}</p>
						<p class="text-right whitespace-nowrap text-(--main-text-color)">
							<i class="fa-solid fa-location-dot mr-1 text-xs"></i>{item.location}
						</p>
					</div>
					<div class="flex">
						<div class="mr-2 flex-col" style="min-width: 0; max-width: 100%;">
							<p class="sp-search-result-text text-xs text-(--main-text-color) mb-4">
								<i class="fa-solid fa-tag mr-1"></i>{getCategoryLabel(item.category)}
							</p>
							<p class="sp-search-result-text text-left-decoration items-end text-sm text-gray-600">
								{item.body}
							</p>
						</div>
						<div class="mr-0 items-end">
							<div
								style="width: 120px; height: 120px; position: relative; background-color: #f0f0f0; border-radius: 8px; overflow: hidden;"
							>
								<img
									src={item.thumbnail ||
										'https://pic.atserver186.jp/img/tohofes/thumbnail/webp/no-image.webp'}
									alt="{item.title}サムネイル"
									class="ml-auto rounded-lg"
								/>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>

<style>
	/* アクティブなリンクのスタイル */
	.active {
		font-weight: bold;
		background-color: color-mix(in srgb, var(--main-text-color) 15%, transparent);
		color: white;
	}

	/* sp-refined-date と sp-refined-date-s 用のアクティブスタイル */
	.sp-refined-date.active,
	.sp-refined-date-s.active {
		font-weight: bold;
		color: #0066cc;
		position: relative;
	}
</style>
