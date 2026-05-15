<script lang="ts">
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
	import { getUrl } from '$lib/utils/getUrl';
	import { page } from '$app/state';

	import Modal from '$lib/components/Modal_Search.svelte';
	let show = $state(false);

	let pageTitle = '団体/飲食/企画/イベント';

	// --- 絞り込み検索用
	type QueryKey = 'category' | 'place' | 'date';

	function getChangedUrl(key: QueryKey, value: string | number): string {
		const searchParams = new URLSearchParams(page.url.searchParams);
		searchParams.set(key, String(value));
		return `?${searchParams.toString()}`;
	}
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
	<meta property="og:title" content="{pageTitle} | {data.site_title}" />
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<Modal bind:showModal={show}>
		<p class="mb-4 text-center text-xl font-bold text-(--main-text-color)">絞り込み検索</p>
		<div>
			<div class="mb-4">
				<p class="tf26-dialog-title mb-2">公開日</p>
				<a href="/organizations/?date=1" class="sp-refined-date">
					<p class="text-lg text-(--main-text-color)">06/06(土)</p>
				</a>
				<a href="/organizations/?date=2" class="sp-refined-date">
					<p class="text-lg text-(--main-text-color)">06/07(日)</p>
				</a>
				<a href="/organizations/?date=3" class="sp-refined-date">
					<p class="text-lg text-(--main-text-color)">06/08(月)</p>
				</a>
			</div>
			<div class="mb-2">
				<p class="tf26-dialog-title mb-2">カテゴリー</p>
				<p class="text-lg text-(--main-text-color)">参加団体</p>
				<br />
				<a href={getChangedUrl('category', 'organizations')} class="sp-refined-date-s">
					<p class="text-sm text-(--main-text-color)">すべて</p>
				</a>
				<a href={getChangedUrl('category', 'club')} class="sp-refined-date-s">
					<p class="text-sm text-(--main-text-color)">部活</p>
				</a>
				<a href={getChangedUrl('category', 'food')} class="sp-refined-date-s">
					<p class="text-sm text-(--main-text-color)">飲食</p>
				</a>
				<a href={getChangedUrl('category', 'sound')} class="sp-refined-date-s">
					<p class="text-sm text-(--main-text-color)">音響</p>
				</a>
				<a href={getChangedUrl('category', 'plan')} class="sp-refined-date-s">
					<p class="text-sm text-(--main-text-color)">企画</p>
				</a>
				<a href={getChangedUrl('category', 'event')} class="sp-refined-date-s">
					<p class="text-sm text-(--main-text-color)">イベント</p>
				</a>
				<a href={getChangedUrl('category', 'organization-blogs')} class="sp-refined-date-s">
					<p class="text-sm text-(--main-text-color)">参加団体ブログ</p>
				</a>
			</div>
			<div>
				<p class="tf26-dialog-title mb-2">場所</p>
			</div>
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
		<p class="tf26-page-title" style="color: black; margin-bottom: 0; view-transition-name: tforgtitle-hero;">{pageTitle}</p>
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
					<div class="mb-2">
						<p class="text-xl font-bold text-(--main-text-color)">{item.title}</p>
					</div>
					<div class="flex">
						<div class="mr-2 flex-col" style="min-width: 0; max-width: 100%;">
							<p
								class="sp-search-result-text text-xs"
								style="color: color-mix(in srgb, var(--main-text-color), transparent 50%);"
							>
								{item.contributor || 'ニュース'}
							</p>
							<p class="sp-search-result-heading h-1/2 text-sm text-gray-600">
								{item.heading}
							</p>
							<p class="sp-search-result-text text-left-decoration items-end text-sm text-gray-600">
								{item.body}
							</p>
						</div>
						<img
							src={item.thumbnail ||
								'https://pic.atserver186.jp/img/tohofes/thumbnail/webp/no-image.webp'}
							alt="サンプル00"
							class="ml-auto w-1/2 rounded-lg"
						/>
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
</style>
