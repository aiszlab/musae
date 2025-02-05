import React, { forwardRef, useImperativeHandle, type CSSProperties } from "react";
import { useDateCells, useHeadCells, useFocusedAt, useValue } from "./hooks";
import type { CalendarProps, CalendarRef } from "../../types/calendar";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "musae/icons";
import { useClassNames } from "../../hooks/use-class-names.component";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { stringify } from "@aiszlab/relax/class-name";
import { useTheme } from "../theme";
import { IconButton } from "../icon-button";
import { CLASS_NAMES } from "./context";

const styles = stylex.create({
  calendar: {
    width: "fit-content",
  },

  header: {
    display: "flex",
    alignItems: "center",
    columnGap: spacing.xxsmall,
    paddingInline: spacing.medium,
    color: "var(--on-surface-variant)",
  },

  heading: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  body: {
    borderCollapse: "collapse",
  },
});

const Calendar = forwardRef<CalendarRef, CalendarProps>(
  ({ className, style, value, onClick: _onClick }, ref) => {
    const classNames = useClassNames(CLASS_NAMES);
    const { timespan, onClick } = useValue({ onClick: _onClick, value });
    const {
      focusedAt,
      addYear,
      addMonth,
      subtractYear,
      subtractMonth,
      reset: resetFocusedAt,
    } = useFocusedAt({
      focusedAt: timespan.to ?? timespan.from,
    });
    const dateCells = useDateCells({ timespan, focusedAt, click: onClick, classNames });
    const headCells = useHeadCells({ classNames });
    const theme = useTheme();

    const styled = {
      calendar: stylex.props(styles.calendar),
      header: stylex.props(typography.label.large, styles.header),
      heading: stylex.props(styles.heading, typography.body.medium),
      body: stylex.props(styles.body),
    };

    useImperativeHandle(ref, () => {
      return {
        reset: () => {
          resetFocusedAt();
        },
      };
    });

    return (
      <div
        className={stringify(classNames.calendar, styled.calendar.className, className)}
        style={{
          ...styled.calendar.style,
          ...style,
          // @ts-expect-error
          "--on-surface-variant": theme.colors["on-surface-variant"],
        }}
      >
        <header
          className={stringify(classNames.header, styled.header.className)}
          style={styled.header.style}
        >
          <IconButton variant="text" onClick={subtractYear} size="small">
            <KeyboardDoubleArrowLeft />
          </IconButton>

          <IconButton variant="text" onClick={subtractYear} size="small">
            <KeyboardArrowLeft />
          </IconButton>

          <span
            className={stringify(classNames.heading, styled.heading.className)}
            style={styled.heading.style}
          >
            {focusedAt.format("YYYY-MM")}
          </span>

          <IconButton variant="text" onClick={addMonth} size="small">
            <KeyboardArrowRight />
          </IconButton>

          <IconButton variant="text" onClick={addYear} size="small">
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
  },
);

export default Calendar;
