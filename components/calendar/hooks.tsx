import dayjs, { Dayjs } from "dayjs";
import React, { ReactNode, useContext, useMemo } from "react";
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
    const from = focusedAt.startOf("month").startOf("week");
    const to = focusedAt.endOf("month").endOf("week");
    const gap = to.diff(from, "d") + 1;

    const dateCells = [...new Array(gap).keys()].reduce<ReactNode[][]>(
      (prev, _, index) => {
        if (prev.at(prev.length - 1)!.length === 7) {
          prev.push([]);
        }

        const currentAt = from.add(index, "d");
        const formatted = currentAt.format("YYYY-MM-DD");

        const isSelected = timespan.isFrom(currentAt) || timespan.isTo(currentAt);
        const isRelated = timespan.isBetween(currentAt);

        prev.at(prev.length - 1)!.push(
          <td
            title={formatted}
            key={formatted}
            className={clsx(classNames[CalendarClassToken.DateCell], {
              [classNames[CalendarClassToken.DateCellSelected]]: isSelected,
              [classNames[CalendarClassToken.DateCellRelated]]: isRelated,
            })}
          >
            {currentAt.date()}
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
    const [from, to] = isArray(value) ? value : [value, value];
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
  const toNextYear = () => {
    setFocusedAt(dayjs().add(1, "y"));
  };

  /// prev year
  const toPrevYear = () => {
    setFocusedAt(dayjs().subtract(1, "y"));
  };

  /// next month
  const toNextMonth = () => {
    setFocusedAt(dayjs().add(1, "M"));
  };

  /// prev month
  const toPrevMonth = () => {
    setFocusedAt(dayjs().subtract(1, "M"));
  };

  return {
    focusedAt,
    toNextYear,
    toPrevYear,
    toNextMonth,
    toPrevMonth,
  };
};
