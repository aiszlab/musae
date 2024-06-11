import React, { CSSProperties } from "react";
import { useDateCells, useHeadCells, useFocusedAt, useValue } from "./hooks";
import type { CalendarProps } from "./types";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "../icon/icons";
import { useClassNames } from "../../hooks/use-class-names";
import { CalendarClassToken, ComponentToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import clsx from "clsx";
import { Button } from "../button";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  calendar: {
    width: "fit-content",
  },

  header: (props: { color: CSSProperties["color"] }) => ({
    display: "flex",
    alignItems: "center",
    columnGap: spacing.small,
    paddingInline: spacing.medium,
    color: props.color,
  }),

  heading: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
});

const Calendar = ({ className, style, value, onClick: _onClick, focusedAt: _focusedAt }: CalendarProps) => {
  const { timespan, onClick } = useValue({ onClick: _onClick, value });
  const { focusedAt, toPrevYear, toPrevMonth, toNextYear, toNextMonth } = useFocusedAt({ focusedAt: _focusedAt });
  const dateCells = useDateCells([timespan, focusedAt, onClick]);
  const headCells = useHeadCells();
  const classNames = useClassNames(ComponentToken.Calendar);
  const theme = useTheme();

  const styled = {
    calendar: stylex.props(styles.calendar),
    header: stylex.props(
      typography.label.large,
      styles.header({
        color: theme.colors[ColorToken.OnSurfaceVariant],
      })
    ),
    heading: stylex.props(styles.heading),
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
        <Button variant="text" prefix={<KeyboardDoubleArrowLeft />} onClick={toPrevYear} shape="circular" />
        <Button variant="text" prefix={<KeyboardArrowLeft />} onClick={toPrevMonth} shape="circular" />

        <span
          className={clsx(classNames[CalendarClassToken.Heading], styled.heading.className)}
          style={styled.heading.style}
        >
          {focusedAt.format("YYYY-MM")}
        </span>

        <Button variant="text" prefix={<KeyboardArrowRight />} onClick={toNextMonth} shape="circular" />
        <Button variant="text" prefix={<KeyboardDoubleArrowRight />} onClick={toNextYear} shape="circular" />
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
