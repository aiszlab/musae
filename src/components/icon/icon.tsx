import React, { type ReactNode, createElement, useMemo } from "react";
import { AsProps, IconProps } from "./types";
import { isFunction } from "@aiszlab/relax";
import { useTheme } from "../theme";
import { useClassNames } from "../config/hooks";
import { ComponentToken, IconClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { ColorToken } from "../../utils/colors";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  icon: {
    display: "inline-flex",
  },

  clickable: {
    cursor: "pointer",
  },
});

const Icon = ({ as, color, size, onClick, className }: IconProps) => {
  const classNames = useClassNames(ComponentToken.Icon);
  const asProps = useMemo<AsProps>(() => {
    return {
      size: size ?? 20,
    };
  }, [size]);

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
      className={clsx(styled.className, className, classNames[IconClassToken.Icon])}
      style={styled.style}
    >
      {children}
    </span>
  );
};

export default Icon;
