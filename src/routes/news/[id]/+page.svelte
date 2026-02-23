<script>
	export let data;
	const item = data.item;

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
    import { mdToHtml } from '$lib/utils/markdown';
</script>

<svelte:head>
	<title>{item.title} | {data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-(--main-text-color) border-b-2">
		<p use:reveal class="tf26-page-title" style="color: black; margin-bottom: 0;">
			{#each item.title.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
		<div class="prose mt-4 min-w-full">{@html mdToHtml(item.body)}</div>
	</section>
</main>
