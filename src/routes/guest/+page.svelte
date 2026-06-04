<script lang="ts">
	const { data } = $props();

	import { onMount } from 'svelte';

	let pageTitle = '講演者';

	/*s:カルーセル*/
	import Swiper from 'swiper';
	import { Navigation, Pagination, Autoplay } from 'swiper/modules';

	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	let swiperContainer: HTMLDivElement | null = null;
	let swiperInstance: any = null;

	//カルーセルの内容
	const slides = [
		{
			id: 1,
			title: 'No Image',
			image: 'https://pic.atserver186.jp/img/tohofes/guest/guest_bg.webp'
		}
	];

	onMount(() => {
		if (swiperContainer) {
			swiperInstance = new Swiper(swiperContainer, {
				modules: [Navigation, Pagination, Autoplay],
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				pagination: { el: '.swiper-pagination', clickable: true },
				autoplay: { delay: 3000, disableOnInteraction: false },
				spaceBetween: 20,
				slidesPerView: 1, // 修正: slidersPreview → slidesPerView
				loop: true
			});
		}
	});
	/*e:カルーセル*/

	// 未定義の変数を定義
	const primaryCategory = 'example-category';
	const item = {
		location: 'サンプル場所'
	};

	/*s: 共有機能*/
	function getShareDescription() {
		if (typeof document === 'undefined') {
			return '';
		}
		const descriptionMeta = document.querySelector("meta[name='description']");
		return descriptionMeta ? descriptionMeta.getAttribute('content') || '' : '';
	}

	async function handleShare() {
		if (typeof navigator === 'undefined' || !navigator.share) {
			console.warn('Web Share API is not supported in this browser.');
			return;
		}

		try {
			await navigator.share({
				title: document.title,
				text: getShareDescription(),
				url: window.location.href
			});
			console.log('共有に成功しました');
		} catch (error) {
			console.error('共有に失敗しました', error);
		}
	}
	/*e: 共有機能*/
</script>

