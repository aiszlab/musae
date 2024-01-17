import React, { type ReactNode, createElement, useMemo } from "react";
import { AsProps, IconProps } from "./types";
import { isFunction } from "@aiszlab/relax";
import { useTheme } from "../theme";
import { useClassNames } from "../config";
import { ComponentToken, IconClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { ColorToken } from "../../utils/colors";
import { stylex } from "@stylexjs/stylex";

const styles = stylex.create({
  icon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },

  clickable: {
    cursor: "pointer",
  },
});

const Icon = ({ as, color, size, onClick, className }: IconProps) => {
  const theme = useTheme();
  const classNames = useClassNames(ComponentToken.Icon);
  const asProps = useMemo<AsProps>(() => {
    return {
      color: color ?? theme.colors[ColorToken.Primary],
      size: size ?? 20,
    };
  }, [color, size, theme]);

  const children = useMemo<ReactNode>(() => {
    if (isFunction(as)) {
      return createElement(as, asProps);
    }
    return as;
  }, [asProps, as]);

  const styled = stylex.props(styles.icon, !!onClick && styles.clickable);

  return (
    <span
      onClick={onClick}
      className={clsx(styled.className, classNames[IconClassToken.Icon], className)}
      style={styled.style}
    >
      {children}
    </span>
  );
};

export default Icon;
