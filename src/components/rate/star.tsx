import React, { createElement, useContext } from "react";
import { useEvent, useHover } from "@aiszlab/relax";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { duration, sizes } from "../theme/tokens.stylex";
import { Star as _Star } from "../icon/icons";
import type { StarProps } from "../../types/rate";
import { stringify } from "@aiszlab/relax/class-name";
import Context from "./context";
import { type ThemeColorVariable, useThemeColorVars } from "../../hooks/use-theme-color-vars";

const styles = {
  star: $create({
    default: {
      position: "relative",
      transitionProperty: "all",
      transitionDuration: duration.short,
      cursor: "pointer",
      color: "var(--color-surface-container-highest)" satisfies ThemeColorVariable,

      ":hover": {
        transform: "scale(1.1)",
      },
    },

    disabled: {
      cursor: null,

      ":hover": {
        transform: null,
      },
    },
  }),

  half: $create({
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

    checked: {
      opacity: 1,
      color: "var(--color-primary)" satisfies ThemeColorVariable,
    },
  }),

  full: $create({
    default: {
      userSelect: "none",
    },

    checked: {
      color: "var(--color-primary)" satisfies ThemeColorVariable,
    },
  }),
};

const Star = ({ disabled, value, onEnter, at, onLeave, onClick }: StarProps) => {
  const { classNames } = useContext(Context);
  const isHalf = value === 0.5;
  const isFull = value >= 1;
  const _themeColorVars = useThemeColorVars(["primary", "surface-container-highest"]);

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
    star: $props(styles.star.default, disabled && styles.star.disabled),
    half: $props(styles.half.default, isHalf && styles.half.checked),
    full: $props(styles.full.default, isFull && styles.full.checked),
  };

  return (
    <li
      className={stringify(classNames.star, styled.star.className)}
      style={{
        ...styled.star.style,
        ..._themeColorVars,
      }}
    >
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
