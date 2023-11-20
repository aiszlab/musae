import styled from "@emotion/styled";
import { useContext } from "react";
import { Context } from "../config";
import { CalendarClassToken, ComponentToken, withDot } from "../../utils/class-name";
import { useValidTheme } from "../theme/hooks";

export const StyledCalendar = styled.div((props) => {
  const classNames = useContext(Context).classNames[ComponentToken.Calendar];
  const theme = useValidTheme(props.theme);

  return {
    [withDot(classNames[CalendarClassToken.HeaderCell])]: {
      height: 48,
      width: 48,
      textAlign: "center",
      padding: 0,

      // typography
      ...theme.typography.body.large,
    },

    [withDot(classNames[CalendarClassToken.DateCell])]: {
      height: 48,
      width: 48,
      textAlign: "center",
      padding: 4,

      // typography
      ...theme.typography.body.large,
    },
  };
});
