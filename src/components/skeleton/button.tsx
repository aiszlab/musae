import { SkeletonProps } from "../../types/skeleton";
import { sizes } from "../theme/tokens.stylex";
import Skeleton from "./skeleton";
import stylex from "@stylexjs/stylex";
import React from "react";

const styles = stylex.create({
  button: {
    width: sizes.xxxlarge,
    height: sizes.xxsmall,
    borderRadius: sizes.infinity,
  },
});

const Button = (props: SkeletonProps) => {
  const styled = stylex.props(styles.button);
  return <Skeleton style={styled.style} className={styled.className} />;
};

export default Button;
