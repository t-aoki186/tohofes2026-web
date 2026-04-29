<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = '桐朋祭とは';
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
				src="https://pic.atserver186.jp/img/tohofes/past_tohofes.webp"
				alt="桐朋祭画像"
				class="h-[25vh] w-full rounded-lg mb-4 object-cover"
			/>
			<h1 class="tf26-section-title">桐朋祭の概要</h1>
			<br />
			<p class="fade-up-o mb-2 leading-[1.8rem]">
				桐朋祭は、毎年6月上旬に開催される、桐朋中学・高等学校の文化祭です。
				例年1万人以上の方にご来場いただく本校最大のイベントであり、約1,700名の桐朋生ひとりひとりが最高の自己表現を――ときにやりすぎなほどに――披露する場でもあります。
			</p>
			<p class="fade-up-o mb-2 leading-[1.8rem]">
				<!---->
				桐朋祭に来場してまず目を引くのが、毎年デザインの異なる入場門！ デザインから制作まですべて生徒が担当しており、桐朋祭にやってきたワクワク感を演出します。
				校舎内に入れば、そこは工夫が凝らされた数々の参加団体が集まる楽園。 廊下を魚や電車が闊歩し、メイド喫茶ではかわいいメイド服を着た生徒たちがご主人様をお待ちしています。
				もちろん、滞在時間や参加団体を周る数に制限はナシ。開場から閉場までずっと居ても飽きないほどの充実度です！
			</p>
			<p class="fade-up-o mb-2 leading-[1.8rem]">
				<!---->
				初夏の明るい日差しに照らされたテラスでは、大迫力の「大垂れ幕」の下でステージイベントが開催中。
				体力派桐朋生、知識派桐朋生、キラキラのJKになった桐朋生(!?)など、個性豊かすぎる桐朋生をお楽しみいただけます。
				第2体育室で開催される、有志バンドによる熱気を帯びたライブも必見です！
			</p>
			<p class="fade-up-o mb-2 leading-[1.8rem]">
				<!---->
				校内を歩き回って小腹が空いてきたら、飲食団体へ足を運んでみましょう。 校舎内の各種喫茶店、屋外の屋台エリアなど、選択肢はとっても豊富。
				できたての一品に舌鼓を打ちながら、ほっと息をつくひとときを提供してくれます。 なお、今年度から飲食団体の決済には完全キャッシュレスを導入。もう食券の列に並ぶ必要はありません！
				(※現金は使用できませんので、あらかじめ各種決済サービスへのチャージをお願いします。)
			</p>
			<p class="fade-up-o mb-4 leading-[1.8rem]">
				<!---->
				さて、そんな楽しい楽しい桐朋祭が今年度も開催されます！ 開催日時は、6/6(土) 12:00～17:00、6/7(日)
				9:30～17:00、6/8(月) 9:30～13:00 です。 ただし、6/8(月)は基本的に内部向けとなっておりますので、校外の方は6/6(土)または6/7(日)にお越しください。
				さあ、桐朋祭であなたも、桐朋生の"本気"を体感せよ！！
			</p>
			<hr class="main-hr" />
			<h1 class="tf26-section-title mt-4">テーマについて</h1>
			<br />
			<a href="/theme" class="link-main">
				<div class="link-main-underline">
					<i class="fa-solid fa-arrow-right-long"></i>
					<span>テーマについてはこちらをご覧ください</span>
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
