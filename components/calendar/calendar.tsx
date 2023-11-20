import React, { useContext } from "react";
import dayjs from "dayjs";
import { useDateCells, useTimespan } from "./hooks";
import { Context } from "../config";
import { CalendarClassToken, ComponentToken } from "../../utils/class-name";
import { StyledCalendar } from "./styled";
import { CalendarProps } from "./types";

const Calendar = (props: CalendarProps) => {
  const classNames = useContext(Context).classNames[ComponentToken.Calendar];
  const timespan = useTimespan([props.value]);
  const dateCells = useDateCells([timespan]);

  return (
    <StyledCalendar>
      <header></header>
      <table>
        <thead>
          <tr>
            {dayjs.Ls[dayjs.locale()].weekdays?.map((weekday, index) => {
              return (
                <th className={classNames[CalendarClassToken.HeaderCell]} key={index}>
                  {weekday.charAt(0)}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dateCells.map((cells, index) => {
            return <tr key={index}>{cells}</tr>;
          })}
        </tbody>
      </table>
    </StyledCalendar>
  );
};

export default Calendar;
