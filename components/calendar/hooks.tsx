import dayjs from "dayjs";
import React, { ReactNode, useContext, useMemo } from "react";
import { Context } from "../config";
import { CalendarClassToken, ComponentToken } from "../../utils/class-name";
import { CalendarProps } from "./types";
import { isArray } from "@aiszlab/relax";
import { Timespan } from "../../utils/timespan";
import clsx from "clsx";

/**
 * @description
 * dates
 */
export const useDateCells = ([timespan]: [Timespan]) => {
  const classNames = useContext(Context).classNames[ComponentToken.Calendar];

  return useMemo(() => {
    const from = dayjs().startOf("d").startOf("month").startOf("week");
    const to = dayjs().startOf("d").endOf("month").endOf("week");

    const gap = to.diff(from, "d") + 1;

    return [...new Array(gap).keys()].reduce<ReactNode[][]>(
      (prev, _, index) => {
        if (prev[prev.length - 1].length === 7) {
          prev.push([]);
        }

        const currentAt = from.add(index, "d");
        const formatted = currentAt.format("YYYY-MM-DD");

        const isSelected = timespan.isFrom(currentAt) || timespan.isTo(currentAt);
        const isRelated = timespan.isBetween(currentAt);

        prev[prev.length - 1].push(
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
  }, [classNames, timespan]);
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
