import dayjs from "dayjs";
import React, { ReactNode, useContext, useMemo } from "react";
import { Context } from "../config";
import { CalendarClassToken, ComponentToken } from "../../utils/class-name";
import { isArray } from "@aiszlab/relax";
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
export const useDateCells = ([timespan, defaultPointAt]: [Timespan, CalendarProps["defaultPointAt"]]) => {
  const classNames = useContext(Context).classNames[ComponentToken.Calendar];

  return useMemo(() => {
    const pointAt = dayjs(defaultPointAt ?? timespan.from);
    const from = pointAt.startOf("month").startOf("week");
    const to = pointAt.endOf("month").endOf("week");
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
  }, [classNames, defaultPointAt, timespan]);
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
