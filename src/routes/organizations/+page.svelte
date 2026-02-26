<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
	import { getUrl } from '$lib/utils/getUrl';

	import Modal from '$lib/components/Modal.svelte';
	let show = $state(false);

	let pageTitle = '団体/飲食/イベント';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<Modal bind:showModal={show}>
		<div>
			<p class="tf26-dialog-title">公開日</p>
			<ul>
				<li>
					<p class="mb-4">test</p>
				</li>
			</ul>
			<p class="tf26-dialog-title">場所</p>
			<ul>
				<li>
					<p class="mb-4">test</p>
				</li>
			</ul>
			<p class="tf26-dialog-title">カテゴリー</p>
			<ul>
				<li>
					<a href="/organizations/?category=news">ニュース</a>
				</li>
				<li>
					<a href="/organizations/?category=organizations">団体/飲食/イベント</a>
				</li>
			</ul>
		</div>
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
		<p class="my-4">{data.results.length}件の 団体/飲食/イベント が見つかりました。</p>
		<div class="flex flex-wrap justify-center gap-4">
			{#each data.results as item}
				<article class="sp-search-result-card">
					<a href={getUrl(item)} class="sp-search-result-link-overlay"
						><p class="hidden">hidden:エラー対策</p></a
					>
					<div class="mb-2">
						<p class="text-lg font-bold text-(--main-text-color)">{item.title}</p>
						<p
							class="text-sm"
							style="color: color-mix(in srgb, var(--main-text-color), transparent 50%);"
						>
							{item.contributor || 'ニュース'}
						</p>
					</div>
					<div class="flex"></div>
					<p class="text-sm text-gray-600">
						{item.heading}
					</p>
				</article>
			{/each}
		</div>
	</section>
</main>

<style>
	.sp-search-result-card {
		position: relative;
		display: inline-block;
		width: calc(100% / 3 - 2rem);
		height: 20vh;
		border-radius: 10px;
		padding: 15px;
		margin: 10px;
		transition: 0.3s;
		border: 1px solid var(--main-text-color);
	}

	.sp-search-result-card > a.sp-search-result-link-overlay {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
	}

	@media (max-width: 1024px) {
		.sp-search-result-card {
			width: calc(100% / 2 - 2rem);
		}
	}

	@media (max-width: 640px) {
		.sp-search-result-card {
			width: calc(100% - 2rem);
		}
	}
</style>
