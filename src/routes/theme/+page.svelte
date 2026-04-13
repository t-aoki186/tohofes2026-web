<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = 'テーマ';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-15 mb-25">
		<div class="mt-4 min-w-full">
			<h1 class="tf26-section-title">テーマについて</h1>
			<br />
			<p class="mb-4 leading-[1.8rem]">
				第 75 回桐朋祭実行委員会では、まずテーマで表現したい要素について「桐朋祭が盛り上がる様子」
				「細かいところまで気を配り完成していく様子」 「すべてのものや人が活かされる様子」
				を重視することにしました。
				その上で話し合いを重ね、「桐朋生一人一人が個性を出しつつも、それが結束することで美しい調和と流れを伴った力を生み出す」という意味を込めた結うというテーマに決定しました。
				結うはYouともかかっており、昨年度の舞(my)の桐朋祭からお客さん一人一人に重きを置いたあなたの桐朋祭を作り上げようという目標でもあります。ぜひあなたの桐朋祭を存分に楽しんでください！
			</p>
			<!--
			<hr class="main-hr" />
			<h1 class="tf26-section-title mt-4">校長挨拶</h1>
			<br />
			<p class="mb-4 leading-[1.8rem]">
				桐朋生の特徴の一つに「個性の輝き」があります。一人ひとりが探究心を存分に発揮し、自分の世界を形作っていく。そのバイタリティとユニークさに、しばしば感心させられます。
				<br />
				今年のテーマは「鯨波」。一つひとつの参加団体が創り出したいもの、表現したいものを納得いくまで追い求め、形にしていく。そのエネルギーがみなさんの心を動かし、揺さぶることで起きる「波」。その波がぶつかり、重なり合うと強いうねりが生じ、遠くどこまでも伝わる「鯨波」、大波となっていきます。
				そして、そのムーブメントを力強く後押しするのが、個性豊かな桐朋生が桐朋祭に集い、心を一つにして高らかに雄壮に上げる「鯨波の声」です。
				<br />
				第73回桐朋祭の「鯨波」をぜひご体感いただき、桐朋生の「真髄」をご堪能ください。
			</p>
			
			<hr class="main-hr" />
			<h1 class="tf26-section-title mt-4">委員長挨拶</h1>
			<br />
			-->
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
