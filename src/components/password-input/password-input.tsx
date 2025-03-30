import React, { createElement, type CSSProperties, forwardRef } from "react";
import { Input } from "../input";
import { useBoolean } from "@aiszlab/relax";
import { Visibility, VisibilityOff } from "../icon/icons";
import type { InputRef } from "../../types/input";
import type { PasswordInputProps } from "../../types/password-input";
import { useTheme } from "../theme";
import { $create, $props } from "../../utils/styles";
import { duration } from "../theme/tokens.stylex";

const styles = $create({
  visibility: (props: { color: CSSProperties["color"]; hoveredColor: CSSProperties["color"] }) => ({
    color: props.color,
    willChange: "color",
    transitionProperty: "color",
    transitionDuration: duration.short,

    ":hover": {
      color: props.hoveredColor,
    },
  }),
});

const PasswordInput = forwardRef<InputRef, PasswordInputProps>((props, ref) => {
  const [isVisible, { toggle }] = useBoolean(false);
  const theme = useTheme();

  const styled = {
    visibility: $props(
      styles.visibility({
        color: theme.colors["secondary-fixed-dim"],
        hoveredColor: theme.colors.secondary,
      }),
    ),
  };

  return (
    <Input
      {...props}
      ref={ref}
      type={isVisible ? "text" : "password"}
      trailing={createElement(isVisible ? VisibilityOff : Visibility, {
        onClick: toggle,
        onMouseDown: (event) => event.preventDefault(),
        onMouseUp: (event) => event.preventDefault(),
        ...styled.visibility,
      })}
    />
  );
});

export default PasswordInput;
