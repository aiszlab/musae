import React, { useContext } from "react";
import { useDateCells, useHeadCells, useFocusedAt, useTimespan } from "./hooks";
import { StyledCalendar } from "./styled";
import type { CalendarProps } from "./types";
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight, KeyboardArrowLeft, KeyboardArrowRight } from "../icon";
import { Context } from "../config";
import { CalendarClassToken, ComponentToken } from "../../utils/class-name";

const Calendar = ({ mode = "single", ...props }: CalendarProps) => {
  const timespan = useTimespan([props.value]);
  const { focusedAt, toPrevYear, toPrevMonth, toNextYear, toNextMonth } = useFocusedAt([props.focusedAt]);
  const dateCells = useDateCells([timespan, focusedAt]);
  const headCells = useHeadCells();
  const classNames = useContext(Context).classNames[ComponentToken.Calendar];

  return (
    <StyledCalendar>
      <header className={classNames[CalendarClassToken.Header]}>
        <div>
          <KeyboardDoubleArrowLeft onClick={toPrevYear} />
          <KeyboardArrowLeft onClick={toPrevMonth} />
        </div>

        <span>{focusedAt.format("YYYY-MM")}</span>

        <div>
          <KeyboardArrowRight onClick={toNextMonth} />
          <KeyboardDoubleArrowRight onClick={toNextYear} />
        </div>
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
