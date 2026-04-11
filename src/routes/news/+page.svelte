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
					<li class="mx-auto mb-4 w-full list-none">
						<a href="/news/{item.id}">
							<div
								class="news-list flex border-l-2 pl-4"
								style="border-left-color: var(--main-text-color);"
							>
								<div class="news-list-date-box mr-4">
									<span class="news-list-month"
										>{String(new Date(item.date).getMonth() + 1).padStart(2, '0')}</span
									>
									<span class="news-list-slash">/</span>
									<span class="news-list-date"
										>{String(new Date(item.date).getDate()).padStart(2, '0')}</span
									>
								</div>
								<div class="truncate-parent flex-col">
									<p class="truncate-title news-list-title ml-2 font-bold">{item.title}</p>
									<p class="truncate-heading news-list-heading mb-2">{item.heading}</p>
								</div>
								<div class="news-list-icon my-auto ml-auto">
									<i class="fa-solid fa-angles-right left-auto mr-2"></i>
								</div>
							</div>
						</a>
					</li>
				</ul>
			{/each}
		{:else}
			<p>お知らせの取得に失敗しました</p>
		{/if}
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>
