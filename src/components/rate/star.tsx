import styles from "./styles";
import React, { createElement, useContext } from "react";
import { useEvent, useHover } from "@aiszlab/relax";
import { props as $props } from "@stylexjs/stylex";
import { IconStar as _Star } from "../icon/icons";
import type { StarProps } from "../../types/rate";
import { stringify } from "@aiszlab/relax/class-name";
import Context from "./context";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

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
    star: $props(styles.star.base, disabled && styles.star.disabled),
    half: $props(styles.half.base, isHalf && styles.half.checked),
    full: $props(styles.full.base, isFull && styles.full.checked),
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
