<script lang="ts">
	//import
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';

	import { afterNavigate, beforeNavigate } from '$app/navigation';

	beforeNavigate(() => {
		NProgress.start();
	});

	afterNavigate(() => {
		NProgress.done();
		// ページ遷移時にメニューを閉じる
		open = false;
		otherOpen = false;
	});

	//export
	let { data, children } = $props();
	let accordionOpen = $state(false);

	//共通変数
	let logo = 'https://pic.atserver186.jp/img/tohofes/logo-main.webp';
	let logo_2 = 'https://cdn.atserver186.jp/img/tf26/logo/logo_2.webp';
	let logo_alt = '第75回桐朋祭ロゴ';
	let school_address = '東京都国立市中3-1-10';

	//ハンバーガーメニュー
	let open = $state(false);
	let isOtherClosing = $state(false);
	let otherOpen = $state(false);
	let pendingOpen = false;

	function closeOther(goBackToMenu: boolean = false) {
		if (goBackToMenu) pendingOpen = true;
		otherOpen = false;
	}

	//100pxスクロールでヘッダーの表示を変更
	let scrolled = $state(false);

	/*動的クラス*/
	//ヘッダー
	const headerClass = $derived(
		`fixed top-0 right-0 left-0 z-20 border border-black/10 bg-white backdrop-blur-md transition-all duration-500 overflow-hidden` +
			(scrolled ? ' scroll-nav' : '') +
			(otherOpen
				? ' max-h-[100vh] rounded-b-[1.0rem]'
				: open
					? ' max-h-[400px] rounded-b-[1.0rem]'
					: ' max-h-[56px]')
	);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 100;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.atserver186.jp/libs/fontawesome/css/all.min.css" />
	<link rel="icon" href={favicon} />
</svelte:head>

