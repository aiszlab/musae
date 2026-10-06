import styles from "./styles";
import React, { createElement, forwardRef } from "react";
import { Input } from "../input";
import { useBoolean } from "@aiszlab/relax";
import { IconVisibility, IconVisibilityOff } from "../icon/icons";
import type { InputRef } from "../../types/input";
import type { PasswordInputProps } from "../../types/password-input";
import { props as $props } from "@stylexjs/stylex";
import { CLASS_NAMES } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

const PasswordInput = forwardRef<InputRef, PasswordInputProps>(({ className, ...props }, ref) => {
  const [isVisible, { toggle }] = useBoolean(false);
  const classNames = useClassNames(CLASS_NAMES);
  const themeColorVars = useThemeColorVars(["secondary-fixed-dim", "secondary"]);

  const styled = {
    input: $props(styles.input),
    visibility: $props(styles.visibility),
  };

  return (
    <Input
      {...props}
      className={stringify(classNames.passwordInput, className)}
      style={themeColorVars}
      ref={ref}
      type={isVisible ? "text" : "password"}
      inputClassName={styled.input.className}
      trailing={createElement(isVisible ? IconVisibilityOff : IconVisibility, {
        role: "button",
        onClick: toggle,
        onMouseDown: (event) => event.preventDefault(),
        onMouseUp: (event) => event.preventDefault(),
        ...styled.visibility,
      })}
    />
  );
});

export default PasswordInput;
