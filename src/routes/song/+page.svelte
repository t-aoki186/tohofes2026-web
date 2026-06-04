<script lang="ts">
	const { data } = $props();

	import { onMount } from 'svelte';

	let pageTitle = 'テーマソング';

	// 未定義の変数を定義
	const primaryCategory = 'example-category';
	const item = {
		location: 'サンプル場所'
	};

	/*s: 共有機能*/
	function getShareDescription() {
		if (typeof document === 'undefined') {
			return '';
		}
		const descriptionMeta = document.querySelector("meta[name='description']");
		return descriptionMeta ? descriptionMeta.getAttribute('content') || '' : '';
	}

	async function handleShare() {
		if (typeof navigator === 'undefined' || !navigator.share) {
			console.warn('Web Share API is not supported in this browser.');
			return;
		}

		try {
			await navigator.share({
				title: document.title,
				text: getShareDescription(),
				url: window.location.href
			});
			console.log('共有に成功しました');
		} catch (error) {
			console.error('共有に失敗しました', error);
		}
	}
	/*e: 共有機能*/
</script>

<svelte:head>
	<title>{pageTitle} | {data?.site_title || 'サイト'}</title>
	<meta property="og:title" content="{pageTitle} | {data?.site_title || 'サイト'}" />
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-15 mb-25">
		<div class="orgp-top-content">
			<div class="orgp-top-grid-item">
				<div class="w-full">
					<!--s:カルーセル-->
					<div class="carousel-wrapper">
						<iframe
							src="https://www.youtube.com/embed/1293xEiA0Nc?si=c9Hjc7qqu9g9CA8e"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
							class="w-full rounded-2xl"
							style="aspect-ratio: 16 / 9;"
						></iframe>
					</div>
					<!--e:カルーセル-->
				</div>
			</div>
			<div class="orgp-top-grid-item">
				<a
					href="/organizations/?category={primaryCategory}"
					class="mb-4 inline-block text-2xl text-(--main-text-color)"
				>
					<i class="fa-solid fa-tag mr-1"></i>{pageTitle}
				</a>
				<hr class="main-hr" />
				<button
					type="button"
					id="pageShareButton"
					onclick={handleShare}
					class="mx-auto my-4 flex cursor-pointer flex-col"
				>
					<div class="text-center text-(--main-text-color)">
						<i class="fa-solid fa-arrow-up-from-bracket text-4xl"></i>
						<p class="text-xl">共有</p>
					</div>
				</button>
				<hr class="main-hr" />
			</div>
		</div>
		<div class="prose mt-8 min-w-full text-xl">
			<h2>ケダマ虫放浪記</h2>
			<p>作詞 & 作曲 : 外岡 悠人</p>
			<hr class="main-hr" />
			<div class="lyrics-container">
				<div class="orgp-top-grid-item">
					<p>
						疲れたケモノに見せたい
						<br />
						昨日よりも増えたガムテープの芯
						<br />
						不思議な罠を作りたい
						<br />
						気の向くままでいい
						<br />
						解けぬように
						<br /><br />
						端から端までどれほどの
						<br />
						作りかけを噛み締めてきた？
						<br />
						知りたくなるなら&nbsp;来ればいい
						<br />
						誰かの期待を払いのけて
						<br /><br />
						固めの毛玉になりたい
						<br />
						目立たなくてもいい
						<br />
						そんなもんさ
						<br /><br />
						夢のまた夢みたなら
						<br />
						平凡な星&nbsp;ありふれた青空
						<br />
						自信はそれの向こう側
						<br />
						取り返しに行かね？
						<br />
						緩い坂を転げに行こうぜ!
					</p>
				</div>
				<div class="orgp-top-grid-item">
					<p>
						回り道した世界で変わらずいられる
						<br />そんな安直じゃない
						<br />
						誰かの発明を真似て&nbsp;満たされるのか
						<br />
						そう野暮じゃない
						<br /><br />
						見知らぬ街からどれほどの
						<br />
						乱れた歌声が聞こえた？
						<br />
						聞きたくなるなら&nbsp;来ればいい
						<br />
						不安のうねりをはねのけて
						<br /><br />
						答えを待たず&nbsp;ほらまだ
						<br />
						冴えない笑顔&nbsp;腑に落ちぬ衝動
						<br />
						足りないモノはこれから
						<br />
						染み付いたまま
						<br />
						結び目だけは離さないでいて
						<br /><br />
						溶ける気など&nbsp;もうなくて
						<br />
						負けず嫌いな&nbsp;毛玉だから
						<br />
						逃げはしない&nbsp;きっと
						<br /><br />
						夢のまた夢みたなら
						<br />
						平凡な星&nbsp;ありふれた青空
						<br />
						自信はそれの向こう側
						<br />
						意地でもいいから
						<br />
						結び目だけは離さないでいて
					</p>
				</div>
			</div>
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>

<style>
	.orgp-top-content {
		display: grid;
		grid-template-columns: 4fr 3fr;
		gap: 2rem;
	}

	.lyrics-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	@media (max-width: 768px) {
		.orgp-top-content,
		.lyrics-container {
			grid-template-columns: 1fr;
		}
	}

	.carousel-wrapper {
		width: 60vw;
		margin: 0 auto;
	}

	@media (max-width: 1024px) {
		.carousel-wrapper {
			width: 90vw;
		}
	}
</style>
