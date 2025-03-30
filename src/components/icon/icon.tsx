import React, { type ReactNode, createElement, useMemo, type CSSProperties } from "react";
import type { AsProps, IconProps } from "../../types/icon";
import { isFunction } from "@aiszlab/relax";
import { $create, $props } from "../../utils/styles";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";

const styles = $create({
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

  const styled = $props(
    styles.icon({
      color,
    }),
    !!onClick && styles.clickable,
  );

  return (
    <span
      className={stringify(classNames.icon, className, styled.className)}
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
