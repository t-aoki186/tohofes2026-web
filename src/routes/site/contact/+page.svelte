<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
	import { Check } from 'drizzle-orm/gel-core';

	let pageTitle = 'お問い合わせ';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-10 mb-25 flex flex-col">
		<div class="mx-auto w-[50%] rounded-2xl bg-gray-50 p-10">
			<form class="flex flex-col">
				<label class="mb-4 text-xl">
					<div class="mb-1 flex items-end justify-between">
						<span>お名前</span>
						<span class="text-lg font-normal text-gray-500">(例: &nbsp;桐朋&nbsp;太郎)</span>
					</div>
					<input type="text" class="w-full" />
				</label>
				<label class="mb-4 text-xl">
					<div class="mb-1 flex items-end justify-between">
						<span>メールアドレス</span>
						<span class="text-lg font-normal text-gray-500">(例: &nbsp;hoge@example.com)</span>
					</div>
					<input type="text" class="w-full" />
				</label>
				<label class="mb-4 text-xl">
					お問い合わせ内容<br />
					<textarea class="w-full min-h-[20vh]"></textarea>
				</label>
				<div>
					<input type="checkbox" /><a href="/site/privacy">当サイトのプライバシーポリシーに同意する</a>
				</div>
				<button type="submit">送信</button>
			</form>
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>
