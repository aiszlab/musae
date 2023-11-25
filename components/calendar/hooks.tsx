import dayjs, { Dayjs } from "dayjs";
import React, { ReactNode, useCallback, useContext, useMemo } from "react";
import { Context } from "../config";
import { CalendarClassToken, ComponentToken } from "../../utils/class-name";
import { isArray, useControlledState } from "@aiszlab/relax";
import { Timespan } from "../../utils/timespan";
import clsx from "clsx";
import type { CalendarProps } from "./types";

/**
 * @description
 * head cells
 */
export const useHeadCells = () => {
  const classNames = useContext(Context).classNames[ComponentToken.Calendar];

  return useMemo(() => {
    return dayjs.Ls[dayjs.locale()].weekdays?.map((weekday, index) => (
      <th className={classNames[CalendarClassToken.HeadCell]} key={index}>
        {weekday.charAt(0)}
      </th>
    ));
  }, [classNames]);
};

/**
 * @description
 * dates
 */
export const useDateCells = ([timespan, focusedAt]: [Timespan, Dayjs]) => {
  const classNames = useContext(Context).classNames[ComponentToken.Calendar];

  return useMemo(() => {
    const start = focusedAt.startOf("month");
    const from = start.startOf("week");

    const end = focusedAt.endOf("month");
    const to = end.endOf("week");

    const gap = to.diff(from, "d") + 1;

    const dateCells = [...new Array(gap).keys()].reduce<ReactNode[][]>(
      (prev, _, index) => {
        if (prev.at(prev.length - 1)!.length === 7) prev.push([]);

        const currentAt = from.add(index, "d");
        const formatted = currentAt.format("YYYY-MM-DD");

        const isFrom = timespan.isFrom(currentAt);
        const isTo = timespan.isTo(currentAt);
        const isBetween = timespan.isBetween(currentAt);
        const isDisabled = currentAt.isBefore(start, "d") || currentAt.isAfter(end, "d");

        prev.at(prev.length - 1)!.push(
          <td
            title={formatted}
            key={formatted}
            className={clsx(classNames[CalendarClassToken.DateCell], {
              [classNames[CalendarClassToken.DateCellSelected]]: isFrom || isTo,
              ...(timespan.isRange && {
                [classNames[CalendarClassToken.DateCellInRange]]: isBetween,
                [classNames[CalendarClassToken.DateCellRangeFrom]]: isFrom,
                [classNames[CalendarClassToken.DateCellRangeTo]]: isTo,
              }),
            })}
            aria-hidden={isDisabled}
          >
            <div className={classNames[CalendarClassToken.Date]}>{currentAt.date()}</div>
          </td>
        );
        return prev;
      },
      [[]]
    );

    return dateCells.map((cells, index) => {
      return <tr key={index}>{cells}</tr>;
    });
  }, [classNames, focusedAt, timespan]);
};

/**
 * @description
 * time span
 */
export const useTimespan = ([value]: [CalendarProps["value"]]) => {
  return useMemo(() => {
    const [from, to] = isArray(value) ? value : [value, void 0];
    return new Timespan({ from, to });
  }, [value]);
};

/**
 * @description
 * point at
 */
export const useFocusedAt = ([focusedAtInProps]: [CalendarProps["focusedAt"]]) => {
  const [focusedAt, setFocusedAt] = useControlledState(focusedAtInProps!, {
    defaultState: dayjs(),
  });

  /// next year
  const toNextYear = useCallback(() => {
    setFocusedAt((_focusedAt) => _focusedAt.add(1, "year"));
  }, [setFocusedAt]);

  /// prev year
  const toPrevYear = useCallback(() => {
    setFocusedAt((_focusedAt) => _focusedAt.subtract(1, "year"));
  }, [setFocusedAt]);

  /// next month
  const toNextMonth = useCallback(() => {
    setFocusedAt((_focusedAt) => _focusedAt.add(1, "month"));
  }, [setFocusedAt]);

  /// prev month
  const toPrevMonth = useCallback(() => {
    setFocusedAt((_focusedAt) => _focusedAt.subtract(1, "month"));
  }, [setFocusedAt]);

  return {
    focusedAt,
    toNextYear,
    toPrevYear,
    toNextMonth,
    toPrevMonth,
  };
};
