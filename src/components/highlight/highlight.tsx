import React, { CSSProperties, memo, type ReactNode, useMemo } from "react";
import type { HighlightProps } from "./types";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, HighlightClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  capture: (props: { color: CSSProperties["color"] }) => ({
    color: props.color,
    marginInline: spacing.xxxsmall,
  }),
});

const Highlight = ({ children, capture }: HighlightProps) => {
  const classNames = useClassNames(ComponentToken.Highlight);
  const theme = useTheme();

  const styled = {
    capture: stylex.props(
      styles.capture({
        color: theme.colors[ColorToken.Primary],
      }),
    ),
  };

  const _children = useMemo<ReactNode>(() => {
    if (!capture) return children;

    return Array.from(children.matchAll(new RegExp(capture, "g"))).reduce<[ReactNode[], number]>(
      (prev, item) => {
        prev[0].push(children.slice(prev[1], item.index));
        prev[0].push(<span>{item[0]}</span>);
        prev[1] = item.index + item[0].length;
        return prev;
      },
      [[], 0],
    );
  }, [children, capture]);

  return <span className={classNames[HighlightClassToken.Highlight]}>{_children}</span>;
};

export default memo(Highlight);
