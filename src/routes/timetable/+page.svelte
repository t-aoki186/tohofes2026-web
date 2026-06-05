<script lang="ts">
	import type { PageData } from './$types';
	import Timetable from '$lib/components/Timetable.svelte';

	let { data }: { data: PageData } = $props();

	let pageTitle = 'タイムテーブル';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
	<meta property="og:title" content="{pageTitle} | {data.site_title}" />
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-15 mb-25">
		<div class="bg-gray-100 rounded-xl block md:hidden">
			<img src="https://pic.atserver186.jp/img/tohofes/material/x_scroll.webp" alt="横にスクロールしてください。" class="mx-auto w-[30%] pt-10 pb-2" />
			<p class="text-center text-lg text-gray-600 pb-10">
				タイムテーブルは横にスクロールできます
			</p>
		</div>
		<div class="scroll-container">
			<div class="slide-item">
				<Timetable events={data.events} />
			</div>
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>

<style>
	.scroll-container {
		width: 100%;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch; /* iOS でスムーズなスクロール */
	}

	.slide-item {
		display: inline-block;
		width: 100%;
		min-width: fit-content;
	}

	/* スマートフォン対応 */
	@media (max-width: 768px) {
		.scroll-container {
			overflow-x: auto;
			overflow-y: hidden;
		}

		.slide-item {
			display: block;
			width: 100%;
			overflow-x: auto;
		}
	}

	/* スクロールバーのスタイル（オプション） */
	.scroll-container::-webkit-scrollbar {
		height: 8px;
	}

	.scroll-container::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 4px;
	}

	.scroll-container::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 4px;
	}

	.scroll-container::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>
