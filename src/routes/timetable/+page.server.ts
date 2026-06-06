import type { PageServerLoad } from './$types';
import type { TimetableEvent } from '$lib/types/timetable';

const CACHE_TTL = 30_000;
let cachedEvents: TimetableEvent[] = [];
let cachedAt = 0;

export const load: PageServerLoad = async ({ fetch }) => {
    const now = Date.now();
    if (now - cachedAt < CACHE_TTL && cachedEvents.length > 0) {
        return { events: cachedEvents };
    }

    try {
        const response = await fetch('https://api.atserver186.jp/tf26/api/json/organization.json', {
            cache: 'force-cache'
        });
        const events: TimetableEvent[] = await response.json();

        cachedEvents = Array.isArray(events) ? events : [];
        cachedAt = now;

        return { events: cachedEvents };
    } catch (error) {
        console.error('Failed to fetch timetable:', error);
        return { events: cachedEvents.length > 0 ? cachedEvents : [] };
    }
};