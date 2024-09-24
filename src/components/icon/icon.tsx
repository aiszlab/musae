import React, { type ReactNode, createElement, useMemo, type CSSProperties } from "react";
import type { AsProps, IconProps } from "musae/types/icon";
import { isFunction, clsx } from "@aiszlab/relax";
import { IconClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken } from "../../utils/component-token";

const styles = stylex.create({
  icon: (props: { color: CSSProperties["color"] }) => ({
    display: "inline-flex",
    verticalAlign: "middle",
    color: props.color,
  }),

  clickable: {
    cursor: "pointer",
    userSelect: "none",
  },
});

const Icon = ({ as, color, size, onClick, style, className, ...props }: IconProps) => {
  const classNames = useClassNames(ComponentToken.Icon);

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

  const styled = stylex.props(
    styles.icon({
      color,
    }),
    !!onClick && styles.clickable,
  );

  return (
    <span
      className={clsx(classNames[IconClassToken.Icon], className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </span>
  );
};

export default Icon;
