import React, { useContext } from "react";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { useTheme } from "../theme";
import { useDraggable, useEvent } from "@aiszlab/relax";
import { DividerProps } from "../../types/split-panel";
import { UsingDrag } from "../../../../relax/packages/relax/dist/hooks/use-drag";
import { RequiredTo } from "@aiszlab/relax/types";

const styles = {
  divider: stylex.create({
    default: {
      position: "relative",
    },

    horizontal: {
      width: sizes.none,
    },

    vertical: {
      height: sizes.none,
    },
  }),

  dragger: stylex.create({
    default: {
      position: "absolute",

      "::before": {
        content: "''",
        display: "block",
        position: "absolute",
        backgroundColor: "var(--color-outline-variant)",
      },

      "::after": {
        content: "''",
        display: "block",
        position: "absolute",
        backgroundColor: "var(--color-outline)",
        insetInlineStart: sizes.half,
        insetBlockStart: sizes.half,
        transform: "translate(-50%, -50%)",
      },
    },

    horizontal: {
      width: sizes.xxxxxxsmall,
      height: sizes.full,
      cursor: "col-resize",
      insetInlineStart: sizes.half,
      transform: "translateX(-50%)",

      "::before": {
        width: sizes.xxxxxxxxsmall,
        height: sizes.full,
        insetInlineStart: sizes.half,
        transform: "translateX(-50%)",
      },

      "::after": {
        width: sizes.xxxxxxxxsmall,
        height: sizes.xxsmall,
      },
    },

    vertical: {
      width: sizes.full,
      height: sizes.xxxxxxsmall,
      cursor: "row-resize",
      insetBlockStart: sizes.half,
      transform: "translateY(-50%)",

      "::before": {
        width: sizes.full,
        height: sizes.xxxxxxxxsmall,
        insetBlockStart: sizes.half,
        transform: "translateY(-50%)",
      },

      "::after": {
        width: sizes.xxsmall,
        height: sizes.xxxxxxxxsmall,
      },
    },
  }),
};

const Divider = ({ onDragMove, onDragEnd }: DividerProps) => {
  const { classNames, orientation } = useContext(Context);
  const theme = useTheme();
  const [draggerRef] = useDraggable<HTMLDivElement>({
    onDragMove: useEvent<RequiredTo<UsingDrag["onDragMove"]>>(({ movementX, movementY }) =>
      onDragMove(orientation === "horizontal" ? movementX : movementY),
    ),
    onDragEnd,
  });

  const styled = {
    divider: stylex.props(styles.divider.default, styles.divider[orientation]),
    dragger: stylex.props(styles.dragger.default, styles.dragger[orientation]),
  };

  return (
    <div
      className={stringify(classNames.divider, styled.divider.className)}
      style={{
        ...styled.divider.style,
        // @ts-expect-error style vars
        "--color-outline": theme.colors.outline,
        "--color-outline-variant": theme.colors["outline-variant"],
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
