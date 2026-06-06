import type { PageServerLoad } from './$types';
import type { TimetableEvent } from '$lib/types/timetable';
import fs from 'fs';
import path from 'path';

const CACHE_TTL = 30_000;
let cachedEvents: TimetableEvent[] = [];
let cachedAt = 0;

export const load: PageServerLoad = async () => {
    const now = Date.now();
    if (now - cachedAt < CACHE_TTL && cachedEvents.length > 0) {
        return { events: cachedEvents };
    }

    try {
        // JSONファイルのパスを構築
        const jsonPath = path.join(process.cwd(), 'src/lib/server/data/organization.json');
        
        // ファイルを同期的に読み込む（または非同期のreadFileを使用）
        const fileContent = fs.readFileSync(jsonPath, 'utf-8');
        const events: TimetableEvent[] = JSON.parse(fileContent);

        cachedEvents = Array.isArray(events) ? events : [];
        cachedAt = now;

        return { events: cachedEvents };
    } catch (error) {
        console.error('Failed to read organization.json:', error);
        return { events: cachedEvents.length > 0 ? cachedEvents : [] };
    }
};