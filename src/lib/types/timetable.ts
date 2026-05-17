export interface ScheduleItem {
    day: string;
    time: string;
}

export interface TimetableEvent {
    id: string;
    title: string;
    heading: string | null;
    body: string;
    thumbnail: string;
    type: string;
    date: string | null;
    category: string;
    location: string;
    schedule: ScheduleItem[];
}

export interface ProcessedEvent extends TimetableEvent {
    startMinutes: number;
    endMinutes: number;
    duration: number;
    dayNumber: number;
}