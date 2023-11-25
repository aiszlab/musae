import styled from "@emotion/styled";
import { useClassNames } from "../config";
import { CalendarClassToken, ComponentToken, withDot, withSelf } from "../../utils/class-name";
import { useValidTheme } from "../theme";

export const StyledCalendar = styled.div((props) => {
  const classNames = useClassNames(ComponentToken.Calendar);
  const theme = useValidTheme(props.theme);
  const sizes: [number, number] = [48, 40];

  return {
    [withDot(classNames[CalendarClassToken.Header])]: {
      display: "flex",
      alignItems: "center",
      columnGap: 8,
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
      height: sizes[0],
      width: sizes[0],
      textAlign: "center",
      padding: 0,

      // typography
      ...theme.typography.body.large,
    },

    [withDot(classNames[CalendarClassToken.DateCell])]: {
      height: sizes[0],
      width: sizes[0],
      padding: 0,
      position: "relative",

      // typography
      ...theme.typography.body.large,

      "&[aria-hidden=true]": {
        visibility: "hidden",
      },

      "::before": {
        content: "''",
        position: "absolute",
        backgroundColor: theme.colorRole.secondaryContainer,
        zIndex: 1,
        height: sizes[1],
      },

      [withSelf(classNames[CalendarClassToken.DateCellSelected])]: {
        [withDot(classNames[CalendarClassToken.Date])]: {
          backgroundColor: theme.colorRole.primary,
          color: theme.colorRole.onPrimary,
        },
      },

      [withDot(classNames[CalendarClassToken.Date])]: {
        margin: "auto",
        width: sizes[1],
        height: sizes[1],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
        zIndex: 2,
        position: "relative",
        cursor: "pointer",
      },

      [withSelf(classNames[CalendarClassToken.DateCellInRange])]: {
        "::before": {
          insetInlineStart: 0,
          insetInlineEnd: 0,
        },
      },

      [withSelf(classNames[CalendarClassToken.DateCellRangeFrom])]: {
        "::before": {
          insetInlineStart: "50%",
          insetInlineEnd: 0,
        },
      },

      [withSelf(classNames[CalendarClassToken.DateCellRangeTo])]: {
        "::before": {
          insetInlineStart: 0,
          insetInlineEnd: "50%",
        },
      },
    },
  };
});
