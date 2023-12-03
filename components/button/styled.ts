import styled from "@emotion/styled";
import { useValidTheme } from "../theme";
import type { ButtonRenderProps } from "./types";
import { useClassNames } from "../config";
import { ButtonClassToken, ComponentToken, withSelf } from "../../utils/class-name";

export const StyledButton = styled.button<ButtonRenderProps>(({ variant, color, size, ...props }) => {
  const theme = useValidTheme(props.theme);
  const classNames = useClassNames(ComponentToken.Button);

  return {
    [withSelf(classNames[ButtonClassToken.Button])]: {
      borderRadius: 999,
      display: "flex",
      alignItems: "center",

      // size medium
      ...(size === "medium" && {
        paddingBlock: 10,
        paddingInline: 24,
      }),

      // size small
      ...(size === "small" && {
        paddingBlock: 0,
        paddingInline: 6,
      }),

      // filled variant style
      ...(variant === "filled" && {
        backgroundColor: theme.colorRole.primary,
        border: "none",
      }),

      // outlined variant style
      ...(variant === "outlined" && {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: theme.colorRole.outline,
      }),

      "& > span": {
        marginLeft: 8,
        marginRight: 8,
        whiteSpace: "nowrap",
        // typography
        ...theme.typography.label[size],
        // color
        color: variant === "text" ? theme.colorRole.primary : theme.colorRole.onPrimary,
      },
    },
  };
});
