<script>
	const { data } = $props();
</script>

<svelte:head>
	<title>ライセンス | {data.site_title}</title>
	<link rel="stylesheet" href="https://cdn.atserver186.jp/libs/fontawesome/css/all.min.css" />
</svelte:head>

<main class="mt-15 mr-1 ml-1">
	<p class="tf26-page-title">当サイトで使用しているOSS</p>
	<div class="space-y-6 pr-6 pl-6">
		<div class="rounded-xl border border-white/20 bg-white/10 p-4 shadow backdrop-blur-md">
			<p class="mb-5 border-l-4 border-black pl-2 text-xl font-bold">
				当サイトで使用しているライブラリのライセンスは以下の通りです。
			</p>
			<h2 class="text-lg font-semibold mt-2">Font Awesome Free</h2>
			<p class="mt-1 text-sm">
				提供元:Fonticons, Inc.<br />
				ライセンス:SIL Open Font License 1.1<br />
				公式サイト:<a href="https://fontawesome.com" class="underline" target="_blank"
					>fontawesome.com</a
				><br />
				利用内容:アイコン表示に使用
			</p>
			<h2 class="text-lg font-semibold mt-2">SvelteKit</h2>
			<p class="mt-1 text-sm">
				提供元:Svelte contributors<br />
				ライセンス:MIT License<br />
				公式サイト:<a href="https://kit.svelte.dev" class="underline" target="_blank"
					>kit.svelte.dev</a
				>
				<br />
				利用内容:Webアプリケーションフレームワークとして使用<br />
			</p>
			<h2 class="text-lg font-semibold mt-2">Tailwind CSS</h2>
			<p class="mt-1 text-sm">
				提供元:Tailwind Labs, Inc.<br />
				ライセンス:MIT License<br />
				公式サイト:<a href="https://tailwindcss.com/" class="underline">tailwindcss.com</a><br />
				利用内容:ユーティリティファーストなスタイル適用に使用
			</p>
		</div>
	</div>
</main>
