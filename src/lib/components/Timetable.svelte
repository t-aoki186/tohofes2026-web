<script lang="ts">
	import type { TimetableEvent, ProcessedEvent } from '$lib/types/timetable';

	let { events = [] }: { events?: TimetableEvent[] } = $props();

	// 時間文字列を分に変換
	function timeToMinutes(timeStr: string): number {
		const [hours, minutes] = timeStr.split(':').map(Number);
		return hours * 60 + minutes;
	}

	// 時間範囲を解析
	function parseTimeRange(timeRange: string): { start: number; end: number } {
		const [startStr, endStr] = timeRange.split(' ~ ');
		return {
			start: timeToMinutes(startStr),
			end: timeToMinutes(endStr)
		};
	}

	// イベントを処理
	function processEvents(): ProcessedEvent[] {
		if (!events || !Array.isArray(events)) {
			return [];
		}

		const processed: ProcessedEvent[] = [];

		events.forEach((event) => {
			if (!event || !event.schedule || !Array.isArray(event.schedule)) {
				return;
			}

			event.schedule.forEach((schedule) => {
				if (!schedule || !schedule.time) {
					return;
				}

				const { start, end } = parseTimeRange(schedule.time);
				processed.push({
					...event,
					startMinutes: start,
					endMinutes: end,
					duration: end - start,
					dayNumber: parseInt(schedule.day)
				});
			});
		});

		return processed.sort((a, b) => a.startMinutes - b.startMinutes);
	}

	// 【修正】開催場所の一覧を指定された順番で取得
	function getUniqueLocations(events: ProcessedEvent[]): string[] {
		// 指定された順番
		const locationOrder = ['2階 テラス', '1階 第2体育室', '3･4階 関心ラウンジ'];

		// 存在する場所のみを順番通りにフィルタリング
		const existingLocations = new Set<string>();
		events.forEach((event) => {
			if (event.location) {
				existingLocations.add(event.location);
			}
		});

		return locationOrder.filter((location) => existingLocations.has(location));
	}

	// 日付ごとにイベントをグループ化
	function groupByDay(events: ProcessedEvent[]): Map<number, ProcessedEvent[]> {
		const grouped = new Map<number, ProcessedEvent[]>();
		events.forEach((event) => {
			if (!grouped.has(event.dayNumber)) {
				grouped.set(event.dayNumber, []);
			}
			grouped.get(event.dayNumber)!.push(event);
		});
		return grouped;
	}

	// 指定された場所と日のイベントを取得
	function getEventsForLocationAndDay(
		events: ProcessedEvent[],
		location: string,
		day: number
	): ProcessedEvent[] {
		return events.filter((event) => event.location === location && event.dayNumber === day);
	}

	//test

	// 【修正】タイムラインを固定（10:00〜17:00）
	const FIXED_TIME_RANGE = {
		min: 9.5 * 60, // 9:30 = 600分
		max: 17.5 * 60 // 17:30 = 1020分
	};

	// タイムラインの最小/最大時間を計算
	//function getTimeRange(events: ProcessedEvent[]): { min: number; max: number } {
	//	if (events.length === 0) return { min: 540, max: 1020 }; // デフォルト: 9:00 ~ 17:00
	//	let min = 1440,
	//		max = 0;
	//	events.forEach((event) => {
	//		min = Math.min(min, event.startMinutes);
	//		max = Math.max(max, event.endMinutes);
	//	});
	//	// 余白を追加（前後30分）
	//	return { min: Math.max(0, min - 30), max: Math.min(1440, max + 30) };
	//}

	// 分を時間表示に変換
	function formatTime(minutes: number): string {
		const hours = Math.floor(minutes / 60);
		const mins = minutes % 60;
		return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
	}

	// 時間位置をパーセントで計算（固定レンジに対して）
	function getTimePosition(minutes: number): number {
		return ((minutes - FIXED_TIME_RANGE.min) / (FIXED_TIME_RANGE.max - FIXED_TIME_RANGE.min)) * 100;
	}

	// イベントカードのスタイルを計算（Y軸の位置と高さ）
	function getEventStyle(event: ProcessedEvent): string {
		const topPercent = getTimePosition(event.startMinutes);
		const heightPercent = (event.duration / (FIXED_TIME_RANGE.max - FIXED_TIME_RANGE.min)) * 100;
		return `top: ${topPercent}%; height: ${heightPercent}%; min-height: 40px;`;
	}

	// 時間グリッド線を生成（1時間ごと、10:00〜17:00）
	function getTimeGridLines(): number[] {
		const lines: number[] = [];
		for (let hour = 10; hour <= 17; hour++) {
			lines.push(hour * 60);
		}
		return lines;
	}

	let processedEvents = $derived(processEvents());
	let groupedByDay = $derived(groupByDay(processedEvents));
	let uniqueLocations = $derived(getUniqueLocations(processedEvents));

	// 表示する日（データから抽出）
	let availableDays = $derived(Array.from(groupedByDay.keys()).sort());

	// 固定の時間グリッド線
	let timeGridLines = $derived(getTimeGridLines());

    //日付の変換
    const dayLabelMap: Record<number, string> = {
        1: '6/6 (Sat)',
        2: '6/7 (Sun)',
        3: '6/8 (Mon)'
    }

    function getDayLabel(day: number) :string {
        return dayLabelMap[day] || 'Day ${day}';
    }