<header class={headerClass}>
	<div class="flex items-center justify-between px-2 py-2">
		<!-- ロゴ -->
		<a href="/" class="flex shrink-0 whitespace-nowrap transition">
			<img src={logo} alt="" class="h-10 w-auto rounded-xl" />
			<!--<p class="m-auto header-text">TOHO FES 2026</p>-->
		</a>
		<!-- ハンバーガー / その他メニュー閉じる（スマホ用） -->
		<div class="grid md:hidden">
			{#if !otherOpen}
				<button
					class="col-start-1 row-start-1 flex cursor-pointer flex-col gap-1.5"
					transition:fade={{ duration: 300 }}
					onclick={() => (open = !open)}
					title="メニュー"
				>
					<div class="flex h-10 w-9 cursor-pointer flex-col items-center justify-center">
						<input class="peer hidden" type="checkbox" checked={open} />
						<div
							class="header-hamburger h-0.5 w-[50%] origin-left translate-y-[0.45rem] rounded-sm bg-black transition-all duration-300 peer-checked:rotate-[-45deg]"
						></div>
						<div
							class="header-hamburger h-0.5 w-[50%] origin-center rounded-md bg-black transition-all duration-300 peer-checked:hidden"
						></div>
						<div
							class="header-hamburger h-0.5 w-[50%] origin-left -translate-y-[0.45rem] rounded-md bg-black transition-all duration-300 peer-checked:rotate-[45deg]"
						></div>
					</div>
				</button>
			{/if}

			{#if otherOpen}
				<button
					class="col-start-1 row-start-1 flex cursor-pointer flex-col gap-1.5"
					transition:fade={{ duration: 300 }}
					onclick={() => closeOther(open)}
					title="メニュー"
				>
					<div class="flex h-10 w-9 cursor-pointer flex-col items-center justify-center">
						<i class="fa-solid fa-angle-left other-close-ico"></i>
					</div>
				</button>
			{/if}
		</div>

		<!--PC用メニュー-->
		<nav class="hidden md:flex">
			<ul class="flex items-center gap-5 whitespace-nowrap transition">
				<li><a href="/" class="header-text ml-3 text-xs tracking-wider transition">ホーム</a></li>
				<li>
					<a href="/about" class="header-text ml-3 text-xs tracking-wider transition">桐朋祭とは</a>
				</li>
				<li>
					<a href="/visitor" class="header-text ml-3 text-xs tracking-wider transition"
						>来場者の皆様へ</a
					>
				</li>
				<li>
					<a href="/organizations" class="header-text ml-3 text-xs tracking-wider transition"
						>団体/飲食/イベント</a
					>
				</li>
				<li>
					<a href="/timetable" class="header-text ml-3 text-xs tracking-wider transition"
						>タイムテーブル</a
					>
				</li>
				<li class="mr-6">
					<button
						class="header-text ml-3 cursor-pointer text-xs tracking-wider transition"
						onclick={() => (otherOpen = !otherOpen)}>その他</button
					>
				</li>
			</ul>
		</nav>
	</div>

	<!--スマホ用メニュー-->
	{#if !otherOpen && !isOtherClosing}
		<nav class="px-6 pt-6 pb-6 md:hidden">
			<ul class="flex flex-col gap-4 text-sm tracking-wide">
				<li><a href="/" class="header-text">ホーム</a></li>
				<li><a href="/about" class="header-text">桐朋祭とは</a></li>
				<li><a href="/visitor" class="header-text">来場者の皆様へ</a></li>
				<li><a href="/organizations" class="header-text">団体/飲食/イベント</a></li>
				<li><a href="/timetable" class="header-text">タイムテーブル</a></li>
				<li>
					<button class="header-text" onclick={() => (otherOpen = !otherOpen)}>その他</button>
				</li>
			</ul>
		</nav>
	{/if}

	{#if otherOpen}
		<nav
			class="overflow-auto p-6"
			transition:fade={{ duration: 500 }}
			onoutrostart={() => (isOtherClosing = true)}
			onoutroend={() => {
				isOtherClosing = false;
				if (pendingOpen) {
					open = true;
					pendingOpen = false;
				}
			}}
		>
			<ul class="flex flex-col gap-4 text-sm tracking-wide">
				<li>
					<a href="/site/oss" class="header-text"
						><i class="fa-solid fa-rectangle-list mr-1 text-xs"></i>使用しているOSS一覧</a
					>
				</li>
				<li>
					<a href="/site/saucecode" class="header-text"
						><i class="fa-solid fa-code mr-1 text-xs"></i>ソースコード</a
					>
				</li>
				<li>
					<a href="/site/sitemap" class="header-text"
						><i class="fa-solid fa-sitemap mr-1 text-xs"></i>サイトマップ</a
					>
				</li>
				<li>
					<a href="/qa" class="header-text"
						><i class="fa-solid fa-circle-question mr-1 text-xs"></i>よくある質問</a
					>
				</li>
				<li>
					<a href="/link" class="header-text"
						><i class="fa-solid fa-arrow-up-right-from-square mr-1 text-xs"></i>SNSリンク</a
					>
				</li>
				<li>
					<a href="/site/info" class="header-text"
						><i class="fa-solid fa-circle-info mr-1 text-xs"></i>情報</a
					>
				</li>
				<li>
					<a href="/access" class="header-text"
						><i class="fa-solid fa-map mr-1 text-xs"></i>本校へのアクセス</a
					>
				</li>
				<li>
					<a href="https://www.toho.ed.jp/" target="_blank" class="header-text"
						><i class="fa-solid fa-arrow-up-right-from-square mr-1 text-xs"
						></i>桐朋中学校・高等学校HP</a
					>
				</li>
				<li>
					<a href="https://2026.tcc-archive.club/" target="_blank" class="header-text"
						><i class="fa-solid fa-arrow-up-right-from-square mr-1 text-xs"
						></i>コンピューター部桐朋祭用特設HP</a
					>
				</li>
				<li>
					<a href="/site/contact" class="header-text"
						><i class="fa-solid fa-envelope mr-1 text-xs"></i>お問い合わせ</a
					>
				</li>
				<hr class="main-hr" />
				<button class="header-text" onclick={() => closeOther(open)}>
					<i class="fa-solid fa-angle-left mr-1 text-xs"></i>
					{#if open}メニューに戻る{/if}
					{#if !open}閉じる{/if}
				</button>
			</ul>
		</nav>
	{/if}
</header>

<!-- ページ内容 -->
{@render children()}

<!--フッター-->
<footer class="footer m-0 w-full pt-[10] pr-0 pb-[10] pl-0">
	<div class="hidden md:flex">
		<div class="footer-top-content">
			<!-- フッターの左側コンテンツ -->
			<div class="footer-flex-content">
				<div class="footer-logo">
					<a href="/">
						<img src={logo_2} alt={logo_alt} class="h-auto w-45 rounded-xl" />
					</a>
				</div>
				<br />
				<a href="/access" class="footer-text"
					><i class="fa-solid fa-location-dot mr-1 text-xs"></i>{school_address}</a
				>
			</div>

			<!-- フッターの右側コンテンツ -->
			<div class="footer-flex-content">
				<h4>ご案内</h4>
				<ul>
					<li>
						<a href="/about">
							<span>桐朋祭について</span>
						</a>
					</li>
					<li>
						<a href="/access">
							<span>アクセス</span>
						</a>
					</li>
					<li>
						<a href="/timetable">
							<span>タイムテーブル</span>
						</a>
					</li>
					<li>
						<a href="/qa">
							<span>よくある質問</span>
						</a>
					</li>
					<li>
						<a href="/site/contact">
							<span>お問い合わせ</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="footer-flex-content">
				<h4>参加団体</h4>
				<ul>
					<li>
						<a href="/organizations/club/tcc">
							<span>コンピューター部</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="footer-flex-content">
				<h4>各種SNS / リンク</h4>
				<ul>
					<li>
						<a href="https://x.com" target="_blank">
							<i class="fa-brands fa-x-twitter mr-1 text-xs"></i>
							<span>X(Twitter)</span>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com" target="_blank">
							<i class="fa-brands fa-instagram mr-1 text-xs"></i>
							<span>Instagram</span>
						</a>
					</li>
					<li>
						<a href="https://atserver186.jp" target="_blank">
							<i class="fa-solid fa-arrow-up-right-from-square mr-1 text-xs"></i>
							<span>ATSocial</span>
						</a>
					</li>
					<li>
						<a href="http://toho.ed.jp" target="_blank">
							<i class="fa-solid fa-arrow-up-right-from-square mr-1 text-xs"></i>
							<span>桐朋中学校・高等学校HP</span>
						</a>
					</li>
					<li>
						<a href="https://2026.tcc-archive.club" target="_blank">
							<i class="fa-solid fa-arrow-up-right-from-square mr-1 text-xs"></i>
							<span>コンピューター部桐朋祭用特設HP</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="md:hidden">
		<div class="flex flex-col items-center justify-center gap-4">
			<a href="/">
				<img src={logo_2} alt={logo_alt} class="h-auto w-20 rounded-xl" />
			</a>
			<p class="text-white">{school_address}</p>
		</div>
		<!--アコーディオン-->
		<div class="overflow-hidden rounded-lg border">
			<button
				class="justfy-between flex w-full items-center bg-gray-100 p-4 transition"
				onclick={() => (accordionOpen = !accordionOpen)}
			>
				<span>テスト</span>
			</button>
		</div>
		<!---->
	</div>
	<div class="footer-bottom-content">
		<br />
		<hr class="sub-hr" />
		<br />
		<a href="/site/site-policy" class="footer-link" style="margin-right: 10px;">サイトポリシー</a><span
			class="footer-span">|</span
		>
		<a href="/site/privacy-policy" class="footer-link" style="margin-right: 10px; margin-left: 10px;"
			>プライバシーポリシー</a
		><span class="footer-span">|</span>
		<a href="/site/contact" class="footer-link" style="margin-left: 10px;">お問い合わせ</a>
		<p class="footer-text">
			&copy; 2026 TohoFes. | atserver186.jp All Rights Reserved.
			本サイトの無断転載は、固くこれを禁じます。
		</p>
	</div>
</footer>
