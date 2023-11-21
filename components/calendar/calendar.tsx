import React from "react";
import { useDateCells, useHeadCells, usePointAt, useTimespan } from "./hooks";
import { StyledCalendar } from "./styled";
import type { CalendarProps } from "./types";

const Calendar = ({ mode = "single", ...props }: CalendarProps) => {
  const timespan = useTimespan([props.value]);
  const { focusedAt, toPrevYear, toPrevMonth, toNextYear, toNextMonth } = usePointAt([props.focusedAt]);
  const dateCells = useDateCells([timespan, focusedAt]);
  const headCells = useHeadCells();

  return (
    <StyledCalendar>
      <header>
        <span onClick={toPrevYear}>{"《"}</span>
        <span onClick={toPrevMonth}>{"<"}</span>
        <span>{focusedAt.format("YYYY-MM")}</span>
        <span onClick={toNextMonth}>{">"}</span>
        <span onClick={toNextYear}>{"》"}</span>
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
