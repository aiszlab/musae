import dayjs from "dayjs";
import React, { ReactNode, useContext, useMemo } from "react";
import { Context } from "../config";
import { CalendarClassToken, ComponentToken } from "../../utils/class-name";
import { CalendarProps } from "./types";
import { isArray } from "@aiszlab/relax";
import { Timespan } from "../../utils/timespan";

/**
 * @description
 * dates
 */
export const useDateCells = () => {
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
        const formatCurrentAt = currentAt.format("YYYY-MM-DD");
        prev[prev.length - 1].push(
          <td title={formatCurrentAt} key={formatCurrentAt} className={classNames[CalendarClassToken.DateCell]}>
            {currentAt.date()}
          </td>
        );
        return prev;
      },
      [[]]
    );
  }, [classNames]);
};

/**
 * @description
 * selected dates
 */
export const useTimespan = ([value]: [CalendarProps["value"]]) => {
  return useMemo(() => {
    const [from, to] = isArray(value) ? value : [value, value];
    return new Timespan({ from, to });
  }, [value]);
};
