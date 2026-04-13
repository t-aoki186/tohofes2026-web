<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { isVisible } from '$lib/stores/loader';

	function handleClose() {
		isVisible.set(false);
	}

	/*指定の時間で動画をローディングビデオを閉じる*/
	/*
    onMount(() => {
		setTimeout(() => {
			isVisible.set(false);
		}, 3800);
	});
    */
</script>

<div
	transition:fade={{ duration: 300 }}
	class="fixed inset-0 z-9999 flex items-center justify-center bg-white backdrop-blur-md"
	onclick={handleClose}
	role="button"
	tabindex="0"
	onkeydown={(e) => e.key === 'Escape' && handleClose()}
>
	<video
		src="https://pic.atserver186.jp/img/tohofes/dev-test/loading-v/render_v1.mp4"
		muted autoplay
		class="mx-auto my-auto h-64 w-auto rounded-2xl"
		onended={handleClose}
	></video>
	<!--s:ローディングオーバーレイを閉じるボタン-->
	<button
		class="absolute top-6 right-6 text-3xl font-bold text-white opacity-70 hover:opacity-100"
		onclick={(e) => {
			e.stopPropagation();
			handleClose();
		}}
		title="閉じる"
	>
		<i class="fa-solid fa-xmark"></i>
	</button>
	<!--s:ローディングオーバーレイを閉じるボタン-->
</div>
