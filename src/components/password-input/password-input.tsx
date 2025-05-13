import React, { createElement, type CSSProperties, forwardRef } from "react";
import { Input } from "../input";
import { useBoolean } from "@aiszlab/relax";
import { Visibility, VisibilityOff } from "../icon/icons";
import type { InputRef } from "../../types/input";
import type { PasswordInputProps } from "../../types/password-input";
import { useTheme } from "../theme";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { duration } from "../theme/tokens.stylex";
import { CLASS_NAMES } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";

const styles = $create({
  visibility: {
    color: "var(--color-secondary-fixed-dim)",
    willChange: "color",
    transitionProperty: "color",
    transitionDuration: duration.short,

    ":hover": {
      color: "var(--color-secondary)",
    },
  },
});

const PasswordInput = forwardRef<InputRef, PasswordInputProps>(({ className, ...props }, ref) => {
  const [isVisible, { toggle }] = useBoolean(false);
  const theme = useTheme();
  const classNames = useClassNames(CLASS_NAMES);

  const styled = {
    visibility: $props(styles.visibility),
  };

  return (
    <Input
      {...props}
      className={stringify(classNames.passwordInput, className)}
      style={{
        // @ts-expect-error style vars
        "--color-secondary-fixed-dim": theme.colors["secondary-fixed-dim"],
        "--color-secondary": theme.colors.secondary,
      }}
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
