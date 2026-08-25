import styles from "./styles";
import React, { forwardRef } from "react";
import { props as $props } from "@stylexjs/stylex";
import { Button } from "../button";
import type { ButtonProps } from "../../types/button";
import { stringify } from "@aiszlab/relax/class-name";

const IconButton = forwardRef<HTMLButtonElement, Omit<ButtonProps, "shape" | "prefix" | "suffix">>(
  ({ className, style, size = "medium", ...props }, ref) => {
    const styled = $props(styles.base, styles[size]);

    return (
      <Button
        className={stringify(className, styled.className)}
        style={{
          ...styled.style,
          ...style,
        }}
        size={size}
        shape="round"
        ref={ref}
        {...props}
      />
    );
  },
);

export default IconButton;
