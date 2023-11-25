import styled from "@emotion/styled";
import { useClassNames } from "../config";
import { CalendarClassToken, ComponentToken, withDot } from "../../utils/class-name";
import { useValidTheme } from "../theme";

export const StyledCalendar = styled.div((props) => {
  // const classNames = useContext(Context).classNames[ComponentToken.Calendar];
  const classNames = useClassNames(ComponentToken.Calendar);
  const theme = useValidTheme(props.theme);

  return {
    [withDot(classNames[CalendarClassToken.Header])]: {
      display: "flex",
      alignItems: "center",
      columnGap: 4,
      paddingInline: 12,

      // typography
      ...theme.typography.label.medium,

      [withDot(classNames[CalendarClassToken.Heading])]: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
      },
    },

    [withDot(classNames[CalendarClassToken.HeadCell])]: {
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

      "&[aria-hidden=true]": {
        visibility: "hidden",
      },
    },
  };
});
