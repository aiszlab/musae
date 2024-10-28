import React, { forwardRef } from "react";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { Button } from "../button";
import type { ButtonProps } from "../../types/button";
import { stringify } from "@aiszlab/relax/class-name";

const styles = stylex.create({
  default: {
    ":not(#\\#)": {
      paddingInline: 0,
      paddingBlock: 0,
    },
  },

  medium: {
    width: sizes.xxlarge,
    height: sizes.xxlarge,
  },

  small: {
    width: sizes.medium,
    height: sizes.medium,
  },
});

const IconButton = forwardRef<HTMLButtonElement, Omit<ButtonProps, "shape" | "prefix" | "suffix">>(
  ({ className, style, size = "medium", ...props }, ref) => {
    const styled = stylex.props(styles.default, styles[size]);

    return (
      <Button
        className={stringify(className, styled.className)}
        style={{
          ...styled.style,
          ...style,
        }}
        size={size}
        shape="rounded"
        ref={ref}
        {...props}
      />
    );
  },
);

export default IconButton;