</script>

<div class="timetable-container">
	{#each availableDays as day}
		{@const dayEvents = groupedByDay.get(day) || []}
		<h2 class="day-title">{getDayLabel(day)}</h2>
		<div class="timetable-day">
			{#if dayEvents.length === 0}
				<p class="no-events">この日のイベントはありません</p>
			{:else}
				<div class="matrix-timetable">
					<!-- ヘッダー行（場所名） -->
					<div class="matrix-header">
						<div class="time-column-header">時間</div>
						{#each uniqueLocations as location}
							<div class="location-header">
								<!-- 条件に応じて追加バッジを表示 -->
								{#if location === '2階 テラス'}
									<span class="location-badge stage">ステージ企画</span>
								{:else if location === '1階 第2体育室'}
									<span class="location-badge band">バンド</span>
								{:else if location === '3･4階 関心ラウンジ'}
									<span class="location-badge lounge">生徒による授業</span>
								{/if}
								<p class="text-xs"><i class="fa-solid fa-location-dot"></i>{location}</p>
							</div>
						{/each}
					</div>

					<!-- タイムテーブル本体 -->
					<div class="matrix-body">
						<!-- 時間軸（Y軸） -->
						<div class="time-axis">
							{#each timeGridLines as timeMinutes}
								<div class="time-label" style="top: {getTimePosition(timeMinutes)}%">
									{formatTime(timeMinutes)}
								</div>
							{/each}
						</div>

						<!-- 場所ごとの列 -->
						<div class="locations-container">
							{#each uniqueLocations as location}
								<div class="location-column">
									<!-- グリッド線（背景） -->
									<div class="grid-lines">
										{#each timeGridLines as timeMinutes}
											<div class="grid-line" style="top: {getTimePosition(timeMinutes)}%"></div>
										{/each}
									</div>

									<!-- イベントカード -->
									{#each getEventsForLocationAndDay(dayEvents, location, day) as event (event.id + location + event.startMinutes)}
										<div
											class="event-card {event.location === '2階 テラス'
												? 'card-stage'
												: event.location === '1階 第2体育室'
													? 'card-band'
													: 'card-lounge'}"
											style={getEventStyle(event)}
										>
											<div class="event-time">
												{formatTime(event.startMinutes)} → {formatTime(event.endMinutes)}
												<span class="event-duration">（{event.duration}分）</span>
											</div>
											<h3 class="event-title">{event.title}</h3>
										</div>
									{/each}
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.timetable-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 20px;
		overflow-x: auto;
	}

	.timetable-day {
		margin-bottom: 48px;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}

	.day-title {
		color: rgb(0, 0, 0);
		margin: 0;
		padding: 16px 24px;
		font-size: 1.5rem;
	}

	.no-events {
		padding: 40px;
		text-align: center;
		color: #999;
	}

	.matrix-timetable {
		display: flex;
		flex-direction: column;
	}

	/* ヘッダー行 */
	.matrix-header {
		display: flex;
		background: #f8f9fa;
		border-bottom: 2px solid #e0e0e0;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.time-column-header {
		width: 80px;
		flex-shrink: 0;
		padding: 12px 8px;
		font-weight: 600;
		text-align: center;
		background: #f8f9fa;
		border-right: 1px solid #e0e0e0;
	}

	.location-header {
		flex: 1;
		padding: 12px 8px;
		font-weight: 600;
		text-align: center;
		background: #f8f9fa;
		border-right: 1px solid #e0e0e0;
		font-size: 0.9rem;
		word-break: break-word;
	}

	.location-header:last-child {
		border-right: none;
	}

	.location-badge {
		display: inline-block;
		font-size: 1rem;
		padding: 2px 6px;
		border-radius: 4px;
		margin-bottom: 8px;
		font-weight: 500;
	}

	.location-badge.stage {
		background: #fce6f0;
		color: #000000;
		border: 1px solid #ff6b6b40;
	}

	.location-badge.band {
		background: #ecf5fb;
		color: #000000;
		border: 1px solid #4ecdc440;
	}
	.location-badge.lounge {
		background: #ebf6f1;
		color: #000000;
		border: 1px solid #4ecdc440;
	}

	/* 本体（Y軸 + 場所列） */
	.matrix-body {
		display: flex;
		position: relative;
		min-height: 1500px;
	}

	/* 時間軸（Y軸） */
	.time-axis {
		width: 80px;
		flex-shrink: 0;
		position: relative;
		background: #fafbfc;
		border-right: 1px solid #e0e0e0;
	}

	.time-label {
		position: absolute;
		transform: translateY(-50%);
		right: 8px;
		font-size: 11px;
		color: #666;
		font-family: monospace;
		white-space: nowrap;
	}

	/* 場所列コンテナ */
	.locations-container {
		flex: 1;
		display: flex;
	}

	.location-column {
		flex: 1;
		position: relative;
		min-width: 200px;
		border-right: 1px solid #e8e8e8;
		background: white;
	}

	.location-column:last-child {
		border-right: none;
	}

	/* グリッド線コンテナ */
	.grid-lines {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
	}

	.grid-line {
		position: absolute;
		left: 0;
		right: 0;
		height: 1px;
		background: #e5e7eb;
		transform: translateY(-50%);
	}

	/* イベントカード */
	.event-card {
		position: absolute;
		left: 6px;
		right: 6px;
		border-radius: 5px;
		padding: 8px 10px;
		transition: all 0.2s ease;
		z-index: 10;
	}

	/* 場所ごとの個別スタイル */
	.event-card.card-stage {
		background-color: #fce6f0;
		border-left: 4px solid #ff6b6b;
	}

	.event-card.card-band {
		background-color: #cdf8f3;
		border-left: 4px solid #00d5be;
	}

	.event-card.card-lounge {
		background-color: #f7fee7;
		border-left: 4px solid #bbf451;
	}

	.event-card.card-stage:hover,
	.event-card.card-band:hover,
	.event-card.card-lounge:hover {
		transform: scale(1.01);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		z-index: 20;
	}

	.event-time {
		font-size: 10px;
		color: var(--main-text-color);
		font-weight: 600;
		font-family: monospace;
	}

	.event-duration {
		font-size: 9px;
		color: #999;
	}

	.event-title {
		font-size: 12px;
		font-weight: 600;
		margin: 4px 0;
		color: #333;
		line-height: 1.3;
	}

	/* レスポンシブ対応 */
	@media (max-width: 768px) {
		.timetable-container {
			padding: 10px;
		}

		.time-column-header,
		.time-axis {
			width: 60px;
		}

		.location-column {
			min-width: 180px;
		}

		.event-title {
			font-size: 11px;
		}

		.event-time {
			font-size: 9px;
		}

		.time-label {
			font-size: 9px;
			right: 4px;
		}

		.location-header {
			font-size: 0.8rem;
			padding: 8px 4px;
		}
	}

	/* スクロールバースタイル */
	.locations-container::-webkit-scrollbar {
		height: 8px;
	}

	.locations-container::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 4px;
	}

	.locations-container::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 4px;
	}

	.locations-container::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>
