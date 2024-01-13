import styled from "@emotion/styled";
import { useValidTheme } from "../theme";
import { CheckboxClassToken, ComponentToken } from "../../utils/class-name";
import { useClassNames } from "../config";

export const StyledCheckbox = styled.label((props) => {
  const theme = useValidTheme(props.theme);
  const classNames = useClassNames(ComponentToken.Checkbox);

  return {
    [`:where(&).${classNames[CheckboxClassToken.Checkbox]}`]: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",

      "> input[type=checkbox]": {
        margin: 0,
        visibility: "hidden",
        width: "1rem",
        height: "1rem",
        cursor: "pointer",

        "::before": {
          content: "''",
          visibility: "visible",
          display: "block",
          boxSizing: "border-box",
          width: "1rem",
          height: "1rem",
          borderRadius: "0.2rem",
          transition: "all 200ms",

          borderWidth: "0.1rem",
          borderStyle: "solid",
          borderColor: theme.colorRole.outline,
        },

        "&[aria-checked=true]": {
          "::before": {
            backgroundColor: theme.colorRole.primary,
            borderColor: theme.colorRole.primary,
          },

          "::after": {
            content: "''",
            visibility: "visible",
            boxSizing: "border-box",
            position: "absolute",
            display: "block",
            width: "0.2rem",
            height: "0.5rem",
            transform: "translate(200%, -150%) rotate(45deg)",

            borderWidth: "0.1rem",
            borderTop: 0,
            borderLeft: 0,
            borderStyle: "solid",
            borderColor: theme.colorRole.onPrimary,
          },
        },
      },

      "> span": {
        paddingInline: 6,
        ...theme.typography.label.medium,
      },
    },
  };
});
