import React, { type CSSProperties, memo, type ReactNode, useMemo } from "react";
import type { HighlightProps } from "../../types/highlight";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";
import { useClassNames } from "../../hooks/use-class-names";

const styles = $create({
  capture: {
    color: "var(--color-primary)",
  },
});

const Highlight = ({ children, capture }: HighlightProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const theme = useTheme();

  const _children = useMemo<ReactNode>(() => {
    if (!capture) return [children];

    const styled = $props(styles.capture);

    // 1. use regex match
    // 2. replace with custom node
    const [_children, end] = Array.from(children.matchAll(new RegExp(capture, "g"))).reduce<
      [ReactNode[], number]
    >(
      (prev, item) => {
        prev[0].push(children.slice(prev[1], item.index));
        prev[0].push(
          <span
            className={stringify(classNames.capture, styled.className)}
            style={styled.style}
            key={item.index}
          >
            {item[0]}
          </span>,
        );
        prev[1] = item.index + item[0].length;
        return prev;
      },
      [[], 0],
    );

    _children.push(children.slice(end));

    return _children;
  }, [capture, children, theme, classNames]);

  return (
    <span
      className={classNames.highlight}
      style={{
        "--color-primary": theme.colors.primary,
      }}
    >
      {_children}
    </span>
  );
};

export default memo(Highlight);
