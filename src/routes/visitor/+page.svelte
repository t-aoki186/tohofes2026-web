<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = '来場者の皆様へ';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
	<meta property="og:title" content="{pageTitle} | {data.site_title}" />
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p
			class="tf26-page-title"
			style="color: black; margin-bottom: 0; view-transition-name: tfvisitortitle-hero;"
		>
			{pageTitle}
		</p>
	</div>
	<section class="container mx-auto mt-15 mb-25">
		<div class="min-x-full mt-4">
			<h1 class="mt-4 text-2xl font-bold text-(--main-text-color)">
				<i class="fa-solid fa-circle-info mr-2"></i>お困りの場合
			</h1>
			<p class="mb-2 leading-[1.8rem]">
				迷子を発見した場合、落とし物をした場合、その他お困りの際は、お気軽にお近くの桐朋祭スタッフまでお声がけください。
				<br />
				また、万が一不審者や不審物を見かけたら絶対に近づかず、速やかにお近くの桐朋祭スタッフにお知らせください。
			</p>
			<h1 class="mt-4 text-2xl font-bold text-(--main-text-color)">
				<i class="fa-solid fa-money-check-dollar mr-2"></i>お支払いについて
			</h1>
			<p class="leading-[1.8rem]">
				今年度から、生徒による飲食団体に限り<span class="font-bold text-red-600"
					>「完全キャッシュレス決済」</span
				>を導入しています。
			</p>
			<p class="leading-[1.8rem] font-bold">
				飲食団体とジュース売り場では、<span class="text-red-600"
					><span class="underline">交通系ICカードのみ</span>ご利用いただけます。</span
				>
				<br />
				現金やクレジットカード、PayPayなどの他決済サービスはご利用いただけ ませんのでご注意ください。
			</p>
			<p class="mb-2 leading-[1.8rem]">
				1階の食堂およびパン売り場をご利用の場合は、現金をお持ちの上、食堂内に設置の券売機で「食堂用食券」をお買い求めください。
				<br />
				<span class="font-bold"
					>食堂およびパン売り場では、交通系ICカードはご利用いただけませんので
					あらかじめご了承ください。</span
				>
				<br />
				なお、食堂用食券の払い戻しは対応いたしかねます。
			</p>
			<h1 class="mt-4 text-2xl font-bold text-(--main-text-color)">
				<i class="fa-solid fa-circle-exclamation mr-2"></i>災害が発生した場合
			</h1>
			<p class="leading-[1.8rem]">
				<span class="font-bold">地震が発生した場合 …</span>
				<br />
				<span class="font-bold text-red-600">まずはその場で身の安全を確保してください。</span
				>本校舎は耐震構造になっており、安全です。指示があるまでは校舎内に留まるようお願いします。
			</p>
			<p class="mb-2 leading-[1.8rem]">
				<span class="font-bold">火災が発生した場合 …</span>
				<br />
				<span class="font-bold text-red-600">火元には絶対に近づかず</span
				>、速やかに近くにいる大人へ通報してください。
				<br />
				災害の発生後、教職員による避難誘導が開始された場合は、落ち着いてその誘導に従ってください。避難場所は東グラウンドです。
			</p>
			<h1 class="mt-4 text-2xl font-bold text-(--main-text-color)">
				<i class="fa-solid fa-utensils mr-2"></i>校内でのお食事について
			</h1>
			<p class="mb-2 leading-[1.8rem]">
				水分補給は校内どこでも可能ですが、お食事は指定された場所（食堂、屋台スペースのテント、特別教室5・6）以外ではご遠慮ください。
				<br />
				また、校内で出たゴミは、指定の場所に分別をして処分していただきますようお願いいたします。
				<br />
				校内マップを追加する
			</p>
			<h1 class="mt-4 text-2xl font-bold text-(--main-text-color)">
				<i class="tf26-icon-material icon-baby-bottle mr-2"></i>小さなお子様をお連れの方へ
			</h1>
			<p class="mb-2 leading-[1.8rem]">
				小さなお子様をお連れの方は、保健室の個室で授乳が可能です。ご利用をご希望の際は、お気軽に近くの桐朋祭スタッフまでお声がけください。
				<br />
				また、1階の総合案内所付近と食堂付近に、おむつ交換台つきの多目的トイレがございます。。
				<br />
				校内マップを追加する
			</p>
			<h1 class="mt-4 text-2xl font-bold text-(--main-text-color)">
				<i class="tf26-icon-material icon-poor-health mr-2"></i>体調がすぐれない場合
			</h1>
			<p class="mb-2 leading-[1.8rem]">
				体調がすぐれない場合、ご気分の悪い場合は、決して無理をなさらず、お近くの桐朋祭スタッフまでお声がけください。
				<br />
				保健室へお連れいたします。
			</p>
			<h1 class="mt-4 text-2xl font-bold text-(--main-text-color)">
				<i class="fa-solid fa-handshake mr-2"></i>その他
			</h1>
			<ul class="ml-4 leading-[1.8rem]">
				<li class="list-disc">
					校内での飲酒・喫煙は固くお断りします。<br
					/>飲酒・喫煙が発覚した場合、ご退場いただく場合がございます。
				</li>
				<li class="list-disc">
					校内の土足での通行はご遠慮ください。
					<br />
					上履きをお忘れになった方には、受付でスリッパをお貸しします。
				</li>
				<li class="list-disc">
					本校はエレベーターの数が少なくなっております。
					<br />
					エレベーターを必要とする方におゆずりいただき、可能な限り階段をご利用くださいますようお願いいたします。
				</li>
			</ul>
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>
