import React, { CSSProperties, createElement } from "react";
import { useEvent, useHover } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import clsx from "clsx";
import { useClassNames } from "../config";
import { ComponentToken, RateClassToken } from "../../utils/class-name";
import { Star as _Star } from "../icon/icons";
import { StarProps } from "./types";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

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

  leading: stylex.create({
    default: (props: { hoveredColor: CSSProperties["color"] }) => ({
      position: "absolute",
      width: sizes.half,
      height: sizes.full,
      insetInlineStart: 0,
      insetBlockStart: 0,
      opacity: 0,
      userSelect: "none",
      overflow: "hidden",
    }),

    checked: (props: { color: CSSProperties["color"] }) => ({
      opacity: 1,
      color: props.color,
    }),
  }),

  trailing: stylex.create({
    default: {
      userSelect: "none",
    },

    checkd: (props: { color: CSSProperties["color"] }) => ({
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
      disabled && styles.star.disabled
    ),
    leading: stylex.props(
      styles.leading.default({ hoveredColor: theme.colors[ColorToken.Primary] }),
      isHalf &&
        styles.leading.checked({
          color: theme.colors[ColorToken.Primary],
        })
    ),
    trailing: stylex.props(
      styles.trailing.default,
      isFull && styles.trailing.checkd({ color: theme.colors[ColorToken.Primary] })
    ),
  };

  return (
    <li className={clsx(classNames[RateClassToken.Star], styled.star.className)} style={styled.star.style}>
      {/* half */}
      <div
        className={clsx(classNames[RateClassToken.Leading], styled.leading.className)}
        style={styled.leading.style}
        {...(!disabled && {
          ...halfHoverProps,
          onClick: half,
        })}
      >
        {createElement(_Star, { size: "large" })}
      </div>

      {/* full */}
      <div
        className={clsx(classNames[RateClassToken.Trailing], styled.trailing.className)}
        style={styled.trailing.style}
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
