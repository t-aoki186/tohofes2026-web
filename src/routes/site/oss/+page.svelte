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
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">使用しているOSS一覧</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
		<div class="mt-4 min-w-full">
			<h1 class="tf26-section-title">当サイトで使用しているライブラリのライセンスは以下の通りです。</h1>
		</div>

		<div class="mt-4">
			<h2 class="mt-2 text-lg font-semibold">Font Awesome Free</h2>
			<p class="mt-1 text-sm">
				提供元:Fonticons, Inc.<br />
				ライセンス:SIL Open Font License 1.1<br />
				公式サイト:<a href="https://fontawesome.com" class="underline" target="_blank"
					>fontawesome.com</a
				><br />
				利用内容:アイコン表示に使用
			</p>
			<h2 class="mt-2 text-lg font-semibold">SvelteKit</h2>
			<p class="mt-1 text-sm">
				提供元:Svelte contributors<br />
				ライセンス:MIT License<br />
				公式サイト:<a href="https://kit.svelte.dev" class="underline" target="_blank"
					>kit.svelte.dev</a
				>
				<br />
				利用内容:Webアプリケーションフレームワークとして使用<br />
			</p>
			<h2 class="mt-2 text-lg font-semibold">Tailwind CSS</h2>
			<p class="mt-1 text-sm">
				提供元:Tailwind Labs, Inc.<br />
				ライセンス:MIT License<br />
				公式サイト:<a href="https://tailwindcss.com/" class="underline">tailwindcss.com</a><br />
				利用内容:ユーティリティファーストなスタイル適用に使用
			</p>
		</div>
	</section>
</main>
