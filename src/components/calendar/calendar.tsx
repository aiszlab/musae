import styles from "./styles";
import React, { forwardRef, useImperativeHandle } from "react";
import { useDateCells, useHeadCells, useFocusedAt, useValue } from "./hooks";
import type { CalendarProps, CalendarRef } from "../../types/calendar";
import {
  IconKeyboardDoubleArrowLeft,
  IconKeyboardDoubleArrowRight,
  IconKeyboardArrowLeft,
  IconKeyboardArrowRight,
} from "../icon/icons";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useTheme } from "../theme";
import { IconButton } from "../icon-button";
import { CLASS_NAMES } from "./context";
import { $body, $label } from "../theme/theme";

const Calendar = forwardRef<CalendarRef, CalendarProps>(
  ({ className, style, value, disabledDate, onClick: _onClick }, ref) => {
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
    const dateCells = useDateCells({ timespan, focusedAt, onClick, disabledDate, classNames });
    const headCells = useHeadCells({ classNames });
    const theme = useTheme();

    const styled = {
      calendar: $props(styles.calendar.default),
      header: $props($label.large, styles.calendar.header),
      heading: $props(styles.calendar.heading, $body.medium),
      body: $props(styles.calendar.body),
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
          "--color-on-surface-variant": theme.colors["on-surface-variant"],
        }}
      >
        <header
          className={stringify(classNames.header, styled.header.className)}
          style={styled.header.style}
        >
          <IconButton variant="text" onClick={subtractYear} size="small">
            <IconKeyboardDoubleArrowLeft />
          </IconButton>

          <IconButton variant="text" onClick={subtractMonth} size="small">
            <IconKeyboardArrowLeft />
          </IconButton>

          <span
            className={stringify(classNames.heading, styled.heading.className)}
            style={styled.heading.style}
          >
            {focusedAt.format("YYYY-MM")}
          </span>

          <IconButton variant="text" onClick={addMonth} size="small">
            <IconKeyboardArrowRight />
          </IconButton>

          <IconButton variant="text" onClick={addYear} size="small">
            <IconKeyboardDoubleArrowRight />
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
