import React, { useContext } from "react";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";

const styles = stylex.create({
  default: {
    position: "relative",
  },

  horizontal: {
    width: sizes.none,
  },

  dragger: {
    width: sizes.xxxxxxsmall,
  },
});

const Divider = () => {
  const { classNames } = useContext(Context);

  const styled = {
    divider: stylex.props(styles.default, styles.horizontal),
    dragger: stylex.props(styles.dragger),
  };

  return (
    <div
      className={stringify(classNames.divider, styled.divider.className)}
      style={styled.divider.style}
    >
      <div
        className={stringify(classNames.dragger, styled.dragger.className)}
        style={styled.dragger.style}
      />
    </div>
  );
};

export default Divider;
