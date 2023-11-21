import React from "react";
import { useDateCells, useHeadCells, useTimespan } from "./hooks";
import { StyledCalendar } from "./styled";
import { CalendarProps } from "./types";

const Calendar = ({ mode = "single", defaultPointAt, ...props }: CalendarProps) => {
  const timespan = useTimespan([props.value]);
  const dateCells = useDateCells([timespan, defaultPointAt]);
  const headCells = useHeadCells();

  return (
    <StyledCalendar>
      <header></header>
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
