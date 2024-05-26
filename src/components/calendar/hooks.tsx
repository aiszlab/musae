import dayjs, { type Dayjs } from "dayjs";
import React, { type CSSProperties, type ReactNode, useCallback, useMemo } from "react";
import { useClassNames } from "../../hooks/use-class-names";
import { CalendarClassToken, ComponentToken } from "../../utils/class-name";
import { isArray, useControlledState } from "@aiszlab/relax";
import { Timespan } from "../../utils/timespan";
import clsx from "clsx";
import type { CalendarProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { positions, sizes, spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { Button } from "../button";

const styles = stylex.create({
  cell: {
    height: sizes.xxlarge,
    width: sizes.xxlarge,
    padding: spacing.none,
    textAlign: "center",
  },

  header: (props: { color: CSSProperties["color"] }) => ({
    color: props.color,
  }),

  date: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    position: "relative",

    "::before": {
      content: "''",
      position: "absolute",
      backgroundColor: props.backgroundColor,
      zIndex: positions.min,
      height: sizes.xlarge,
    },
  }),

  hidden: {
    visibility: "hidden",
  },

  range: {
    "::before": {
      insetInlineStart: 0,
      insetInlineEnd: 0,
    },
  },

  from: {
    "::before": {
      insetInlineStart: "50%",
      insetInlineEnd: 0,
    },
  },

  to: {
    "::before": {
      insetInlineStart: 0,
      insetInlineEnd: "50%",
    },
  },

  trigger: {
    margin: spacing.auto,
  },
});

/**
 * @description
 * head cells
 */
export const useHeadCells = () => {
  const classNames = useClassNames(ComponentToken.Calendar);
  const theme = useTheme();

  return useMemo(() => {
    const styled = stylex.props(
      styles.cell,
      styles.header({
        color: theme.colors[ColorToken.OnSurfaceVariant],
      }),
      typography.body.large
    );

    return dayjs.Ls[dayjs.locale()].weekdays?.map((weekday, index) => (
      <th key={index} className={clsx(classNames[CalendarClassToken.HeadCell], styled.className)} style={styled.style}>
        {weekday.charAt(0)}
      </th>
    ));
  }, [classNames, theme]);
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
            styles.date({
              backgroundColor: theme.colors[ColorToken.SecondaryContainer],
            }),
            typography.body.large,
            isDisabled && styles.hidden,
            isBetween && [styles.range, isFrom && styles.from, isTo && styles.to]
          ),
          trigger: stylex.props(styles.trigger),
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
            <Button
              variant={isSelected ? "filled" : "text"}
              color={isSelected ? "primary" : "secondary"}
              className={clsx(classNames[CalendarClassToken.Date], styled.trigger.className)}
              style={styled.trigger.style}
              onClick={() => {
                click(currentAt);
              }}
              shape="circular"
            >
              {currentAt.date()}
            </Button>
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
