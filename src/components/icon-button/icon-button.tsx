import React from "react";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { Button } from "../button";
import type { ButtonProps } from "../../types/button";
import { clsx } from "@aiszlab/relax";

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

const IconButton = ({
  className,
  style,
  size = "medium",
  ...props
}: Omit<ButtonProps, "shape" | "prefix" | "suffix">) => {
  const styled = stylex.props(styles.default, styles[size]);

  return (
    <Button
      className={clsx(className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
      size={size}
      shape="rounded"
      {...props}
    />
  );
};

export default IconButton;
