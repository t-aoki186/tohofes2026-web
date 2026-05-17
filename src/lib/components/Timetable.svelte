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
        
        events.forEach(event => {
            if (!event || !event.schedule || !Array.isArray(event.schedule)) {
                return;
            }
            
            event.schedule.forEach(schedule => {
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
    
    // 開催場所の一覧を取得（ユニーク）
    function getUniqueLocations(events: ProcessedEvent[]): string[] {
        const locations = new Set<string>();
        events.forEach(event => {
            if (event.location) {
                locations.add(event.location);
            }
        });
        return Array.from(locations).sort();
    }
    
    // 日付ごとにイベントをグループ化
    function groupByDay(events: ProcessedEvent[]): Map<number, ProcessedEvent[]> {
        const grouped = new Map<number, ProcessedEvent[]>();
        events.forEach(event => {
            if (!grouped.has(event.dayNumber)) {
                grouped.set(event.dayNumber, []);
            }
            grouped.get(event.dayNumber)!.push(event);
        });
        return grouped;
    }
    
    // 指定された場所と日のイベントを取得
    function getEventsForLocationAndDay(events: ProcessedEvent[], location: string, day: number): ProcessedEvent[] {
        return events.filter(event => event.location === location && event.dayNumber === day);
    }
    
    // タイムラインの最小/最大時間を計算
    function getTimeRange(events: ProcessedEvent[]): { min: number; max: number } {
        if (events.length === 0) return { min: 540, max: 1020 }; // デフォルト: 9:00 ~ 17:00
        let min = 1440, max = 0;
        events.forEach(event => {
            min = Math.min(min, event.startMinutes);
            max = Math.max(max, event.endMinutes);
        });
        // 余白を追加（前後30分）
        return { min: Math.max(0, min - 30), max: Math.min(1440, max + 30) };
    }
    
    // 分を時間表示に変換
    function formatTime(minutes: number): string {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    }
    
    // 時間位置をパーセントで計算
    function getTimePosition(minutes: number, timeRange: { min: number; max: number }): number {
        return ((minutes - timeRange.min) / (timeRange.max - timeRange.min)) * 100;
    }
    
    // イベントカードのスタイルを計算（Y軸の位置と高さ）
    function getEventStyle(event: ProcessedEvent, timeRange: { min: number; max: number }): string {
        const topPercent = getTimePosition(event.startMinutes, timeRange);
        const heightPercent = (event.duration / (timeRange.max - timeRange.min)) * 100;
        return `top: ${topPercent}%; height: ${heightPercent}%; min-height: 40px;`;
    }
    
    // 時間グリッド線を生成（1時間ごと）
    function getTimeGridLines(timeRange: { min: number; max: number }): number[] {
        const startHour = Math.floor(timeRange.min / 60);
        const endHour = Math.ceil(timeRange.max / 60);
        const lines: number[] = [];
        for (let hour = startHour; hour <= endHour; hour++) {
            lines.push(hour * 60);
        }
        return lines;
    }
    
    let processedEvents = $derived(processEvents());
    let groupedByDay = $derived(groupByDay(processedEvents));
    let uniqueLocations = $derived(getUniqueLocations(processedEvents));
    
    // 表示する日（データから抽出）
    let availableDays = $derived(Array.from(groupedByDay.keys()).sort());
</script>

<div class="timetable-container">
    {#each availableDays as day}
        {@const dayEvents = groupedByDay.get(day) || []}
        {@const timeRange = getTimeRange(dayEvents)}
        {@const timeGridLines = getTimeGridLines(timeRange)}
        
        <div class="timetable-day">
            <h2 class="day-title">Day {day}</h2>
            
            {#if dayEvents.length === 0}
                <p class="no-events">この日のイベントはありません</p>
            {:else}
                <div class="matrix-timetable">
                    <!-- ヘッダー行（場所名） -->
                    <div class="matrix-header">
                        <div class="time-column-header">時間</div>
                        {#each uniqueLocations as location}
                            <div class="location-header">
                                📍 {location}
                            </div>
                        {/each}
                    </div>
                    
                    <!-- タイムテーブル本体 -->
                    <div class="matrix-body">
                        <!-- 時間軸（Y軸） -->
                        <div class="time-axis">
                            {#each timeGridLines as timeMinutes}
                                <div class="time-label" style="top: {getTimePosition(timeMinutes, timeRange)}%">
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
                                            <div class="grid-line" style="top: {getTimePosition(timeMinutes, timeRange)}%"></div>
                                        {/each}
                                    </div>
                                    
                                    <!-- イベントカード -->
                                    {#each getEventsForLocationAndDay(dayEvents, location, day) as event (event.id + location + event.startMinutes)}
                                        <div 
                                            class="event-card"
                                            style={getEventStyle(event, timeRange)}
                                            data-start={formatTime(event.startMinutes)}
                                            data-end={formatTime(event.endMinutes)}
                                        >
                                            <div class="event-time">
                                                {formatTime(event.startMinutes)} → {formatTime(event.endMinutes)}
                                                <span class="event-duration">（{event.duration}分）</span>
                                            </div>
                                            <h3 class="event-title">{event.title}</h3>
                                            {#if event.body && event.body !== 'test'}
                                                <p class="event-body">{event.body}</p>
                                            {/if}
                                            {#if event.category}
                                                <span class="event-category">{event.category}</span>
                                            {/if}
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
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        overflow: hidden;
    }
    
    .day-title {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
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
    
    /* 本体（Y軸 + 場所列） */
    .matrix-body {
        display: flex;
        position: relative;
        min-height: 600px;
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
        background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
        border-left: 4px solid #667eea;
        border-radius: 8px;
        padding: 8px 10px;
        cursor: pointer;
        transition: all 0.2s ease;
        overflow-y: auto;
        z-index: 5;
    }
    
    .event-card:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        background: linear-gradient(135deg, #667eea25 0%, #764ba225 100%);
        z-index: 20;
    }
    
    .event-time {
        font-size: 10px;
        color: #667eea;
        font-weight: 600;
        margin-bottom: 4px;
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
    
    .event-body {
        font-size: 10px;
        color: #888;
        margin: 4px 0 0;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    
    .event-category {
        display: inline-block;
        font-size: 9px;
        background: #667eea20;
        color: #667eea;
        padding: 2px 6px;
        border-radius: 4px;
        margin-top: 4px;
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