import type { Dayjs } from "dayjs";

/**
 * @description
 * get first sunday of the month
 */
export const firstSundayInMonth = (date: Dayjs) => {
  const _from = date.startOf("month");

  if (_from.day() === 0) {
    return _from;
  }

  return _from.startOf("week").add(1, "week");
};
