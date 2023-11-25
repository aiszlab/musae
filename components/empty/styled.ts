import styled from "@emotion/styled";
import { useValidTheme } from "../theme";
import { ComponentToken, EmptyClassToken, withDot } from "../../utils/class-name";
import { useContext } from "react";
import { Context } from "../config";

/**
 * @description
 * wrapper
 */
export const StyledWrapper = styled.div((props) => {
  const theme = useValidTheme(props.theme);
  const classNames = useContext(Context).classNames[ComponentToken.Empty];

  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBlock: 32,
    marginInline: 8,

    [withDot(classNames[EmptyClassToken.Description])]: {
      marginTop: 8,
      ...theme.typography.body.small,
    },
  };
});
