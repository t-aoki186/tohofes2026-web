<script>
	const { data } = $props();

	import { reveal } from '$lib/reveal';

	let pageTitle = 'お知らせ';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-15 mb-25">
		{#if data.news && data.news.length > 0}
			{#each data.news as item}
				<ul>
					<li>
						<a href="/news/{item.id}">
							<p>{item.date}</p>
							<p>{item.title}</p>
							<p>{item.heading}</p>
						</a>
					</li>
				</ul>
			{/each}
		{:else}
			<p>お知らせの取得に失敗しました。</p>
		{/if}
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>
