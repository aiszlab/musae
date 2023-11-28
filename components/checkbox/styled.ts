import styled from "@emotion/styled";
import { useValidTheme } from "../theme";
import { CheckboxClassToken, ComponentToken, withSelf } from "../../utils/class-name";
import { useClassNames } from "../config";

export const StyledCheckbox = styled.input((props) => {
  const theme = useValidTheme(props.theme);
  const classNames = useClassNames(ComponentToken.Checkbox);

  return {
    [withSelf(classNames[CheckboxClassToken.Checkbox])]: {
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
        borderWidth: "0.1rem",
        borderStyle: "solid",
        borderColor: "gray",
        transition: "all 200ms",
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
          borderWidth: "0.1rem",
          borderStyle: "solid",
          borderColor: theme.colorRole.onPrimary,
          borderTop: 0,
          borderLeft: 0,
          transform: "translate(200%, -150%) rotate(45deg)",
        },
      },
    },
  };
});
