import type { PageServerLoad } from './$types';
import type { TimetableEvent } from '$lib/types/timetable';

export const load: PageServerLoad = async ({ fetch }) => {
    try {
        const response = await fetch('https://api.atserver186.jp/tf26/api/json/organization.json');
        const events: TimetableEvent[] = await response.json();
        
        return { events };
    } catch (error) {
        console.error('Failed to fetch timetable:', error);
        return { events: [] };
    }
};