import styled from "@emotion/styled";
import { useValidTheme } from "../theme";
import { ComponentToken, FormClassToken, withDot } from "../../utils/class-name";
import { useContext } from "react";
import { Context } from "../config";

/**
 * @description
 * styled help wrapper
 */
export const StyledSupportingText = styled.div((props) => {
  const theme = useValidTheme(props.theme);
  const classNames = useContext(Context).classNames[ComponentToken.Form];

  return {
    display: "flex",
    flexDirection: "column",

    span: {
      ...theme.typography.body.small,
      padding: "4px 16px 0 16px",
    },

    [withDot(classNames[FormClassToken.ItemExplainError])]: {
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
