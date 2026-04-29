<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = 'テーマ';
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
		<div class="min-w-full">
			<img
				src="https://pic.atserver186.jp/img/tohofes/tf26-logo-m-v3.webp"
				alt="第75回桐朋祭ロゴ"
				class="m-auto ml-auto mb-4 h-auto w-[20%]"
				style="view-transition-name: tftheme-hero;"
			/>
			<h1 class="tf26-section-title">テーマについて</h1>
			<br />
			<p class="fade-up-o mb-4 leading-[1.8rem]">
				第 75 回桐朋祭実行委員会では、まずテーマで表現したい要素について、「桐朋祭が盛り上がる様子」
				「細かいところまで気を配り完成していく様子」 「すべてのものや人が活かされる様子」
				を重視することにしました。
				<br />
				その上で話し合いを重ね、「桐朋生一人一人が個性を出しつつも、それが結束することで美しい調和と流れを伴った力を生み出す」という意味を込めた、「結う」という言葉をテーマに決定しました。
				<br />
				「結う」は英語の"You"ともかかっており、昨年度のテーマである「舞(my)」の桐朋祭からさらに進化し、お客様一人一人に重きを置いた「あなた(you)」の桐朋祭を作り上げようという目標も表しています。
				<br />
				ぜひ、「あなたの桐朋祭」を存分に楽しんでください！
			</p>
			<hr class="main-hr" />
			<h1 class="tf26-section-title mt-4">桐朋祭とは</h1>
			<br />
			<a href="/about" class="link-main">
				<div class="link-main-underline">
					<i class="fa-solid fa-arrow-right-long"></i>
					<span>桐朋祭についてはこちらをご覧ください</span>
				</div>
			</a>
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>

<style>
</style>
