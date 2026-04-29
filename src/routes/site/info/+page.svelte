<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
	let pageTitle = 'サイト情報';
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
			<div class="mb-4 rounded-2xl bg-gray-50 p-4">
				<h2 class="text-lg font-semibold">サーバ構成</h2>
				<div class="grid grid-cols-2 gap-4">
					<div class="flex flex-col">
						<p class="m-1 text-[0.9rem] font-bold">サーバ1</p>
						<div class="mx-auto mb-4 flex flex-col">
							<i class="fa-solid fa-server mx-auto text-7xl"></i>
							<ul class="mt-4 ml-4 text-sm">
								<li>運用期間:&nbsp;常時</li>
								<li>用途:&nbsp;本サイトの運用</li>
								<li>所在地:&nbsp;</li>
								<li>スペック:&nbsp;<i class="fa-solid fa-up-right-from-square text-xs"></i><a href="https://2026.tcc-archive.club/l/tfjp-sinfo-s1s" target="_blank">こちらをご覧ください。</a></li>
							</ul>
						</div>
					</div>
					<div class="flex flex-col">
						<p class="m-1 text-[0.9rem] font-bold">サーバ2</p>
						<div class="mx-auto mb-4 flex flex-col">
							<i class="fa-solid fa-server mx-auto text-7xl"></i>
							<ul class="mt-4 ml-4 text-sm">
								<li>運用期間:&nbsp;桐朋祭が開催される3日間</li>
								<li>用途:&nbsp;本サイトの運用 / サーバ1の負荷分散用</li>
								<li>所在地:&nbsp;桐朋祭&nbsp;コンピューター部ブース</li>
								<li>スペック:&nbsp;<i class="fa-solid fa-up-right-from-square text-xs"></i><a href="https://2026.tcc-archive.club/l/tfjp-sinfo-s2s" target="_blank">こちらをご覧ください。</a></li>
							</ul>
						</div>
					</div>
				</div>
				<p class="mt-4 text-sm">※桐朋祭が開催される三日間以外はサーバ1のみで運用されます。</p>
			</div>
			<div class="mb-4 rounded-2xl bg-gray-50 p-4">
				<h2 class="text-lg font-semibold">ステータス</h2>
				<div class="grid grid-cols-2 gap-4">
					<div class="bg-blue-200">test</div>
					<div class="bg-green-200"></div>
				</div>
			</div>
			<div class="mb-4 rounded-2xl bg-gray-50 p-4">
				<h2 class="text-lg font-semibold">推奨動作環境</h2>
				<p class="mt-1 text-sm">
					本サイトは、Microsoft Edge/Google Chrome/Safari/Mozilla
					Firefoxの最新版で動作することを確認しています。（拡張機能やFirefoxの派生形ブラウザなどでの動作保証はできかねます。）お使いのブラウザやOSによっては、見方が異なったり、正常に動作しなかったりすることがあります。
					<br /><br />
					また本サイトは、より快適にご利用いただくためにJavaScriptを使用しています。お使いのブラウザの設定においてJavaScriptが有効となってない場合、正しく表示、または操作できないことがあります。
				</p>
			</div>
			<div class="mb-4 rounded-2xl bg-gray-50 p-4">
				<h2 class="text-lg font-semibold">制作</h2>
				<div class="grid grid-cols-2 gap-4">
					<div class="bg-blue-200">test</div>
					<div class="bg-green-200"></div>
				</div>
			</div>
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>
