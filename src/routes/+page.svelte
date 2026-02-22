<script>
	const { data } = $props();

	import { onMount } from 'svelte';

	import { reveal } from '$lib/reveal';
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
	<div class="container-s tp-info container mt-4">
		<p class="mb-2 text-center font-bold"><i class="fa-solid fa-circle-info"></i>持ち物について</p>
		<p class="mb-2 text-center">
			校内は土足禁止ですので、<strong>必ず上履きをご持参ください</strong>。
		</p>
		<a href="/visitor" class="link-main">
			<i class="fa-solid fa-arrow-right-long"></i>
			<span>持ち物等の詳細はこちら</span>
		</a>
	</div>
	<!--e:来場者の皆様へ-->
	<!---->
	<!--s:おすすめ企画-->
	<div class="container-s container mt-4">
		<p use:reveal class="tf26-page-title">
			{#each '企画情報'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>

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
		<div class="relative m-auto mt-4 mb-4 max-w-125 bg-white">
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
		<p>[右から左]横に流れる団体/淫欲/イベントサムネイル</p>
		<hr />
		<p class="mb-4">[左から右]横に流れる団体/淫欲/イベントのブログのサムネイル</p>
		<a href="/organizations" class="link-main">
			<i class="fa-solid fa-magnifying-glass"></i>
			<span>団体/飲食/イベント一覧はこちら</span>
		</a>
	</div>
	<!--e:おすすめ企画-->
	<!---->
	<!--s:ご案内-->
	<div class="container-s container mt-4">
		<p use:reveal class="tf26-page-title">
			{#each 'ご案内'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<!--e:ご案内-->
	<!---->
	<!--s:お知らせ-->
	<div class="container-s container mt-4">
		<p use:reveal class="tf26-page-title">
			{#each 'お知らせ'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<!--e:お知らせ-->
	<!---->
	<!--s:桐朋祭のテーマ-->
	<div class="container-s container mt-4">
		<p use:reveal class="tf26-page-title">
			{#each 'テーマ'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>

		<div class="main-link">
			<div class="link-2">
				<!--テーマ説明-->
				<p class="my-auto text-(--main-text-color)">
					桐朋祭のテーマについて書く桐朋祭のテーマについて書く桐朋祭のテーマについて書く桐朋祭のテーマについて書く桐朋祭のテーマについて書く桐朋祭のテーマについて書く桐朋祭のテーマについて書く桐朋祭のテーマについて書く
				</p>
			</div>
			<div class="link-2">
				<img
					src="https://pic.atserver186.jp/img/tohofes/logo-main.webp"
					alt="第75回桐朋祭ロゴ"
					class="m-auto ml-auto block h-auto w-[50%]"
				/>
			</div>
		</div>
		<br />
		<a href="/theme" class="link-main">
			<i class="fa-solid fa-arrow-right-long"></i>
			<span>詳細はこちら</span>
		</a>
	</div>
	<!--e:桐朋祭のテーマ-->
	<!---->
	<!--s:桐朋祭とは-->
	<div class="container-s container mt-4 mb-4">
		<p use:reveal class="tf26-page-title">
			{#each '桐朋祭とは'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.05}s`}>{char}</span>
			{/each}
		</p>
		<p>桐朋祭は、毎年6月に開催される桐朋中学・高等学校の学園祭です。</p>
		<br />
		<a href="/theme" class="link-main">
			<i class="fa-solid fa-arrow-right-long"></i>
			<span>詳細はこちら</span>
		</a>
	</div>
	<!--e:桐朋祭とは-->
</main>

<style>
	.char {
		display: inline-block;
		opacity: 0;
		transform: translateY(10px);
	}

	:global(.visible) .char {
		animation: rise 0.4s ease forwards;
		animation-delay: var(--d);
	}

	@keyframes rise {
		0% {
			opacity: 0;
			transform: translateY(10px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

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
	}

	.main-link:hover {
		border-color: var(--main-text-color);
	}

	.link-2 {
		width: calc(100% / 4);
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
</style>
