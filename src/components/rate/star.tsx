import React, { CSSProperties, createElement, useContext } from "react";
import { useEvent, useHover } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { duration, sizes } from "../theme/tokens.stylex";
import { Star as _Star } from "musae/icons";
import type { StarProps } from "../../types/rate";
import { useTheme } from "../theme";
import { stringify } from "@aiszlab/relax/class-name";
import Context from "./context";

const styles = {
  star: stylex.create({
    default: (props: { color: CSSProperties["color"] }) => ({
      position: "relative",
      transitionProperty: "all",
      transitionDuration: duration.short,
      cursor: "pointer",
      color: props.color,

      ":hover": {
        transform: "scale(1.1)",
      },
    }),

    disabled: {
      cursor: null,

      ":hover": {
        transform: null,
      },
    },
  }),

  half: stylex.create({
    default: {
      position: "absolute",
      width: sizes.half,
      height: sizes.full,
      insetInlineStart: 0,
      insetBlockStart: 0,
      opacity: 0,
      userSelect: "none",
      overflow: "hidden",
    },

    checked: (props: { color: CSSProperties["color"] }) => ({
      opacity: 1,
      color: props.color,
    }),
  }),

  full: stylex.create({
    default: {
      userSelect: "none",
    },

    checked: (props: { color: CSSProperties["color"] }) => ({
      color: props.color,
    }),
  }),
};

const Star = ({ disabled, value, onEnter, at, onLeave, onClick }: StarProps) => {
  const { classNames } = useContext(Context);
  const theme = useTheme();
  const isHalf = value === 0.5;
  const isFull = value >= 1;

  const half = useEvent(() => {
    onClick(at + 0.5);
  });

  const full = useEvent(() => {
    onClick(at + 1);
  });

  const enterHalf = useEvent(() => {
    onEnter(at + 0.5);
  });
  const enterFull = useEvent(() => {
    onEnter(at + 1);
  });
  const [, halfHoverProps] = useHover({
    onEnter: enterHalf,
    onLeave,
  });
  const [, fullHoverProps] = useHover({
    onEnter: enterFull,
    onLeave,
  });

  const styled = {
    star: stylex.props(
      styles.star.default({ color: theme.colors["surface-container-highest"] }),
      disabled && styles.star.disabled,
    ),
    half: stylex.props(
      styles.half.default,
      isHalf &&
        styles.half.checked({
          color: theme.colors.primary,
        }),
    ),
    full: stylex.props(
      styles.full.default,
      isFull && styles.full.checked({ color: theme.colors.primary }),
    ),
  };

  return (
    <li className={stringify(classNames.star, styled.star.className)} style={styled.star.style}>
      {/* half */}
      <div
        className={stringify(classNames.half, styled.half.className)}
        style={styled.half.style}
        {...(!disabled && {
          ...halfHoverProps,
          onClick: half,
        })}
      >
        {createElement(_Star, { size: "large" })}
      </div>

      {/* full */}
      <div
        className={stringify(classNames.full, styled.full.className)}
        style={styled.full.style}
        {...(!disabled && {
          ...fullHoverProps,
          onClick: full,
        })}
      >
        {createElement(_Star, { size: "large" })}
      </div>
    </li>
  );
};

export default Star;
