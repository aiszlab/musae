import styled from "@emotion/styled";
import { useClassNames } from "./hooks";
import { useValidTheme } from "../theme/hooks";
import { withDot } from "../../utils/class-name";

/**
 * @description
 * wrapper
 */
export const StyledWrapper = styled.div((props) => {
  const classNames = useClassNames();
  const theme = useValidTheme(props.theme);

  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBlock: 32,
    marginInline: 8,

    [withDot(classNames.description)]: {
      marginTop: 8,
      ...theme.typography.body.small,
    },
  };
});
