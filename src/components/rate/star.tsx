import React, { CSSProperties, createElement } from "react";
import { useEvent, useHover, clsx } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { RateClassToken } from "../../utils/class-name";
import { Star as _Star } from "musae/icons";
import { StarProps } from "./types";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { ComponentToken } from "../../utils/component-token";

const styles = {
  star: stylex.create({
    default: (props: { color: CSSProperties["color"] }) => ({
      position: "relative",
      transition: "all 0.2s",
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
  const classNames = useClassNames(ComponentToken.Rate);
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
      styles.star.default({ color: theme.colors[ColorToken.SurfaceContainerHighest] }),
      disabled && styles.star.disabled,
    ),
    half: stylex.props(
      styles.half.default,
      isHalf &&
        styles.half.checked({
          color: theme.colors[ColorToken.Primary],
        }),
    ),
    full: stylex.props(
      styles.full.default,
      isFull && styles.full.checked({ color: theme.colors[ColorToken.Primary] }),
    ),
  };

  return (
    <li
      className={clsx(classNames[RateClassToken.Star], styled.star.className)}
      style={styled.star.style}
    >
      {/* half */}
      <div
        className={clsx(classNames[RateClassToken.Half], styled.half.className)}
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
        className={clsx(classNames[RateClassToken.Full], styled.full.className)}
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
