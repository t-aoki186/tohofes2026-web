<script lang="ts">
	const { data } = $props();
	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
	/*ローディング*/
	import { isVisible } from '$lib/stores/loader.js';
	import Modal from '$lib/components/Modal.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import '@splidejs/svelte-splide/css';
	import { Pagination } from '@mantine/core';

	/*s:モーダル*/
	let showModal = $state(false);
	let modalType = $state('');

	function openModal(type) {
		showModal = true;
		modalType = type;
	}
	/*e:モーダル*/
	/*s:Auto Scroll*/
	const optionsLeft = {
		type: 'loop',
		drag: 'free',
		focus: 'center',
		perPage: 3,
		gap: '2rem',
		padding: '5%',
		pagination: false,
		autoScroll: {
			speed: 2 // 右→左
		},
		breakpoints: {
			768: {
				perPage: 1,
				gap: '1rem'
			}
		}
	};
	const optionsRight = {
		type: 'loop',
		drag: 'free',
		focus: 'center',
		perPage: 3,
		gap: '2rem',
		padding: '5%',
		pagination: false,
		autoScroll: {
			speed: -2 // 左→右
		},
		breakpoints: {
			768: {
				perPage: 1,
				gap: '1rem'
			}
		}
	};
	/*e:Auto Scroll*/

	/*s:ローディングアニメーションをもう一度視聴する*/
	function replayAnimation() {
		isVisible.set(true);
	}
	/*e:ローディングアニメーションをもう一度視聴する*/
</script>

<svelte:head>
	<title>{data.site_title}</title>
</svelte:head>

