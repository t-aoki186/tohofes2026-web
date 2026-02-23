<script>
	/*共通*/
	const { data } = $props();
	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
	/**/
</script>

<svelte:head>
	<title>{data.site_title}</title>
</svelte:head>

<div class="relative h-screen w-full">
	<img
		src="https://pic.atserver186.jp/img/tohofes/toho.webp"
		alt="桐朋画像"
		class="h-full w-full object-cover"
	/>
	<!--スクロールインジケーターを重ねる-->
	<div class="absolute right-0 bottom-6 z-10 md:right-6">
		<div id="scroll-wrapper">
			<div id="scroll-wrapper-inner">
				<div id="scroll-title">Scroll</div>
				<div id="scroll-down"></div>
			</div>
		</div>
	</div>
</div>

<main>
	<!--s:来場者の皆様へ-->
	<div class="tp-info container mx-auto mt-10 rounded-xl p-4">
		<p class="mb-2 text-center font-bold"><i class="fa-solid fa-circle-info"></i>持ち物について</p>
		<p class="mb-2 text-center">
			校内は土足禁止ですので、<strong>必ず上履きをご持参ください</strong>。
		</p>
		<a href="/visitor" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>持ち物等の詳細はこちら</span>
			</div>
		</a>
	</div>
	<!--e:来場者の皆様へ-->
	<!---->
	<!--s:お知らせ-->
	<div class="container m-auto mt-10 rounded-xl bg-(--title-bg-color)">
		<p use:reveal class="tf26-page-title">
			{#each 'お知らせ'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto">
		{#each data.latest as item}
			<li class="mb-4">
				<a href="/news/{item.id}">
					<div>
						<p class="font-bold">{item.title}</p>
						<p class="text-sm text-gray-600">{new Date(item.date).toLocaleDateString()}</p>
						<p>{item.heading}</p>
					</div>
				</a>
			</li>
		{/each}

		<a href="/news" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>お知らせ一覧へ</span>
			</div>
		</a>
	</div>
	<!--e:お知らせ-->
	<!---->
	<!--s:アクセス-->
	<div class="container m-auto mt-10 rounded-xl bg-(--title-bg-color)">
		<p use:reveal class="tf26-page-title">
			{#each 'アクセス'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto mb-4">
		<div class="main-link">
			<div class="link-2">
				<!--テーマ説明-->
				<div class="map-text">
					<p
						class="my-auto text-(--main-text-color)"
						style="font-size: calc(1.5rem * var(--mantine-scale));"
					>
						桐朋中学・高等学校<br />〒186-0004<br /><i class="fa-solid fa-location-dot mr-1 text-xs"
						></i>東京都国立市中3-1-10
					</p>
				</div>
				<hr class="main-hr" />
				<div class="map-text">
					<p
						class="my-auto text-(--main-text-color)"
						style="font-size: calc(1.5rem * var(--mantine-scale));"
					>
						<i class="fa-solid fa-train mr-1 text-xs"></i>JR中央線国立駅より徒歩20分<br /><i
							class="fa-solid fa-train mr-1 text-xs"
						></i>JR南武線谷保駅より徒歩15分
					</p>
				</div>
			</div>
			<div class="link-2">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4746059148924!2d139.44237747639895!3d35.68993672949453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e3f60c18b89b%3A0xec006afe5f872d28!2z5qGQ5pyL5Lit5a2m5qCh44O75qGQ5pyL6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1771772582613!5m2!1sja!2sjp"
					width="100%"
					height="450"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Google Map"
				></iframe>
			</div>
		</div>
		<br />
		<a href="/theme" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>アクセスの詳細はこちら</span>
			</div>
		</a>
	</div>
	<!--e:アクセス-->
	<!---->
	<!--s:ご案内-->
	<div class="container m-auto mt-10 rounded-xl bg-(--title-bg-color)">
		<p use:reveal class="tf26-page-title">
			{#each 'ご案内'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto">
		<p>Q&A</p>
		<p>ご来場の際の注意点</p>
		<p>校内マップ</p>
		<p>その他</p>
	</div>
	<!--e:ご案内-->
	<!---->
	<!--s:おすすめ企画-->
	<div class="container m-auto mt-10 rounded-xl bg-(--title-bg-color)">
		<p use:reveal class="tf26-page-title">
			{#each '企画情報'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto">
		<form class="s-search-form mb-4" action="/organizations/" method="GET">
			<input
				class="s-search-input"
				type="text"
				id="searchTerm"
				name="search"
				placeholder="検索..."
			/>
			<button class="m-search-button" type="submit" title="検索する"
				><i class="fas fa-search"></i></button
			>
		</form>
		<div class="relative m-auto mt-10 mb-4 max-w-125 bg-white">
			<!-- 左下の角 -->
			<span
				class="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-(--main-text-color)"
			></span>
			<!-- 右下の角 -->
			<span
				class="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 border-(--main-text-color)"
			></span>
			<!-- コンテンツ -->
			<div class="flex justify-center gap-4 font-bold text-(--main-text-color)">
				<div class="tp-search-method">
					<a href="/organizations" class="dash-link">
						<i class="fa-solid fa-list"></i>
						<p>絞り込む</p>
					</a>
				</div>
				<div class="tp-search-method">
					<a href="/timetable" class="dash-link">
						<i class="fa-solid fa-list"></i>
						<p>タイムテーブルから<br />探す</p>
					</a>
				</div>
			</div>
		</div>
		<p>[右から左]横に流れる団体/飲食/イベントサムネイル</p>
		<hr />
		<p class="mb-4">[左から右]横に流れる団体/飲食/イベントのブログのサムネイル</p>
		<a href="/organizations" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-magnifying-glass"></i>
				<span>団体/飲食/イベント一覧はこちら</span>
			</div>
		</a>
	</div>
	<!--e:おすすめ企画-->
	<!---->
	<!--s:桐朋祭とは-->
	<div class="container m-auto mt-10 rounded-xl bg-(--title-bg-color)">
		<p use:reveal class="tf26-page-title">
			{#each '桐朋祭とは'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto">
		<p>桐朋祭は、毎年6月に開催される桐朋中学・高等学校の学園祭です。</p>
		<br />
		<a href="/about" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>詳しくはこちら</span>
			</div>
		</a>
	</div>
	<!--e:桐朋祭とは-->
	<!---->
	<!--s:桐朋祭のテーマ-->
	<div class="container m-auto mt-10 rounded-xl bg-(--title-bg-color)">
		<p use:reveal class="tf26-page-title">
			{#each 'テーマについて'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto mb-10">
		<div class="main-link">
			<div class="link-2">
				<!--テーマ説明-->
				<p use:reveal class="split-text my-auto text-(--main-text-color)">
					桐朋祭のテーマについて書く桐朋祭のテーマについて書く桐朋祭のテーマについて書く桐朋祭のテーマについて書く桐朋祭のテーマについて書く桐朋祭のテーマについて書く桐朋祭のテーマについて書く桐朋祭のテーマについて書く
				</p>
			</div>
			<div class="link-2 bg-white">
				<img
					src="https://pic.atserver186.jp/img/tohofes/logo-main.webp"
					alt="第75回桐朋祭ロゴ"
					class="m-auto ml-auto block h-auto w-[50%]"
				/>
			</div>
		</div>
		<br />
		<a href="/theme" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>詳しくはこちら</span>
			</div>
		</a>
	</div>
	<!--e:桐朋祭のテーマ-->
	<!---->
	<hr class="main-hr" />
	<!--s:アニメーションを再視聴-->
	<div class="container m-auto my-10">
		<a href="/" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-circle-play"></i>
				<span>アニメーションをもう一度視聴する</span>
			</div>
		</a>
	</div>
</main>

<style>
	.tp-search-method {
		text-decoration: none;
		width: 48%;
		border-radius: 10px;
		padding: 15px;
		transition: 0.3s;
		text-align: center;
	}

	.tp-search-method:hover {
		transform: scale(1.03);
		opacity: 0.9;
	}

	.main-link {
		width: 100%;
		margin: 0 auto;
		padding: 20px;
		display: flex;
		border: 1px solid transparent;
		transition: border-color 0.3s;
		border-color: var(--main-text-color);
	}

	.link-2 {
		width: calc(100% / 2);
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 15px;
		margin: 5px;
		border: 1px solid transparent;
		transition: border-color 0.3s;
	}

	.link-2:hover {
		border-color: var(--main-text-color);
	}

	.map-text {
		height: calc(100% / 2);
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	@media (max-width: 768px) {
		.main-link {
			flex-direction: column;
		}

		.link-2 {
			width: 100%;
		}
	}
</style>
