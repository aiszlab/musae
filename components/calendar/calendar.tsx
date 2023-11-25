import React from "react";
import { useDateCells, useHeadCells, useFocusedAt, useTimespan } from "./hooks";
import { StyledCalendar } from "./styled";
import type { CalendarProps } from "./types";
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight, KeyboardArrowLeft, KeyboardArrowRight } from "../icon";
import { useClassNames } from "../config";
import { CalendarClassToken, ComponentToken } from "../../utils/class-name";

const Calendar = ({ mode = "single", ...props }: CalendarProps) => {
  const timespan = useTimespan([props.value]);
  const { focusedAt, toPrevYear, toPrevMonth, toNextYear, toNextMonth } = useFocusedAt([props.focusedAt]);
  const dateCells = useDateCells([timespan, focusedAt]);
  const headCells = useHeadCells();
  const classNames = useClassNames(ComponentToken.Calendar);

  return (
    <StyledCalendar>
      <header className={classNames[CalendarClassToken.Header]}>
        <KeyboardDoubleArrowLeft onClick={toPrevYear} />
        <KeyboardArrowLeft onClick={toPrevMonth} />

        <span className={classNames[CalendarClassToken.Heading]}>{focusedAt.format("YYYY-MM")}</span>

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
