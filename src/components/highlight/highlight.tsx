import React, { type CSSProperties, memo, type ReactNode, useMemo } from "react";
import type { HighlightProps } from "musae/types/highlight";
import { useClassNames } from "../../hooks/use-class-names";
import { HighlightClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { stringify } from "@aiszlab/relax/class-name";

const styles = stylex.create({
  capture: (props: { color: CSSProperties["color"] }) => ({
    color: props.color,
  }),
});

const Highlight = ({ children, capture }: HighlightProps) => {
  const classNames = useClassNames("highlight");
  const theme = useTheme();

  const _children = useMemo<ReactNode>(() => {
    if (!capture) return [children];

    const styled = stylex.props(
      styles.capture({
        color: theme.colors.primary,
      }),
    );

    // 1. use regex match
    // 2. replace with custom node
    const [_children, end] = Array.from(children.matchAll(new RegExp(capture, "g"))).reduce<
      [ReactNode[], number]
    >(
      (prev, item) => {
        prev[0].push(children.slice(prev[1], item.index));
        prev[0].push(
          <span
            className={stringify(classNames[HighlightClassToken.Capture], styled.className)}
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

  return <span className={classNames[HighlightClassToken.Highlight]}>{_children}</span>;
};

export default memo(Highlight);
