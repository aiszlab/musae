import React from "react";
import { styles as _styles } from "./styles";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";

const styles = stylex.create({
  avatar: {
    width: sizes.xxsmall,
    height: sizes.xxsmall,
  },
});

const Avatar = () => {
  const styled = {
    avatar: stylex.props(styles.avatar),
  };

  return <div></div>;
};

export default Avatar;
