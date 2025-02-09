import React, { useContext } from "react";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { useTheme } from "../theme";
import { useDraggable } from "@aiszlab/relax";

const styles = stylex.create({
  default: {
    position: "relative",
  },

  horizontal: {
    width: sizes.none,
  },

  dragger: {
    width: sizes.xxxxxxsmall,
    height: sizes.full,

    cursor: "col-resize",
    position: "absolute",
    insetInlineStart: sizes.half,
    transform: "translateX(-50%)",

    "::before": {
      content: "''",

      display: "block",
      height: sizes.full,
      width: sizes.xxxxxxxxsmall,
      backgroundColor: "var(--outline-variant)",

      position: "absolute",
      insetInlineStart: sizes.half,
      transform: "translateX(-50%)",
    },

    "::after": {
      content: "''",

      display: "block",
      height: sizes.xxsmall,
      width: sizes.xxxxxxxxsmall,
      backgroundColor: "var(--outline)",

      position: "absolute",
      insetInlineStart: sizes.half,
      insetBlockStart: sizes.half,
      transform: "translate(-50%, -50%)",
    },
  },
});

const Divider = () => {
  const { classNames } = useContext(Context);
  const theme = useTheme();
  const [draggerRef, dragState] = useDraggable<HTMLDivElement>();

  const styled = {
    divider: stylex.props(styles.default, styles.horizontal),
    dragger: stylex.props(styles.dragger),
  };

  return (
    <div
      className={stringify(classNames.divider, styled.divider.className)}
      style={{
        ...styled.divider.style,
        // @ts-expect-error
        "--outline": theme.colors.outline,
        "--outline-variant": theme.colors["outline-variant"],
      }}
    >
      <div
        className={stringify(classNames.dragger, styled.dragger.className)}
        style={styled.dragger.style}
        ref={draggerRef}
      />
    </div>
  );
};

export default Divider;
