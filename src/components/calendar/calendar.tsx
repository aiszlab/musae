import React, { type CSSProperties } from "react";
import { useDateCells, useHeadCells, useFocusedAt, useValue } from "./hooks";
import type { CalendarProps } from "musae/types/calendar";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "musae/icons";
import { useClassNames } from "../../hooks/use-class-names";
import { CalendarClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { clsx } from "@aiszlab/relax";
import { useTheme } from "../theme";
import { IconButton } from "../icon-button";

const styles = stylex.create({
  calendar: {
    width: "fit-content",
  },

  header: (props: { color: CSSProperties["color"] }) => ({
    display: "flex",
    alignItems: "center",
    columnGap: spacing.xsmall,
    paddingInline: spacing.medium,
    color: props.color,
  }),

  heading: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  body: {
    borderCollapse: "collapse",
  },
});

const Calendar = ({
  className,
  style,
  value,
  onClick: _onClick,
  focusedAt: _focusedAt,
}: CalendarProps) => {
  const { timespan, onClick } = useValue({ onClick: _onClick, value });
  const { focusedAt, toPrevYear, toPrevMonth, toNextYear, toNextMonth } = useFocusedAt({
    focusedAt: _focusedAt,
  });
  const dateCells = useDateCells({ timespan, focusedAt, click: onClick });
  const headCells = useHeadCells();
  const classNames = useClassNames("calendar");
  const theme = useTheme();

  const styled = {
    calendar: stylex.props(styles.calendar),
    header: stylex.props(
      typography.label.large,
      styles.header({
        color: theme.colors["on-surface-variant"],
      }),
    ),
    heading: stylex.props(styles.heading),
    body: stylex.props(styles.body),
  };

  return (
    <div
      className={clsx(styled.calendar.className, className)}
      style={{
        ...styled.calendar.style,
        ...style,
      }}
    >
      <header
        className={clsx(classNames[CalendarClassToken.Header], styled.header.className)}
        style={styled.header.style}
      >
        <IconButton variant="text" onClick={toPrevYear}>
          <KeyboardDoubleArrowLeft />
        </IconButton>

        <IconButton variant="text" onClick={toPrevMonth}>
          <KeyboardArrowLeft />
        </IconButton>

        <span
          className={clsx(classNames[CalendarClassToken.Heading], styled.heading.className)}
          style={styled.heading.style}
        >
          {focusedAt.format("YYYY-MM")}
        </span>

        <IconButton variant="text" onClick={toNextMonth}>
          <KeyboardArrowRight />
        </IconButton>

        <IconButton variant="text" onClick={toNextYear}>
          <KeyboardDoubleArrowRight />
        </IconButton>
      </header>

      <table className={styled.body.className} style={styled.body.style}>
        <thead>
          <tr>{headCells}</tr>
        </thead>
        <tbody>{dateCells}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
