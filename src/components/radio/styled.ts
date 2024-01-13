import styled from "@emotion/styled";
import { useValidTheme } from "../theme";
import type { RadioRenderProps } from "./types";
import { ComponentToken, RadioClassToken } from "../../utils/class-name";
import { useClassNames } from "../config";

export const StyledRadio = styled.label<RadioRenderProps>(({ disabled, ...props }) => {
  const theme = useValidTheme(props.theme);
  const classNames = useClassNames(ComponentToken.Radio);

  return {
    [`:where(&).${classNames[RadioClassToken.Radio]}`]: {
      display: "flex",
      alignItems: "center",
      cursor: disabled ? "not-allowed" : "pointer",

      "> input[type=radio]": {
        visibility: "hidden",
        height: "1rem",
        width: "1rem",
        cursor: disabled ? "not-allowed" : "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "::after": {
          content: "''",
          visibility: "visible",
          display: "block",
          height: "1rem",
          width: "1rem",
          boxSizing: "border-box",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: theme.colorRole.outline,
          borderRadius: 999,
          transition: "all 200ms",
        },

        "&[aria-checked=true]": {
          "::after": {
            ...(!disabled && {
              borderColor: theme.colorRole.primary,
              borderWidth: 4,
            }),
          },

          ...(disabled && {
            "::before": {
              content: "''",
              position: "absolute",
              visibility: "visible",
              height: "0.5rem",
              width: "0.5rem",
              backgroundColor: theme.colorRole.inversePrimary,
              borderRadius: 999,
            },
          }),
        },
      },

      "> span": {
        paddingInline: 6,
        ...theme.typography.label.medium,
      },
    },
  };
});
