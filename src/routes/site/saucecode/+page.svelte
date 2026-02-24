<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
</script>

<svelte:head>
	<title>{data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">ソースコード</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
		<p>
			セキュリティの観点からソースコードの公開は第75回桐朋祭の終了後にGithubにて行います。
            <br />
            公開後、こちらのページにてURLをお知らせします。
		</p>
	</section>
</main>
