import React from "react";
import { useDateCells, useHeadCells, useFocusedAt, useValue } from "./hooks";
import type { CalendarProps } from "./types";
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight, KeyboardArrowLeft, KeyboardArrowRight } from "../icon";
import { useClassNames } from "../config";
import { CalendarClassToken, ComponentToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import clsx from "clsx";
import { Button } from "../button";

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
    header: stylex.props(typography.label.large, styles.header),
    heading: stylex.props(styles.heading),
  };

  return (
    <div>
      <header
        className={clsx(classNames[CalendarClassToken.Header], styled.header.className)}
        style={styled.header.style}
      >
        <Button variant="text" prefix={<KeyboardDoubleArrowLeft />} onClick={toPrevYear} size="small" shape="circle" />
        <Button variant="text" prefix={<KeyboardArrowLeft />} onClick={toPrevMonth} size="small" shape="circle" />

        <span
          className={clsx(classNames[CalendarClassToken.Heading], styled.heading.className)}
          style={styled.heading.style}
        >
          {focusedAt.format("YYYY-MM")}
        </span>

        <Button variant="text" prefix={<KeyboardArrowRight />} onClick={toNextMonth} size="small" shape="circle" />
        <Button variant="text" prefix={<KeyboardDoubleArrowRight />} onClick={toNextYear} size="small" shape="circle" />
      </header>

      <table>
        <thead>
          <tr>{headCells}</tr>
        </thead>
        <tbody>{dateCells}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
