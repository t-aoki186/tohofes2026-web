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
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-15 mb-25">
		<div class="min-x-full mt-4">
			<h1 class="text-(--main-text-color) text-xl font-bold">【お困りの場合】</h1>
			<br />
			<p class="mb-2 leading-[1.8rem]">
				道に迷った場合、落とし物をした場合、その他お困りの場合は、お近くの桐朋祭スタッフまでお声がけください。総合案内所までご案内いたします。
				<br />
				また、不審者、不審物を見かけたら絶対に近づかず、お近くの桐朋祭スタッフにお知らせください。
			</p>
			<h1 class="text-(--main-text-color) text-xl font-bold">【お支払いについて】</h1>
			<br />
			<p class="mb-2 leading-[1.8rem]">
				飲食参加団体とジュース売り場では団体用食券と交通系ICカードがご利用いただけます。また、団体用食券を購入する祭にも交通系ICカードがご利用いただけます。
				<br />
				団体用食券の販売・払い戻し場所は1階の多目的ラウンジとなっております。
				<br />
				団体用食券の払い戻しは6/9(月)の13:00までとなっておりますので、ご注意ください。
				<br />
				食堂では、団体用食券と食堂用食券がご利用いただけます。
				<br />
				食堂用食券は、食堂内にある券売機にてお買い求めください。 食堂用食券は払い戻しできません。
			</p>
			<h1 class="text-(--main-text-color) text-xl font-bold">【災害が発生した場合】</h1>
			<br />
			<p class="mb-2 leading-[1.8rem]">
				<strong>地震が発生した場合...</strong>
				<br />
				まずはその場で身の安全を確保してください。本校舎は耐震構造になっており、安全ですので必ず校舎内に留まるようお願いします。
				<br />
				<strong>火災が発生した場合...</strong>
				速やかに火元から離れて、絶対に火元に近づかないでください。
				<br />
				災害が発生した場合、教職員による避難誘導が開始されますので、誘導に従ってください。避難場所は東グラウンドです。
			</p>
			<h1 class="text-(--main-text-color) text-xl font-bold">【校内でのお食事について】</h1>
			<br />
			<p class="mb-2 leading-[1.8rem]">
				水分補給に関しましては校内どこでも可能ですが、お食事は指定された場所(食堂、飲食スペース用テント、特別教室5・6)意外ではご遠慮ください。
				<br />
				また、校内で出たゴミにつきましては指定の場所に分別をして処分していただきますようご協力をお願いいたします。
			</p>
			<h1 class="text-(--main-text-color) text-xl font-bold">【乳幼児をお連れのお客様へ】</h1>
			<br />
			<p class="mb-2 leading-[1.8rem]">
				乳幼児のお連れのお客様は、保健室の個室で授乳が可能です。授乳室をご利用の際は、お近くの桐朋祭スタッフにお声がけいただくか、総合案内所までお越しください。
				<br />
				また、1階の総合案内所付近と食堂横中庭付近におむつ交換台付き多目的トイレがございます。
			</p>
			<h1 class="text-(--main-text-color) text-xl font-bold">【体調不良について】</h1>
			<br />
			<p class="mb-2 leading-[1.8rem]">
				気分が悪くなった際は、無理をなさらずお近くの桐朋祭スタッフまでお声がけください。保健室までお連れいたします。
			</p>
			<h1 class="text-(--main-text-color) text-xl font-bold">【その他】</h1>
			<br />
			<p class="mb-2 leading-[1.8rem]">
				校内では飲酒・喫煙、また土足での通行をご遠慮いただいております。
				<br />
				ご協力をお願いいたします。
			</p>
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>
