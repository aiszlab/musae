import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";
import { useClassNames } from "./hooks";
import { withDot } from "../../utils/class-name";

/**
 * @description
 * styled help wrapper
 */
export const StyledSupportingText = styled.div((props) => {
  const theme = useValidTheme(props.theme);
  const classNames = useClassNames();

  return {
    display: "flex",
    flexDirection: "column",

    span: {
      ...theme.typography.body.small,
      padding: "4px 16px 0 16px",
    },

    [withDot(classNames.itemExplainError)]: {
      color: theme.colorRole.error,
    },
  };
});

/**
 * @description
 * styled label
 */
export const StyledLabel = styled.span((props) => {
  const theme = useValidTheme(props.theme);

  return {
    ...theme.typography.label.small,
  };
});

/**
 * @description
 * styled form
 */
export const StyledForm = styled.form({
  width: "100%",
});
