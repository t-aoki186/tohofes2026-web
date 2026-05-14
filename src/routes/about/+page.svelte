<script lang="ts">
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
				class="mb-4 h-[25vh] w-full rounded-lg object-cover"
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
			<p class="fade-up-o leading-[1.8rem]">
				<!---->
				さて、そんな楽しい楽しい桐朋祭が今年度も開催されます！ 開催日時は、6/6(土) 12:00～17:00、6/7(日)
				9:30～17:00、6/8(月) 9:30～13:00 です。 ただし、6/8(月)は基本的に内部向けとなっておりますので、校外の方は6/6(土)または6/7(日)にお越しください。
				さあ、桐朋祭であなたも、桐朋生の"本気"を体感せよ！！
			</p>
			<br />
			<hr class="main-hr" />
			<br />
			<h1 class="tf26-section-title">桐朋祭に寄せて / Message</h1>
			<div class="grid-2-container mt-4 gap-2">
				<div class="grid-2-item ap-message-container rounded-lg">
					<div class="my-2 text-center">
						<h1
							class="justify-content mb-2 inline rounded-sm px-2 py-1 text-xl font-bold text-white"
							style="background-color: var(--main-text-color);"
						>
							校長あいさつ
						</h1>
					</div>

					<p class="mb-2">&nbsp;桐朋祭にようこそお越しくださいました。</p>
					<p class="mb-2">
						一つひとつの参加団体が創り出したいもの、そして、その団体に属する一人ひとりが表現したいものを、納得いくまで練り上げることで、桐朋祭ができあがります。彼らの発表一つひとつを目にし、じっくり耳を傾けていただければ幸いに存じます。
					</p>
					<p class="mb-2">
						&nbsp;今年のテーマは「結う」。合掌造りの里、白川郷で茅葺き屋根の葺き替えは村総出の大仕事。その際の繋がり、絆を「結（ゆい）」と呼びます。村人一人ひとりが葺き替えの経験と技量に応じた役割を果たすことで合掌造りは守り抜かれます。
						<br />
						「自分の家だけど、自分だけの家ではない」との思いを村人が持ち、「結」を通して受け継がれていく村の知恵。このあり方こそ、「結」の原点と語られています。
					</p>
					<p>
						&nbsp;第75回桐朋祭、「結う」の原点。それは、参加する生徒一人ひとりが持つ桐朋祭への熱い思いです。ぜひ、みなさんもご体感いただき、桐朋生が守り抜いてきた桐朋祭の真髄をご堪能ください。
					</p>
				</div>
				<div class="grid-2-item ap-message-container rounded-lg">
					<div class="my-2 text-center">
						<h1
							class="justify-content mb-2 inline rounded-sm px-2 py-1 text-xl font-bold text-white"
							style="background-color: var(--main-text-color);"
						>
							委員長あいさつ
						</h1>
					</div>
					<p class="mb-2">
						&nbsp皆さん、こんにちは。第75回桐朋祭実行委員長の松浦凛人です。本日は桐朋祭にお越しくださり、誠にありがとうございます。
					</p>
					<p class="mb-2">
						&nbsp;今日この日まで桐朋祭の準備をしていく中で、僕がもっとも意識してきたのは、自分がどんな桐朋祭を来場者の皆さまに見せたいのか、ただそれだけです。皆さんには、6月の湿気を吹き飛ばすような最高の気分を味わってほしいのです。
					</p>
					<p class="mb-2">
						&nbsp;正直に言うと、僕は案外適当な性格で、桐朋祭のことを妄想しすぎてそれを「実行」に移せているのかよくわからないです。まさに本末転倒です（笑）。そのため、仲間たちや顧問の教員にも迷惑をかけてきたと思います。しかし、周りの人はそれでも僕と桐朋祭を支えてくれました。
					</p>
					<p class="mb-2">
						&nbsp;そんな僕ですが、結局僕がどんな桐朋祭を目指してきたかと言えば、「受験生も、保護者や教員も、まさに老若男女が『桐朋生』であるかのように楽しめる桐朋祭」だったのではないかと思います。参加団体の桐朋生は皆さんと戯れる気合が十分です。ステージの桐朋生は皆さんを沸かせるために必死に頭を回転させていることでしょう。（他の桐朋生は・・・食べることに夢中です。）桐朋祭はまさに、人と人を結びつけ、束ね、「結う」存在ではないでしょうか。
					</p>
					<p>
						&nbsp;第75回桐朋祭にお越しくださった皆さん、僕から言えることは1つです。とにかく楽しんでいってください！！
					</p>
				</div>
			</div>
			<div class="main-link mt-4" style="border: none !important; s">
				<div class="link-3">
					<img
						src="https://pic.atserver186.jp/img/tohofes/about/tohofes2026-about-message.webp"
						loading="lazy"
						alt="桐朋祭に寄せて / Message 校長と桐朋祭実行委員長が手でハートを作っている写真"
						class="rounded-lg mt-4"
					/>
				</div>
				<div class="link-4">
					<div class="my-auto">
						<div class="mb-4 rounded-2xl bg-gray-50 p-4"><span class="font-bold">校長:</span>&nbsp;原口大助</div>
						<div class="mb-4 rounded-2xl bg-gray-50 p-4"><span class="font-bold">実行委員長:</span>&nbsp;松浦凛人</div>
					</div>
				</div>
			</div>
			<br />
			<hr class="main-hr" />
			<br />
			<h1 class="tf26-section-title">過去の様子</h1>
			<p>準備中です</p>
			<br />
			<hr class="main-hr" />
			<br />
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
	.grid-2-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.grid-2-item {
		padding: 0.4em;
	}

	.ap-message-container {
		border: 1px solid transparent;
		border-color: var(--main-text-color);
	}

	@media (max-width: 1024px) {
		.grid-2-container {
			display: flex;
			flex-direction: column;
		}
	}
</style>
