<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
</script>

<svelte:head>
	<title>{data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 rounded-xl bg-(--title-bg-color)">
		<p use:reveal class="tf26-page-title">
			{#each '桐朋祭とは'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
		<p class="text-lg">テスト</p>
	</section>
</main>