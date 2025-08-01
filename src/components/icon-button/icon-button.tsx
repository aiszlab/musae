import React, { forwardRef } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { Button } from "../button";
import type { ButtonProps } from "../../types/button";
import { stringify } from "@aiszlab/relax/class-name";

const styles = $create({
  default: {
    ":not(#\\#)": {
      paddingInline: 0,
      paddingBlock: 0,
    },
  },

  xsmall: {
    width: sizes.medium,
    minWidth: sizes.medium,
    height: sizes.medium,
  },

  small: {
    width: sizes.xlarge,
    minWidth: sizes.xlarge,
    height: sizes.xlarge,
  },

  medium: {
    width: sizes.xxxxlarge,
    minWidth: sizes.xxxxlarge,
    height: sizes.xxxxlarge,
  },

  large: {
    width: sizes.xxxxxxxlarge,
    minWidth: sizes.xxxxxxxlarge,
    height: sizes.xxxxxxxlarge,
  },

  xlarge: {
    width: sizes.xxxxxxxxxlarge,
    minWidth: sizes.xxxxxxxxxlarge,
    height: sizes.xxxxxxxxxlarge,
  },
});

const IconButton = forwardRef<HTMLButtonElement, Omit<ButtonProps, "shape" | "prefix" | "suffix">>(
  ({ className, style, size = "medium", ...props }, ref) => {
    const styled = $props(styles.default, styles[size]);

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
