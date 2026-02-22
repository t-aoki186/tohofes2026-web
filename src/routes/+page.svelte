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
	<div class="container mx-auto mt-4">
		<p class="tf26-page-title"><i class="fa-solid fa-circle-info"></i>来場者の皆様の皆様へ</p>
	</div>
	<div class="container mx-auto rounded-xl p-4 shadow-[0_4px_10px_var(--ats-text-color)]">
		<p>test</p>
	</div>
	<hr />
</main>
