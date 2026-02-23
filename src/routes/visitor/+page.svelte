<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
</script>

<svelte:head>
	<title>{data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1">
	<div class="container mx-auto">
		<p use:reveal class="tf26-page-title">
			{#each '来場者の皆様へ'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto rounded-xl p-4 shadow-[0_4px_10px_var(--ats-text-color)]">
		<p>test</p>
	</div>
</main>
