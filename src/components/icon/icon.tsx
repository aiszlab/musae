import React, { type ReactNode, createElement, useMemo, type CSSProperties } from "react";
import type { AsProps, IconProps } from "./types";
import { isFunction } from "@aiszlab/relax";
import { useClassNames } from "../config/hooks";
import { ComponentToken, IconClassToken } from "../../utils/class-name";
import clsx from "clsx";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  icon: (props: { color: CSSProperties["color"] }) => ({
    display: "inline-flex",
    color: props.color ?? null,
  }),

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

  const styled = stylex.props(
    styles.icon({
      color,
    }),
    !!onClick && styles.clickable
  );

  return (
    <span
      onClick={onClick}
      className={clsx(classNames[IconClassToken.Icon], className, styled.className)}
      style={styled.style}
    >
      {children}
    </span>
  );
};

export default Icon;
