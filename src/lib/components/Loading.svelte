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
	class="fixed inset-0 z-9999 flex items-center justify-center backdrop-blur-md" style="background-color: #ffffff;"
	onclick={handleClose}
	role="button"
	tabindex="0"
	onkeydown={(e) => e.key === 'Escape' && handleClose()}
>
	<video
		src="https://pic.atserver186.jp/img/tohofes/loading-v/main.mp4"
		muted autoplay
		class="mx-auto my-auto h-64 w-auto rounded-2xl md:h-110"
		onended={handleClose}
		playsinline
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
