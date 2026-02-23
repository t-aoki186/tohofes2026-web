<script>
	export let data;
	const item = data.item;

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
</script>

<svelte:head>
	<title>{data.site_title}</title>
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
		<p class="text-lg">{item.body}</p>
	</section>
</main>
