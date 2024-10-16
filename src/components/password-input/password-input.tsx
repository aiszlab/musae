import React, { createElement, forwardRef } from "react";
import { Input } from "../input";
import { useBoolean } from "@aiszlab/relax";
import { Visibility, VisibilityOff } from "../icon/icons";
import type { InputRef } from "musae/types/input";
import type { PasswordInputProps } from "musae/types/password-input";

const PasswordInput = forwardRef<InputRef, PasswordInputProps>((props, ref) => {
  const [isVisible, { toggle }] = useBoolean(false);

  return (
    <Input
      {...props}
      ref={ref}
      type={isVisible ? "text" : "password"}
      trailing={createElement(isVisible ? VisibilityOff : Visibility, {
        onClick: toggle,
      })}
    />
  );
});

export default PasswordInput;
