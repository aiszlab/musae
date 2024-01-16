import React from "react";
import { useDateCells, useHeadCells, useFocusedAt, useValue } from "./hooks";
import { StyledCalendar } from "./styled";
import type { CalendarProps } from "./types";
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight, KeyboardArrowLeft, KeyboardArrowRight } from "../icon";
import { useClassNames } from "../config";
import { CalendarClassToken, ComponentToken } from "../../utils/class-name";
import { stylex } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { LABEL } from "../theme/theme";
import clsx from "clsx";

const styles = stylex.create({
  header: {
    display: "flex",
    alignItems: "center",
    columnGap: spacing.small,
    paddingInline: spacing.medium,
  },

  heading: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
});

const Calendar = (props: CalendarProps) => {
  const { timespan, onClick } = useValue([props.value, props.onClick]);
  const { focusedAt, toPrevYear, toPrevMonth, toNextYear, toNextMonth } = useFocusedAt([props.focusedAt]);
  const dateCells = useDateCells([timespan, focusedAt, onClick]);
  const headCells = useHeadCells();
  const classNames = useClassNames(ComponentToken.Calendar);

  const styled = {
    header: stylex.props(LABEL.large, styles.header),
    heading: stylex.props(styles.heading),
  };

  return (
    <StyledCalendar>
      <header
        className={clsx(classNames[CalendarClassToken.Header], styled.header.className)}
        style={styled.header.style}
      >
        <KeyboardDoubleArrowLeft onClick={toPrevYear} />
        <KeyboardArrowLeft onClick={toPrevMonth} />

        <span
          className={clsx(classNames[CalendarClassToken.Heading], styled.heading.className)}
          style={styled.heading.style}
        >
          {focusedAt.format("YYYY-MM")}
        </span>

        <KeyboardArrowRight onClick={toNextMonth} />
        <KeyboardDoubleArrowRight onClick={toNextYear} />
      </header>
      <table>
        <thead>
          <tr>{headCells}</tr>
        </thead>
        <tbody>{dateCells}</tbody>
      </table>
    </StyledCalendar>
  );
};

export default Calendar;
