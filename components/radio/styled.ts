import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";
import type { RadioRenderProps } from "./types";

export const StyledWrapper = styled.label<RadioRenderProps>(({ disabled }) => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: disabled ? "not-allowed" : "pointer",

    "&.musae-radio-wrapper:not(:last-of-type)": {
      marginRight: 8,
    },
  };
});

export const StyledInput = styled.input<RadioRenderProps>(({ disabled, ...props }) => {
  const theme = useValidTheme(props.theme);

  return {
    visibility: "hidden",
    margin: "0 8px",
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
  };
});
