import dayjs, { type Dayjs } from "dayjs";
import React, { type CSSProperties, type ReactNode, useCallback, useMemo, useState } from "react";
import { toArray } from "@aiszlab/relax";
import { Timespan } from "../../utils/timespan";
import { stringify } from "@aiszlab/relax/class-name";
import type { CalendarProps } from "../../types/calendar";
import { $create, $props } from "../../utils/styles";
import { positions, sizes, spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { useTheme } from "../theme";
import { IconButton } from "../icon-button";
import type { CLASS_NAMES } from "./context";
import { Partialable } from "@aiszlab/relax/types";

const styles = $create({
  cell: {
    height: sizes.large,
    width: sizes.large,
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
    zIndex: positions.max,
  },
});

/**
 * @description
 * head cells
 */
export const useHeadCells = ({ classNames }: { classNames: typeof CLASS_NAMES }) => {
  const theme = useTheme();

  return useMemo(() => {
    const styled = $props(
      styles.cell,
      styles.header({
        color: theme.colors["on-surface-variant"],
      }),
      typography.body.medium,
    );

    return dayjs.Ls[dayjs.locale()].weekdays?.map((weekday, index) => (
      <th
        key={index}
        className={stringify(classNames.headCell, styled.className)}
        style={styled.style}
      >
        {weekday.charAt(0)}
      </th>
    ));
  }, [classNames, theme]);
};

/**
 * @description
 * dates
 */
export const useDateCells = ({
  timespan,
  focusedAt,
  click,
  classNames,
}: {
  timespan: Timespan;
  focusedAt: Dayjs;
  click: Required<CalendarProps>["onClick"];
  classNames: typeof CLASS_NAMES;
}) => {
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
          cell: $props(
            styles.cell,
            styles.date({
              backgroundColor: theme.colors["secondary-container"],
            }),
            isDisabled && styles.hidden,
            isBetween && styles.range,
            isFrom && timespan.isRange && styles.from,
            isTo && timespan.isRange && styles.to,
            typography.body.large,
          ),
          trigger: $props(styles.trigger),
        };

        prev.at(prev.length - 1)!.push(
          <td
            title={formatted}
            key={formatted}
            className={stringify(
              classNames.dateCell,
              {
                [classNames.dateCellSelected]: isSelected,
                ...(timespan.isRange && {
                  [classNames.dateCellInRange]: isBetween,
                  [classNames.dateCellRangeFrom]: isFrom,
                  [classNames.dateCellRangeTo]: isTo,
                }),
              },
              styled.cell.className,
            )}
            style={styled.cell.style}
            aria-selected={isSelected}
            aria-hidden={isDisabled}
          >
            <IconButton
              variant={isSelected ? "filled" : "text"}
              size="small"
              color={isSelected ? "primary" : "secondary"}
              className={stringify(classNames.date, styled.trigger.className)}
              style={styled.trigger.style}
              onClick={() => {
                click(currentAt);
              }}
            >
              {currentAt.date()}
            </IconButton>
          </td>,
        );

        return prev;
      },
      [[]],
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
export const useValue = ({
  onClick: _click,
  value,
}: {
  value: CalendarProps["value"];
  onClick: CalendarProps["onClick"];
}) => {
  // change handler
  const onClick = useCallback(
    (_value: Dayjs) => {
      _click?.(_value);
    },
    [_click],
  );

  // time span
  const timespan = useMemo(() => {
    const [from, to] = toArray(value);
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
export const useFocusedAt = ({
  focusedAt: _focusedAt = dayjs(),
}: {
  focusedAt: Partialable<Dayjs>;
}) => {
  const [focusedAt, setFocusedAt] = useState(_focusedAt);

  const addYear = useCallback(() => {
    setFocusedAt((prev) => prev.add(1, "year"));
  }, [setFocusedAt]);

  const subtractYear = useCallback(() => {
    setFocusedAt((prev) => prev.subtract(1, "year"));
  }, [setFocusedAt]);

  const addMonth = useCallback(() => {
    setFocusedAt((prev) => prev.add(1, "month"));
  }, [setFocusedAt]);

  const subtractMonth = useCallback(() => {
    setFocusedAt((prev) => prev.subtract(1, "month"));
  }, [setFocusedAt]);

  const reset = useCallback(() => {
    setFocusedAt(_focusedAt ?? dayjs());
  }, [_focusedAt]);

  return {
    focusedAt,
    addMonth,
    subtractMonth,
    addYear,
    subtractYear,
    reset,
  };
};
