import React, { type ReactNode, createElement, useMemo, type CSSProperties } from "react";
import type { AsProps, IconProps } from "../../types/icon";
import { isFunction } from "@aiszlab/relax";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";

const styles = $create({
  icon: {
    display: "inline-flex",
    verticalAlign: "middle",
    color: "var(--color)",
  },

  clickable: {
    cursor: "pointer",
    userSelect: "none",
  },
});

const Icon = ({ as, color, size, onClick, style, className, ...props }: IconProps) => {
  const classNames = useClassNames(CLASS_NAMES);

  const asProps = useMemo<AsProps>(() => {
    return {
      size: size === "small" ? 12 : size === "large" ? 20 : size === "medium" ? 16 : size ?? 16,
    };
  }, [size]);

  const children = useMemo<ReactNode>(() => {
    if (isFunction(as)) {
      return createElement(as, asProps);
    }
    return as;
  }, [asProps, as]);

  const styled = $props(styles.icon, !!onClick && styles.clickable);

  return (
    <span
      className={stringify(classNames.icon, className, styled.className)}
      style={{
        ...styled.style,
        ...style,
        "--color": color,
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </span>
  );
};

export default Icon;
