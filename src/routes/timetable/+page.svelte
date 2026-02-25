<script lang="ts">
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	//タイムテーブル周り
	const day = '2026-09-26';

	const venues = $derived(Object.keys(data.timetable[day]));

	const times = [
		'09:00',
		'09:30',
		'10:00',
		'10:30',
		'11:00',
		'11:30',
		'12:00',
		'12:30',
		'13:00',
		'13:30',
		'14:00',
		'14:30',
		'15:00',
		'15:30',
		'16:00',
		'16:30',
		'17:00'
	];

	type value = 'ステージ' | '生徒による授業' | '部活' | 'バンド' | 'その他';

	const timetableColors: Record<string, string> = {
		ステージ: 'bg-blue-100',
		生徒による授業: 'bg-green-100',
		部活: 'bg-red-100',
		バンド: 'bg-yellow-100',
		その他: 'bg-purple-100'
	};
</script>

<svelte:head>
	<title>{data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">タイムテーブル</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
		<div class="flex justify-center">日付選択</div>
		<div class="md:hidden">ジャンル選択</div>
		<br />
		<div class="overflow-x-auto">
			<table class="w-full border-collapse">
				<thead>
					<tr>
						<th class="border p-2">時間</th>
						{#each venues as v}
							<th class="border p-2">{v}</th>
						{/each}
					</tr>
				</thead>

				<tbody>
					{#each times as t}
						<tr>
							<td class="border p-2">{t}</td>
							{#each venues as v}
								<td class="border p-1 align-top">
									{#each data.timetable[day][v] as ev}
										{#if ev.start === t}
											<a href={ev.url}>
												<div class={`mb-1 rounded p-1 ${timetableColors[v]}`}>
													<div class="font-bold">{ev.title}</div>
													<div class="text-sm">{ev.start} - {ev.end}</div>
												</div>
											</a>
										{/if}
									{/each}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</main>

<style>
</style>
