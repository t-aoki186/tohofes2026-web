<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = '使用しているOSS';
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
		<div class="mt-4">
			<div class="rounded-2xl bg-gray-50 p-4">
				<h2 class="text-lg font-semibold">SvelteKit</h2>
				<p class="mt-1 text-sm">
					提供元:Svelte contributors<br />
					ライセンス:MIT License<br />
					公式サイト:<a href="https://kit.svelte.dev" class="underline" target="_blank"
						>kit.svelte.dev</a
					>
					<br />
					利用内容:Webアプリケーションフレームワークとして使用<br />
				</p>
			</div>
			<div class="mt-2 rounded-2xl bg-gray-50 p-4">
				<h2 class="mt-2 text-lg font-semibold">Tailwind CSS</h2>
				<p class="mt-1 text-sm">
					提供元:Tailwind Labs, Inc.<br />
					ライセンス:MIT License<br />
					公式サイト:<a href="https://tailwindcss.com/" class="underline">tailwindcss.com</a><br />
					利用内容:ユーティリティファーストなスタイル適用に使用
				</p>
			</div>
			<div class="mt-2 rounded-2xl bg-gray-50 p-4">
				<h2 class="mt-2 text-lg font-semibold">NProgress</h2>
				<p class="mt-1 text-sm">
					提供元: Rico Sta. Cruz<br />
					ライセンス: MIT License<br />
					公式サイト:<a href="https://ricostacruz.com/nprogress/" class="underline"
						>ricostacruz.com/nprogress/</a
					><br />
					利用内容: ページ遷移時のプログレスバー表示
				</p>
			</div>
			<div class="mt-2 rounded-2xl bg-gray-50 p-4">
				<h2 class="mt-2 text-lg font-semibold">Font Awesome Free</h2>
				<p class="mt-1 text-sm">
					提供元:Fonticons, Inc.<br />
					ライセンス:SIL Open Font License 1.1<br />
					公式サイト:<a href="https://fontawesome.com" class="underline" target="_blank"
						>fontawesome.com</a
					><br />
					利用内容:アイコン表示に使用
				</p>
			</div>
			<div class="mt-2 rounded-2xl bg-gray-50 p-4">
				<h2 class="mt-2 text-lg font-semibold">CSS Stock</h2>
				<p class="mt-1 text-sm">
					提供元:CSS Stock<br />
					ライセンス:独自ライセンス（商用利用可）<br />
					公式サイト:<a href="https://pote-chil.com" class="underline">://pote-chil.com</a><br />
					利用内容:ボタンやカードのCSSコンポーネントに使用
				</p>
			</div>
			<div class="mt-2 rounded-2xl bg-gray-50 p-4">
				<h2 class="mt-2 text-lg font-semibold">ICOON MONO</h2>
				<p class="mt-1 text-sm">
					提供元:TopeconHeroes<br />
					ライセンス:独自ライセンス（商用利用可）<br />
					公式サイト:<a href="https://icooon-mono.com" class="underline">icooon-mono.com</a><br />
					利用内容:サイト内のアイコンの一部に使用
				</p>
			</div>
			<div class="mt-2 rounded-2xl bg-gray-50 p-4">
				<h2 class="mt-2 text-lg font-semibold">iconmonstr</h2>
				<p class="mt-1 text-sm">
					提供元:iconmonstr<br />
					ライセンス:独自ライセンス（商用利用可）<br />
					公式サイト:<a href="https://iconmonstr.com/" class="underline">iconmonstr.com</a><br />
					利用内容:サイト内のアイコンの一部に使用
				</p>
			</div>
			<div class="mt-2 rounded-2xl bg-gray-50 p-4">
				<h2 class="mt-2 text-lg font-semibold">シルエットイラスト</h2>
				<p class="mt-1 text-sm">
					提供元:TopeconHeroes<br />
					ライセンス:独自ライセンス（商用利用可）<br />
					公式サイト:<a href="https://www.silhouette-illust.com" class="underline"
						>silhouette-illust.com</a
					><br />
					利用内容:サイト内のイラストの一部に使用
				</p>
			</div>
			<div class="mt-2 rounded-2xl bg-gray-50 p-4">
				<h2 class="mt-2 text-lg font-semibold">AOS (Animate On Scroll)</h2>
				<p class="mt-1 text-sm">
					提供元:Michał Sajnóg<br />
					ライセンス:MIT License<br />
					公式サイト:<a href="https://michalsnik.github.io/aos/" class="underline" target="_blank"
						>michalsnik.github.io/aos/</a
					>
					<br />
					利用内容:スクロールに応じた要素のアニメーション実装に使用<br />
				</p>
			</div>
			<div class="mt-2 rounded-2xl bg-gray-50 p-4">
				<h2 class="mt-2 text-lg font-semibold">Splide Auto Scroll Extension</h2>
				<p class="mt-1 text-sm">
					提供元:Naotoshi Fujita<br />
					ライセンス:MIT License<br />
					公式サイト:<a
						href="https://splidejs.com/extensions/auto-scroll/"
						class="underline"
						target="_blank">splidejs.com/extensions/auto-scroll/</a
					>
					<br />
					利用内容:スライダーの自動スクロール機能の拡張に使用<br />
				</p>
			</div>
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>
