<script>
	const { data } = $props();

	import { onMount } from 'svelte';
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
		<p class="mb-2 text-center"><i class="fa-solid fa-circle-info"></i>持ち物について</p>
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
	<div class="container-s container">
		<p class="tf26-page-title">
			{#each '企画情報'.split('') as char, i}
				<span class="char" style="animation-delay: {i * 0.05}s">{char}</span>
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
		<p>[右から左]横に流れる団体/淫欲/イベントサムネイル</p>
		<hr />
		<p>[左から右]横に流れる団体/淫欲/イベントのブログのサムネイル</p>
		<a href="/organizations" class="link-main">
			<i class="fa-solid fa-magnifying-glass"></i>
			<span>団体/飲食/イベント一覧はこちら</span>
		</a>
	</div>
	<!--e:おすすめ企画-->
	<!---->
	<!--s:ご案内-->
	<div class="container mx-auto mt-4">
		<p class="tf26-page-title">
			{#each '企画情報'.split('') as char, i}
				<span class="char" style="animation-delay: {i * 0.05}s">{char}</span>
			{/each}
		</p>
	</div>
	<div class="container-s container"></div>
	<!--e:ご案内-->
	<!---->
	<!--s:お知らせ-->
	<div class="container mx-auto mt-4">
		<p class="tf26-page-title">お知らせ</p>
	</div>
	<div class="container-s container"></div>
	<!--e:お知らせ-->
	<!---->
	<!--s:桐朋祭のテーマ-->
	<div class="container mx-auto mt-4">
		<p class="tf26-page-title">テーマ</p>
	</div>
	<div class="container-s container">
		<img
			src="https://pic.atserver186.jp/img/tohofes/logo-main.webp"
			alt="第75回桐朋祭ロゴ"
			class="ml-auto block h-auto w-[75%]"
		/>
		<a href="/theme" class="link-main">
			<i class="fa-solid fa-arrow-right-long"></i>
			<span>詳細はこちら</span>
		</a>
	</div>
	<!--e:桐朋祭のテーマ-->
	<!---->
	<!--s:桐朋祭とは-->
	<div class="container mx-auto mt-4">
		<p class="tf26-page-title">桐朋祭とは</p>
	</div>
	<div class="container-s container mb-4">
		<p>桐朋祭は、毎年6月に開催される桐朋中学・高等学校の学園祭です。</p>
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
		animation: rise 0.4s ease forwards;
	}

	@keyframes rise {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