<Modal bind:showModal>
	<!--s:M.お困りの場合-->
	{#if modalType === 'a'}
		<p class="mb-4 text-center text-xl font-bold text-(--main-text-color)">お困りの場合</p>
		<hr class="main-hr" />
		<p class="leading-[1.8rem]">
			道に迷った場合、落とし物をした場合、その他のお困りの場合は、お近くの桐朋祭スタッフまでお声がけください。総合案内所までご案内いたします。<br
			/>また不審者、不審物を見かけたら絶対に近づかず、お近くの桐朋祭スタッフにお知らせください。
		</p>
		<!--e:M.お困りの場合-->
		<!---->
		<!--s:M.お支払いについて-->
	{:else if modalType === 'b'}
		<p class="mb-4 text-center text-xl font-bold text-(--main-text-color)">お支払いについて</p>
		<hr class="main-hr" />
		<p class="leading-[1.8rem]">支払いの簡単な説明</p>
		<a href="/visitor/#payment" class="mt-2 text-(--main-text-color)"
			><i class="fa-solid fa-link mr-2 text-sm"></i>詳しくはこちらをご覧ください
		</a>
		<!--e:M.お支払いについて-->
		<!---->
		<!--s:M.災害が発生した場合-->
	{:else if modalType === 'c'}
		<p class="mb-4 text-center text-xl font-bold text-(--main-text-color)">災害が発生した場合</p>
		<hr class="main-hr" />
		<p class="mb-2 leading-[1.8rem]">
			地震: まずはその場で身を守ってください。本校舎は耐震構造のため、<strong
				>安全が確保されるまで校舎内に留まってください。</strong
			>
		</p>
		<p class="mb-2 leading-[1.8rem]">
			火災: <strong>火元には絶対に近づかず、速やかに離れてください。</strong>
		</p>
		<p class="leading-[1.8rem]">
			避難誘導: 災害時は教職員が避難を案内しますので、指示に従って行動してください。<strong
				>避難場所は東グラウンド</strong
			>です。
		</p>
		<a href="/visitor/#dsaster" class="mt-2 text-(--main-text-color)"
			><i class="fa-solid fa-link mr-2 text-sm"></i>詳しくはこちらをご覧ください
		</a>
		<!--e:M.災害が発生した場合-->
		<!---->
		<!--s:M.校内でのお食事について-->
	{:else if modalType === 'd'}
		<p class="mb-4 text-center text-xl font-bold text-(--main-text-color)">
			校内でのお食事について
		</p>
		<hr class="main-hr" />
		<p class="leading-[1.8rem]">
			水分補給に関しましては校内どこでも可能ですが、お食事は指定された場所(食堂、飲食スペース用テント、特別教室5・6)以外ではご遠慮ください。<br
			/>
			<a href="/visitor/#campus_map">詳しはこちらの校内マップをご覧ください。</a>
			<br />
			また、校内で出たゴミにつきましては、指定の場所に分別して処分していただきますようお願いいたします。
		</p>
		<!--e:M.校内でのお食事について-->
		<!---->
		<!--s:M.乳幼児をお連れのご来場者様へ-->
	{:else if modalType === 'e'}
		<p class="mb-4 text-center text-xl font-bold text-(--main-text-color)">
			乳幼児をお連れのご来場者様へ
		</p>
		<hr class="main-hr" />
		<p class="leading-[1.8rem]">
			乳幼児をお連れのご来場者様は、保健室の個室で授乳が可能です。授乳室をご利用の際は、お近くの桐朋祭スタッフにお声がけいただくか、総合案内所までお越しください
			<br />
			また、1回の総合案内所付近と食堂横中庭付近におむつ交換台付き多目的トイレがございます。
			<br />
			<a href="/visitor/#payment" class="mt-2 text-(--main-text-color)"
				><i class="fa-solid fa-link mr-2 text-sm"
				></i>詳しい場所につきましてはこちらの校内マップををご覧ください。
			</a>
		</p>
		<!--e:M.乳幼児をお連れのご来場者様へ-->
		<!---->
		<!--s:M.体調不良について-->
	{:else if modalType === 'f'}
		<p class="mb-4 text-center text-xl font-bold text-(--main-text-color)">体調不良について</p>
		<hr class="main-hr" />
		<p class="leading-[1.8rem]">
			気分が悪くなった際は、無理をなさらずお近くの桐朋祭スタッフまでお声がけください。保健室までお連れいたします。
		</p>
		<!--e:M.体調不良について-->
	{/if}
</Modal>

<div class="relative h-screen w-full">
	<img
		src="https://cdn.atserver186.jp/img/tf26/material/top-img.webp"
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
	<!--s:来場者の皆様へ-->
	<div class="tp-info container mx-auto mt-10 rounded-xl p-4" data-aos="fade-up">
		<p class="mb-2 text-center font-bold"><i class="fa-solid fa-circle-info"></i>持ち物について</p>
		<p class="mb-2 text-center">
			校内は土足禁止ですので	、<strong>必ず上履きをご持参ください</strong>。
		</p>
		<a href="/visitor" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>持ち物等の詳細はこちら</span>
			</div>
		</a>
	</div>
	<!--e:来場者の皆様へ-->
	<!---->
	<!--s:お知らせ-->
	<div class="container mx-auto mt-10" data-aos="fade-up">
		<div class="main-link">
			<div class="link-3" style="margin: 0 5px 5px 5px; ">
				<p use:reveal class="news-section-title" style="padding: 0 0 10px 0;">
					{#each '・お知らせ'.split('') as char, i}
						<span class="char text-(--main-text-color)" style={`--d: ${i * 0.12}s`}>{char}</span>
					{/each}
				</p>
				<hr class="main-hr" />
				{#if data.latest && data.latest.length > 0}
					{#each data.latest as item}
						<ul>
							<li class="mx-auto mb-4 w-full list-none">
								<a href="/news/{item.id}">
									<div
										class="news-list flex border-l-2 pl-4"
										style="border-left-color: var(--main-text-color);"
									>
										<div class="news-list-date-box mr-4">
											<span class="news-list-month"
												>{String(new Date(item.date).getMonth() + 1).padStart(2, '0')}</span
											>
											<span class="news-list-slash">/</span>
											<span class="news-list-date"
												>{String(new Date(item.date).getDate()).padStart(2, '0')}</span
											>
										</div>
										<div class="truncate-parent flex-col">
											<p class="truncate-title news-list-title ml-2 font-bold">{item.title}</p>
											<p class="truncate-heading news-list-heading mb-2">{item.heading}</p>
										</div>
										<div class="news-list-icon my-auto ml-auto">
											<i class="fa-solid fa-angles-right left-auto mr-2"></i>
										</div>
									</div>
								</a>
							</li>
						</ul>
					{/each}
				{:else}
					<p>お知らせの取得に失敗しました</p>
				{/if}
			</div>
			<div class="link-4 flex items-center justify-center">
				<i
					class="tf26-icon-material icon-megaphone -scale-x-100 rotate-30 transform text-[12rem] text-(--main-text-color)"
				></i>
			</div>
		</div>
		<br />
		<a href="/news" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>お知らせ一覧へ</span>
			</div>
		</a>
	</div>
	<!--e:お知らせ-->
	<!---->
	<!--s:アクセス-->
	<div class="container m-auto mt-10 rounded-xl bg-(--title-bg-color)" data-aos="fade-up">
		<p use:reveal class="tf26-page-title">
			{#each 'アクセス'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.12}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto mt-10 mb-4" data-aos="fade-up">
		<div class="main-link">
			<div class="link-2">
				<!--テーマ説明-->
				<div class="map-text">
					<p class="my-auto text-xl text-(--main-text-color)">
						桐朋中学・高等学校<br />〒186-0004<br /><i class="fa-solid fa-location-dot mr-1 text-xs"
						></i>東京都国立市中3-1-10
					</p>
				</div>
				<hr class="main-hr" />
				<div class="map-text">
					<p class="my-auto text-xl text-(--main-text-color)">
						<i class="fa-solid fa-train mr-1 text-xs"></i>JR中央線国立駅より徒歩20分<br /><i
							class="fa-solid fa-train mr-1 text-xs"
						></i>JR南武線谷保駅より徒歩15分
					</p>
				</div>
			</div>
			<div class="link-2">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4746059148924!2d139.44237747639895!3d35.68993672949453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e3f60c18b89b%3A0xec006afe5f872d28!2z5qGQ5pyL5Lit5a2m5qCh44O75qGQ5pyL6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1771772582613!5m2!1sja!2sjp"
					width="100%"
					height="450"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Google Map"
					class="rounded-lg"
				></iframe>
			</div>
		</div>
		<br />
		<a href="/access" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>アクセスの詳細はこちら</span>
			</div>
		</a>
	</div>
	<!--e:アクセス-->
	<!---->
	<!--s:ご案内-->
	<div class="container m-auto mt-10 rounded-xl bg-(--title-bg-color)" data-aos="fade-up">
		<p use:reveal class="tf26-page-title">
			{#each 'ご案内'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.12}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto mt-10" data-aos="fade-up">
		<div class="main-link" style="border: none !important;">
			<div class="link-2" style="padding: 0 !important;">
				<ul>
					<li class="mx-auto mb-4 w-full list-none">
						<button onclick={() => openModal('a')} class="w-full cursor-pointer">
							<div
								class="news-list flex border-l-2 p-4"
								style="border-left-color: var(--main-text-color);"
							>
								<div class="truncate-parent flex-col">
									<p class="truncate-title guid-title-text ml-2 font-bold text-(--main-text-color)">
										<i class="fa-solid fa-circle-info mr-2"></i>お困りの場合
									</p>
								</div>
								<div class="news-list-icon my-auto ml-auto">
									<i class="fa-solid fa-angles-right left-auto mr-2"></i>
								</div>
							</div>
						</button>
						<button onclick={() => openModal('b')} class="w-full cursor-pointer">
							<div
								class="news-list flex border-l-2 p-4"
								style="border-left-color: var(--main-text-color);"
							>
								<div class="truncate-parent flex-col">
									<p class="truncate-title guid-title-text ml-2 font-bold text-(--main-text-color)">
										<i class="fa-solid fa-money-check-dollar mr-2"></i>お支払いについて
									</p>
								</div>
								<div class="news-list-icon my-auto ml-auto">
									<i class="fa-solid fa-angles-right left-auto mr-2"></i>
								</div>
							</div>
						</button>
						<button onclick={() => openModal('c')} class="w-full cursor-pointer">
							<div
								class="news-list flex border-l-2 p-4"
								style="border-left-color: var(--main-text-color);"
							>
								<div class="truncate-parent flex-col">
									<p class="truncate-title guid-title-text ml-2 font-bold text-(--main-text-color)">
										<i class="fa-solid fa-circle-exclamation mr-2"></i>災害が発生した場合
									</p>
								</div>
								<div class="news-list-icon my-auto ml-auto">
									<i class="fa-solid fa-angles-right left-auto mr-2"></i>
								</div>
							</div>
						</button>
					</li>
				</ul>
			</div>
			<div class="link-2" style="padding: 0 !important;">
				<ul>
					<li class="mx-auto mb-4 w-full list-none">
						<button onclick={() => openModal('d')} class="w-full cursor-pointer">
							<div
								class="news-list flex border-r-2 p-4"
								style="border-right-color: var(--main-text-color); left: 0 !important; right: auto !important;"
							>
								<div class="truncate-parent flex-col">
									<p class="truncate-title guid-title-text ml-2 font-bold text-(--main-text-color)">
										<i class="fa-solid fa-utensils mr-2"></i>校内でのお食事について
									</p>
								</div>
								<div class="news-list-icon my-auto ml-auto">
									<i class="fa-solid fa-angles-right left-auto mr-2"></i>
								</div>
							</div>
						</button>
						<button onclick={() => openModal('e')} class="w-full cursor-pointer">
							<div
								class="news-list flex border-r-2 p-4"
								style="border-right-color: var(--main-text-color);"
							>
								<div class="truncate-parent flex-col">
									<p class="truncate-title guid-title-text ml-2 font-bold text-(--main-text-color)">
										<i class="tf26-icon-material icon-baby-bottle mr-2"></i>
										乳幼児をお連れのご来場者様へ
									</p>
								</div>
								<div class="news-list-icon my-auto ml-auto">
									<i class="fa-solid fa-angles-right left-auto mr-2"></i>
								</div>
							</div>
						</button>
						<button onclick={() => openModal('f')} class="w-full cursor-pointer">
							<div
								class="news-list flex border-r-2 p-4"
								style="border-right-color: var(--main-text-color);"
							>
								<div class="truncate-parent flex-col">
									<p class="truncate-title guid-title-text ml-2 font-bold text-(--main-text-color)">
										<i class="tf26-icon-material icon-poor-health mr-2"></i>体調不良について
									</p>
								</div>
								<div class="news-list-icon my-auto ml-auto">
									<i class="fa-solid fa-angles-right left-auto mr-2"></i>
								</div>
							</div>
						</button>
					</li>
				</ul>
			</div>
		</div>
		<a href="/visitor" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>詳しくはこちら</span>
			</div>
		</a>
	</div>
	<!--e:ご案内-->
	<!---->
	<!--s:企画情報-->
	<div class="container m-auto mt-10 rounded-xl bg-(--title-bg-color)" data-aos="fade-up">
		<p use:reveal class="tf26-page-title">
			{#each '企画情報'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.12}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto mt-10" data-aos="fade-up">
		<form class="s-search-form mb-4" action="/organizations/" method="GET">
			<input
				class="s-search-input"
				type="text"
				id="searchTerm"
				name="search"
				placeholder="検索..."
			/>
			<button class="m-search-button" type="submit" title="検索する"
				><i class="fas fa-search"></i></button
			>
		</form>
		<div class="relative m-auto mt-10 mb-4 max-w-125 bg-white">
			<!-- 左下の角 -->
			<span
				class="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-(--main-text-color)"
			></span>
			<!-- 右下の角 -->
			<span
				class="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 border-(--main-text-color)"
			></span>
			<!-- コンテンツ -->
			<div class="flex justify-center gap-4 font-bold text-(--main-text-color)">
				<div class="tp-search-method">
					<a href="/organizations" class="dash-link">
						<i class="fa-solid fa-list"></i>
						<p>絞り込む</p>
					</a>
				</div>
				<div class="tp-search-method">
					<a href="/timetable" class="dash-link">
						<i class="fa-solid fa-list"></i>
						<p>タイムテーブルから<br />探す</p>
					</a>
				</div>
			</div>
		</div>

		<div class="mb-2" style="border-left: solid 4px var(--main-text-color);">
			<p use:reveal class="news-section-title ml-2" style="padding: 0;">
				{#each '参加団体一覧'.split('') as char, i}
					<span class="char text-(--main-text-color)" style={`--d: ${i * 0.12}s`}>{char}</span>
				{/each}
			</p>
		</div>
		<section
			class="auto-scroll-organization-section mb-10 rounded-2xl rounded-l-none border border-l-0 border-(--main-text-color) p-4 pl-0"
		>
			<Splide options={optionsLeft} extensions={{ AutoScroll }} style="width: 100%;">
				<SplideSlide>
					<a href="/organizations/1">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-00.webp"
							alt="サンプル00"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/2">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-01.webp"
							alt="サンプル01"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/3">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-02.webp"
							alt="サンプル02"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/4">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-03.webp"
							alt="サンプル03"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/5">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-04.webp"
							alt="サンプル04"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/6">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-05.webp"
							alt="サンプル05"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/7">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-06.webp"
							alt="サンプル06"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/8">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-07.webp"
							alt="サンプル07"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/9">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-08.webp"
							alt="サンプル08"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/10">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-09.webp"
							alt="サンプル09"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
			</Splide>
		</section>
		<div class="mb-2" style="border-right: solid 4px var(--main-text-color);">
			<p
				use:reveal
				class="news-section-title mr-2"
				style="padding: 0; text-align: right !important;"
			>
				{#each '参加団体ブログ'.split('') as char, i}
					<span class="char text-(--main-text-color)" style={`--d: ${i * 0.12}s`}>{char}</span>
				{/each}
			</p>
		</div>
		<section
			class="auto-scroll-organization-section mb-10 ml-auto rounded-2xl rounded-r-none border border-r-0 border-(--main-text-color) p-4 pr-0"
		>
			<Splide options={optionsRight} extensions={{ AutoScroll }} style="width: 100%;">
				<SplideSlide>
					<a href="/organizations/1">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-00.webp"
							alt="サンプル00"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/2">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-01.webp"
							alt="サンプル01"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/3">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-02.webp"
							alt="サンプル02"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/4">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-03.webp"
							alt="サンプル03"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/5">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-04.webp"
							alt="サンプル04"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/6">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-05.webp"
							alt="サンプル05"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/7">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-06.webp"
							alt="サンプル06"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/8">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-07.webp"
							alt="サンプル07"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/9">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-08.webp"
							alt="サンプル08"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/organizations/10">
						<img
							src="https://pic.atserver186.jp/img/tohofes/dev-test/sample-img/sample-09.webp"
							alt="サンプル09"
							class="rounded-xl"
						/>
					</a>
				</SplideSlide>
			</Splide>
		</section>
		<a href="/organizations" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-magnifying-glass"></i>
				<span>団体/飲食/イベント一覧はこちら</span>
			</div>
		</a>
	</div>
	<!--e:企画情報-->
	<!---->
	<!--s:桐朋祭とは-->
	<div class="container m-auto mt-10 rounded-xl bg-(--title-bg-color)" data-aos="fade-up">
		<p use:reveal class="tf26-page-title">
			{#each '桐朋祭とは'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.12}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto mt-10" data-aos="fade-up">
		<div class="main-link">
			<div class="link-2 bg-white" style="padding: 0 !important;">
				<img
					src="https://pic.atserver186.jp/img/tohofes/past_tohofes.webp"
					alt="桐朋祭画像"
					class="h-auto w-full rounded-xl"
				/>
			</div>
			<div class="link-2">
				<!--テーマ説明-->
				<p use:reveal class="split-text my-auto text-(--main-text-color)">
					桐朋祭は、毎年6月上旬に開催される、桐朋中学・高等学校の文化祭です。
					<br />
					例年1万人以上の方にご来場いただく本校最大のイベントであり、約1,700名の桐朋生ひとりひとりが最高の自己表現を――ときにやりすぎなほどに――披露する場でもあります。
				</p>
			</div>
		</div>
		<br />
		<a href="/about" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>詳しくはこちら</span>
			</div>
		</a>
	</div>
	<!--e:桐朋祭とは-->
	<!---->
	<!--s:テーマについて-->
	<div class="container m-auto mt-10 rounded-xl bg-(--title-bg-color)" data-aos="fade-up">
		<p use:reveal class="tf26-page-title">
			{#each 'テーマについて'.split('') as char, i}
				<span class="char" style={`--d: ${i * 0.12}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto mt-10 mb-10" data-aos="fade-up">
		<div class="main-link">
			<div class="link-2">
				<!--テーマ説明-->
				<p use:reveal class="split-text my-auto text-(--main-text-color)">
					第75回桐朋祭実行委員会では、まずテーマで表現したい要素について「桐朋祭が盛り上がる様子」
					「細かいところまで気を配り完成していく様子」「すべてのものや人が活かされる様子」
					を重視することにしました。
				</p>
			</div>
			<div class="link-2 bg-white">
				<img
					src="https://pic.atserver186.jp/img/tohofes/tf26-logo-m-v2.webp"
					alt="第75回桐朋祭ロゴ"
					class="m-auto ml-auto block h-auto w-[50%]"
				/>
			</div>
		</div>
		<br />
		<a href="/theme" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>詳しくはこちら</span>
			</div>
		</a>
	</div>
	<!--e:テーマについて-->
	<!---->
	<hr class="main-hr" />
	<!--s:アニメーションを再視聴-->
	<div class="container m-auto my-10">
		<button onclick={replayAnimation} class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-circle-play"></i>
				<span>アニメーションをもう一度視聴する</span>
			</div>
		</button>
	</div>
</main>

<style>
	@view-transition {
		navigation: auto;
	}

	.auto-scroll-organization-section {
		width: 80%;
	}

	@media (max-width: 768px) {
		.auto-scroll-organization-section {
			width: 100%;
		}
	}

	#scroll-down {
		display: block;
		position: relative;
		padding-top: 79px;
		text-align: center;
	}

	#scroll-title {
		display: block;
		text-transform: uppercase;
		color: var(--main-text-color);
		font-family: 'raleway';
		font-size: 16px;
		font-weight: bold;
		letter-spacing: 0.4em;
		text-align: center;
		transform: rotate(90deg);
		margin-bottom: 45px;
	}
	#scroll-down::before {
		-webkit-animation: elasticus 2.9s cubic-bezier(1, 0, 0, 1) infinite;
		/* Safari 4+ */
		-moz-animation: elasticus 2.9s cubic-bezier(1, 0, 0, 1) infinite;
		/* Fx 5+ */
		-o-animation: elasticus 2.9s cubic-bezier(1, 0, 0, 1) infinite;
		/* Opera 12+ */
		animation: elasticus 2.9s cubic-bezier(1, 0, 0, 1) infinite;
		/* IE 10+, Fx 29+ */
		position: absolute;
		top: 0px;
		left: 50%;
		margin-left: -1px;
		width: 2px;
		height: 90px;
		background: var(--main-text-color);
		content: ' ';
	}
	@-webkit-keyframes elasticus {
		0% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
		50% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		50.1% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		100% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
	}
	@-moz-keyframes elasticus {
		0% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
		50% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		50.1% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		100% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
	}
	@-o-keyframes elasticus {
		0% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
		50% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		50.1% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		100% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
	}
	@keyframes elasticus {
		0% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
		50% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		50.1% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		100% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
	}
	.truncate-parent {
		min-width: 0;
		max-width: 100%;
	}
	.truncate-title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: block;
		max-width: 100%;
	}
	.truncate-heading {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: block;
		max-width: 100%;
	}
</style>