<svelte:head>
	<title>{pageTitle} | {data?.site_title || 'サイト'}</title>
	<meta property="og:title" content="{pageTitle} | {data?.site_title || 'サイト'}" />
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-15 mb-25">
		<div class="orgp-top-content">
			<div class="orgp-top-grid-item">
				<div class="w-full">
					<!--s:カルーセル-->
					<div class="carousel-wrapper">
						<div class="swiper ats-swiper" bind:this={swiperContainer}>
							<div class="swiper-wrapper">
								{#each slides as s}
									<div class="swiper-slide">
										<div class="slide-container">
											<div class="slide-card overflow-hidden rounded-lg bg-white shadow-md">
												{#if s.image}
													<!-- 背景のぼかし画像 -->
													<div
														class="slide-blur-bg"
														style="background-image: url({s.image});"
													></div>

													<!-- メイン画像（アスペクト比を維持） -->
													<div class="slide-img-wrapper">
														<img src={s.image} alt={s.title} class="slide-img" loading="lazy" />
													</div>
												{/if}
											</div>
										</div>
									</div>
								{/each}
							</div>
							<div class="swiper-pagination"></div>
							<div class="swiper-button-prev"></div>
							<div class="swiper-button-next"></div>
						</div>
					</div>
					<!--e:カルーセル-->
				</div>
			</div>
			<div class="orgp-top-grid-item">
				<a
					href="/organizations/?category={primaryCategory}"
					class="mb-4 inline-block text-2xl text-(--main-text-color)"
				>
					<i class="fa-solid fa-tag mr-1"></i>{pageTitle}
				</a>
				<p
					class="mb-4 text-2xl text-(--main-text-color)"
					title="場所については紙のパンフレットをご覧ください。"
				>
					<i class="fa-solid fa-location-dot mr-1"></i>1階 ホール
				</p>
				<p
					class="mb-4 text-2xl text-(--main-text-color)"
					title="場所については紙のパンフレットをご覧ください。"
				>
					<i class="fa-regular fa-calendar mr-1"></i>6/6(土) 14:00 ~ 15:00
				</p>
				<p
					class="mb-2 text-4xl text-(--main-text-color)"
					title="場所については紙のパンフレットをご覧ください。"
				>
					<i class="tf26-icon-material icon-no-camera ml-4"></i>
					<i class="tf26-icon-material icon-no-phone ml-4"></i>
					<i class="tf26-icon-material icon-no-food ml-4"></i>
				</p>
				<p>
					講演の<span class="text-bold text-red-600">録画・録音</span>、ホール内の<span
						class="text-bold text-red-600">飲食</span
					>を禁じます。
				</p>
				<hr class="main-hr" />
				<p>
					※生徒および保護者の、<span class="text-bold underline">入場券をお持ちの方</span
					>のみ入場可能です。
					<br />
					※一般のお客様は、教科教室棟1階<strong>視聴覚室</strong
					>および食堂のディスプレイにて中継をご覧いただけます。 視聴覚室への入場は13:30からの<strong
						>先着順</strong
					>となります。
				</p>
				<hr class="main-hr" />
				<button
					type="button"
					id="pageShareButton"
					onclick={handleShare}
					class="mx-auto my-4 flex cursor-pointer flex-col"
				>
					<div class="text-center text-(--main-text-color)">
						<i class="fa-solid fa-arrow-up-from-bracket text-4xl"></i>
						<p class="text-xl">共有</p>
					</div>
				</button>
				<hr class="main-hr" />
			</div>
		</div>
		<div class="prose mt-8 min-w-full text-xl">
			<strong>「イモニイ」</strong>こと井本陽久(いもと はるひさ)氏は、元
			栄光学園中学・高等学校の数学教師で、型破りな授業を行い、絶大な人気を誇っていました。
			NHKの番組の「プロフェッショナル仕事の流儀」にも出演しており、栄光学園を退職した現在では<strong
				>「いもいも」</strong
			>教室を主宰するカリスマ教育者です。
			<br />
			既存の知識詰め込み型教育ではなく、子供たちが自ら考え、心が揺さぶられる (ぷるっとする)体験を通じた「本当の思考力」を育てることを重視した教育活動で知られています。
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>

<style>
	.orgp-top-content {
		display: grid;
		grid-template-columns: 4fr 3fr;
		gap: 2rem;
	}

	@media (max-width: 768px) {
		.orgp-top-content {
			grid-template-columns: 1fr;
		}
	}

	/*swiper*/
	.slide-container {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%;
		background: #1a1a1a;
		overflow: hidden;
		border-radius: 12px;
	}

	/* 背景のぼかし画像 */
	.slide-blur-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: blur(20px) brightness(0.7);
		transform: scale(1.1);
		z-index: 1;
	}

	/* メイン画像のラッパー */
	.slide-img-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}

	/* メイン画像 */
	.slide-img {
		max-width: 100%;
		max-height: 100%;
		width: auto;
		height: auto;
		object-fit: contain;
		border-radius: 8px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
	}

	@view-transition {
		navigation: auto;
	}

	:global(.ats-swiper) {
		--swiper-navigation-color: var(--main-text-color);
		--swiper-pagination-color: var(--main-text-color);
	}

	:global(.ats-swiper .swiper-button-next),
	:global(.ats-swiper .swiper-button-prev) {
		color: var(--sub-text-color);
	}

	/* Swiper navigation & pagination responsive size */
	:global(.ats-swiper .swiper-button-next),
	:global(.ats-swiper .swiper-button-prev) {
		font-size: 2.2rem;
		width: 44px;
		height: 44px;
	}
	:global(.ats-swiper .swiper-pagination-bullet) {
		width: 12px;
		height: 12px;
	}

	@media (max-width: 1024px) {
		:global(.ats-swiper .swiper-button-next),
		:global(.ats-swiper .swiper-button-prev) {
			font-size: 1.5rem;
			width: 32px;
			height: 32px;
		}
		:global(.ats-swiper .swiper-pagination-bullet) {
			width: 9px;
			height: 9px;
		}
	}

	@media (max-width: 600px) {
		:global(.ats-swiper .swiper-button-next),
		:global(.ats-swiper .swiper-button-prev) {
			font-size: 1.1rem;
			width: 24px;
			height: 24px;
		}
		:global(.ats-swiper .swiper-pagination-bullet) {
			width: 7px;
			height: 7px;
		}
	}

	.carousel-wrapper {
		width: 60vw;
		margin: 0 auto;
	}

	.slide-card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	@media (max-width: 1024px) {
		.carousel-wrapper {
			width: 90vw;
		}
	}
</style>
