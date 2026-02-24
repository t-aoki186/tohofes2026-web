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
		src="https://cdn.atserver186.jp/img/tf26/material/top-img.webp"
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
	<div class="container m-auto mt-10 rounded-xl bg-(--title-bg-color)"></div>
	<div class="container mx-auto">
		<div class="main-link">
			<div class="link-3" style="margin: 0 5px 5px 5px; ">
				<p use:reveal class="news-section-title" style="padding: 0 0 10px 0;">
					{#each '・お知らせ'.split('') as char, i}
						<span class="char text-(--main-text-color)" style={`--d: ${i * 0.05}s`}>{char}</span>
					{/each}
				</p>
				<hr class="main-hr" />
				{#each data.latest as item}
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
										<p class="truncate-title ml-2 text-xl font-bold">{item.title}</p>
										<p class="truncate-heading mb-2">{item.heading}</p>
									</div>
									<div class="news-list-icon my-auto ml-auto">
										<i class="fa-solid fa-angles-right left-auto mr-2"></i>
									</div>
								</div>
							</a>
						</li>
					</ul>
				{/each}
			</div>
			<div class="link-4 flex items-center justify-center">
				<i
					class="fa-solid fa-bullhorn news-megaphone m-10 block -scale-x-100 rotate-30 transform text-[12rem]"
				></i>
			</div>
		</div>
		<br />
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
					<p class="my-auto text-xl text-(--main-text-color)">
						桐朋中学・高等学校<br />〒186-0004<br /><i class="fa-solid fa-location-dot mr-1 text-xs"
						></i>東京都国立市中3-1-10
					</p>
				</div>
				<hr class="main-hr" />
				<div class="map-text">
					<p class="my-auto text-xl text-(--main-text-color)">
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
		<a href="/access" class="link-main">
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
		<div class="main-link">
			<div class="link-2 bg-white" style="padding: 0 !important;">
				<img
					src="https://pic.atserver186.jp/tohofes2025.JPG"
					alt="桐朋祭画像"
					class="m-auto ml-auto block h-auto w-full"
				/>
			</div>
			<div class="link-2">
				<!--テーマ説明-->
				<p use:reveal class="split-text my-auto text-(--main-text-color)">
					桐朋祭は、毎年6月に開催される桐朋中学・高等学校の学園祭です。
				</p>
			</div>
		</div>
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

	#scroll-down {
		display: block;
		position: relative;
		padding-top: 79px;
		text-align: center;
	}

	#scroll-title {
		display: block;
		text-transform: uppercase;
		color: var(--main-text-color);
		font-family: 'raleway';
		font-size: 16px;
		font-weight: bold;
		letter-spacing: 0.4em;
		text-align: center;
		transform: rotate(90deg);
		margin-bottom: 45px;
	}
	#scroll-down::before {
		-webkit-animation: elasticus 2.9s cubic-bezier(1, 0, 0, 1) infinite;
		/* Safari 4+ */
		-moz-animation: elasticus 2.9s cubic-bezier(1, 0, 0, 1) infinite;
		/* Fx 5+ */
		-o-animation: elasticus 2.9s cubic-bezier(1, 0, 0, 1) infinite;
		/* Opera 12+ */
		animation: elasticus 2.9s cubic-bezier(1, 0, 0, 1) infinite;
		/* IE 10+, Fx 29+ */
		position: absolute;
		top: 0px;
		left: 50%;
		margin-left: -1px;
		width: 2px;
		height: 90px;
		background: var(--main-text-color);
		content: ' ';
	}
	@-webkit-keyframes elasticus {
		0% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
		50% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		50.1% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		100% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
	}
	@-moz-keyframes elasticus {
		0% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
		50% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		50.1% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		100% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
	}
	@-o-keyframes elasticus {
		0% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
		50% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		50.1% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		100% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
	}
	@keyframes elasticus {
		0% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
		50% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		50.1% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		100% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
	}
	.truncate-parent {
		min-width: 0;
		max-width: 100%;
	}
	.truncate-title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: block;
		max-width: 100%;
	}
	.truncate-heading {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: block;
		max-width: 100%;
	}
</style>
