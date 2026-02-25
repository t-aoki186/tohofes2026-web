import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch("https://pic.atserver186.jp/json/tf26/timetable.json");
  const timetable = await res.json();

  return { timetable };
};