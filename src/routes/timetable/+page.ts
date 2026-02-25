/*import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch("https://pic.atserver186.jp/json/tf26/timetable.json");
  const timetable = await res.json();

  return { timetable };
};*/

import type { PageLoad } from "./$types";
import timetable from "$lib/data/timetable.json";

export const load: PageLoad = async () => {
  return {
    timetable: timetable as Record<string, Record<string, { title: string; start: string; end: string; url: string }[]>>
  };
};