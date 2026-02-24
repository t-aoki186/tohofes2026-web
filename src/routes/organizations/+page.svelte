<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
	import { getUrl } from '$lib/utils/getUrl';
</script>

<svelte:head>
	<title>{data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">参加団体</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
		<form class="s-search-form mb-4" action="/organizations/" method="GET">
			<input
				class="s-search-input"
				type="text"
				id="searchTerm"
				name="search"
				placeholder="検索..."
			/>
			<button class="m-search-button mr-4" type="button" title="絞り込み検索する"
				><i class="fa-solid fa-sliders"></i></button
			>
			<button class="m-search-button" type="submit" title="検索する"
				><i class="fas fa-search"></i></button
			>
		</form>
		{#each data.results as item}
			<li class="mb-4">
				<a href={getUrl(item)}>{item.title}</a>
				<p class="text-sm text-gray-600">
					{new Date(item.date).toLocaleDateString('ja-JP', {
						month: '2-digit',
						day: '2-digit'
					})}
				</p>
			</li>
		{/each}
	</section>
</main>
