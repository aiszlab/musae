import dayjs, { Dayjs } from "dayjs";
import React, { CSSProperties, ReactNode, useCallback, useMemo } from "react";
import { useClassNames } from "../config";
import { CalendarClassToken, ComponentToken } from "../../utils/class-name";
import { isArray, useControlledState } from "@aiszlab/relax";
import { Timespan } from "../../utils/timespan";
import clsx from "clsx";
import type { CalendarProps } from "./types";
import { stylex } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { BODY } from "../theme/theme";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  cell: {
    height: sizes.xlarge,
    width: sizes.xlarge,
    padding: spacing.none,
  },

  header: {
    textAlign: "center",
  },

  date: (backgroundColor: CSSProperties["backgroundColor"]) => ({
    position: "relative",

    "::before": {
      content: "''",
      position: "absolute",
      backgroundColor,
      zIndex: 1,
      height: sizes.large,
    },
  }),

  hidden: {
    visibility: "hidden",
  },

  inRange: {
    "::before": {
      insetInlineStart: 0,
      insetInlineEnd: 0,
    },
  },

  rangeFrom: {
    "::before": {
      insetInlineStart: "50%",
      insetInlineEnd: 0,
    },
  },

  rangeTo: {
    "::before": {
      insetInlineStart: 0,
      insetInlineEnd: "50%",
    },
  },

  value: {
    margin: "auto",
    width: sizes.large,
    height: sizes.large,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Infinity,
    zIndex: 2,
    position: "relative",
    cursor: "pointer",
  },

  selectedValue: (backgroundColor: CSSProperties["backgroundColor"], color: CSSProperties["color"]) => ({
    backgroundColor,
    color,
  }),
});

/**
 * @description
 * head cells
 */
export const useHeadCells = () => {
  const classNames = useClassNames(ComponentToken.Calendar);

  return useMemo(() => {
    const styled = stylex.props(styles.cell, styles.header, BODY.large);

    return dayjs.Ls[dayjs.locale()].weekdays?.map((weekday, index) => (
      <th key={index} className={clsx(classNames[CalendarClassToken.HeadCell], styled.className)} style={styled.style}>
        {weekday.charAt(0)}
      </th>
    ));
  }, [classNames]);
};

/**
 * @description
 * dates
 */
export const useDateCells = ([timespan, focusedAt, click]: [Timespan, Dayjs, Required<CalendarProps>["onClick"]]) => {
  const classNames = useClassNames(ComponentToken.Calendar);
  const theme = useTheme();

  return useMemo(() => {
    const start = focusedAt.startOf("month");
    const from = start.startOf("week");
    const end = focusedAt.endOf("month");
    const to = end.endOf("week");
    const gap = to.diff(from, "d") + 1;

    const dateCells = Array.from(new Array(gap).keys()).reduce<ReactNode[][]>(
      (prev, _, index) => {
        if (prev.at(prev.length - 1)!.length === 7) prev.push([]);

        const currentAt = from.add(index, "d");
        const formatted = currentAt.format("YYYY-MM-DD");

        const isFrom = timespan.isFrom(currentAt);
        const isTo = timespan.isTo(currentAt);
        const isBetween = timespan.isBetween(currentAt);
        const isDisabled = currentAt.isBefore(start, "d") || currentAt.isAfter(end, "d");
        const isSelected = isFrom || isTo;

        const styled = {
          cell: stylex.props(
            styles.cell,
            styles.date(theme.colors[ColorToken.SecondaryContainer]),
            BODY.large,
            isDisabled && styles.hidden,
            isBetween && [styles.inRange, isFrom && styles.rangeFrom, isTo && styles.rangeTo]
          ),
          date: stylex.props(
            styles.value,
            isSelected && styles.selectedValue(theme.colors[ColorToken.Primary], theme.colors[ColorToken.OnPrimary])
          ),
        };

        prev.at(prev.length - 1)!.push(
          <td
            title={formatted}
            key={formatted}
            className={clsx(
              classNames[CalendarClassToken.DateCell],
              {
                [classNames[CalendarClassToken.DateCellSelected]]: isSelected,
                ...(timespan.isRange && {
                  [classNames[CalendarClassToken.DateCellInRange]]: isBetween,
                  [classNames[CalendarClassToken.DateCellRangeFrom]]: isFrom,
                  [classNames[CalendarClassToken.DateCellRangeTo]]: isTo,
                }),
              },
              styled.cell.className
            )}
            style={styled.cell.style}
            aria-selected={isSelected}
            aria-hidden={isDisabled}
          >
            <div
              className={clsx(classNames[CalendarClassToken.Date], styled.date.className)}
              style={styled.date.style}
              onClick={() => {
                click(currentAt);
              }}
            >
              {currentAt.date()}
            </div>
          </td>
        );

        return prev;
      },
      [[]]
    );

    return dateCells.map((cells, index) => {
      return <tr key={index}>{cells}</tr>;
    });
  }, [focusedAt, timespan, theme.colors, classNames, click]);
};

/**
 * @description
 * time span
 */
export const useValue = ([value, _click]: [CalendarProps["value"], CalendarProps["onClick"]]) => {
  /// change handler
  const onClick = useCallback(
    (_value: Dayjs) => {
      _click?.(_value);
    },
    [_click]
  );

  /// time span
  const timespan = useMemo(() => {
    const [from, to] = isArray(value) ? value : [value, void 0];
    return new Timespan({ from, to });
  }, [value]);

  return {
    timespan,
    onClick,
  };
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
