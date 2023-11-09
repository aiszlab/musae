import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";
import type { OptionsRenderProps } from "./types";
import { useClassNames } from "./hooks";
import { withDot } from "../../utils/class-name";

/**
 * @description
 * chooser
 */
export const StyledChooser = styled.div(() => {
  const classNames = useClassNames();

  return {
    [withDot(classNames.chosenItem)]: {
      marginRight: 4,
    },
  };
});

/**
 * @description
 * dropdown wrapper
 */
export const StyledOptions = styled.div<OptionsRenderProps>(({ width, ...props }) => {
  const theme = useValidTheme(props.theme);

  return {
    marginTop: 4,
    borderRadius: 8,
    backgroundColor: theme.colorRole.surface,
    maxHeight: 300,
    minWidth: width,
    overflow: "auto",
    padding: 4,
  };
});
