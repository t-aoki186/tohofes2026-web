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
	<div class="container m-auto mt-25 rounded-xl bg-(--title-bg-color)">
		<p use:reveal class="tf26-page-title">
			{#each '参加団体'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
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
