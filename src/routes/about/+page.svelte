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
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">桐朋祭とは</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
		<div class="mt-4 min-w-full">
			<h1 class="tf26-section-title">桐朋祭の概要</h1>
			<br />
			<p class="mb-4">
				桐朋祭(とうほうさい)は毎年6月x日からx日にわたって開催される桐朋中学・高等学校の文化祭で、今年で第75回目になります。
			</p>
			<hr class="main-hr" />
			<h1 class="tf26-section-title mt-4">校長挨拶</h1>
			<br />
			<p class="mb-4">
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
			<p class="mb-4">
				「桐朋祭って何？」 僕たちがこの１年間ぶつかり続けた問題です。
				シンプルですが白紙の答案用紙を埋めるようなこの難問に向き合うことで、僕らは今日へのイメージを膨らませてきました。
				<br />
				この問題が出題されるのは73回目なのでしょう。
				<br />
				僕が小学生のときに遊びにきた桐朋祭、先輩たちが目の前で見せてくれた「解答」は忘れることができません。僕はこれに魅了されて桐朋に入学することを決意しました。
				<br />
				入学すると僕たちはこの問題を眺めるだけでなく、解答者の一人になることができます。そこで知ったのはあの問題に求められる作業量と創造力、そして解釈。先輩たちはこの問題をその代の解釈をもって解きほぐしてきました。だから一つとして同じ「解答」、桐朋祭はないのです。それは僕たちも同じです。
				<br />
				桐朋祭に正解はありません。皆さんが思った事、それが僕たちの「答え合わせ」になります。それでは、桐朋祭でお待ちしています！
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
