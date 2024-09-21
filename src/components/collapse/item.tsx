import React, { type CSSProperties, useContext } from "react";
import { useClassNames } from "../../hooks/use-class-names";
import { CollapseClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useEvent, useUpdateEffect, clsx } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";
import type { CollapseItemProps } from "./types";
import { Context } from "./context";
import { useExpandable } from "../../hooks/use-expandable";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { KeyboardArrowRight } from "musae/icons";
import { ComponentToken } from "../../utils/component-token";

const styles = {
  item: stylex.create({
    default: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
      borderBottomWidth: sizes.smallest,
      borderBottomStyle: "solid",
      borderBottomColor: props.outlineColor,

      ":last-of-type": {
        borderBottomWidth: 0,
      },
    }),
  }),

  header: stylex.create({
    default: {
      paddingInline: spacing.large,
      paddingBlock: spacing.medium,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.small,
      cursor: "pointer",
    },
  }),

  panel: stylex.create({
    default: {
      height: "auto",
    },

    hidden: {
      display: "none",
    },
  }),

  content: stylex.create({
    default: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
      borderTopWidth: sizes.smallest,
      borderTopStyle: "solid",
      borderTopColor: props.outlineColor,
      padding: spacing.large,
    }),
  }),

  collapser: stylex.create({
    default: {
      willChange: "transform",
      transitionProperty: "transform",
      transitionDuration: "0.2s",
    },

    expanded: {
      transform: "rotate(90deg)",
    },
  }),
};

const CollapseItem = ({ children, label, value }: CollapseItemProps) => {
  const classNames = useClassNames(ComponentToken.Collapse);
  const { activeKeys, toggle } = useContext(Context);
  const isExpanded = activeKeys.has(value);
  const [collapser, animate] = useAnimate<HTMLDivElement>();
  const theme = useTheme();

  const { expand, collapse } = useExpandable();

  useUpdateEffect(async () => {
    if (isExpanded) {
      await expand([collapser, animate]);
      return;
    }
    await collapse([collapser, animate]);
  }, [isExpanded]);

  const styled = {
    item: stylex.props(
      styles.item.default({ outlineColor: theme.colors[ColorToken.OutlineVariant] }),
    ),
    header: stylex.props(styles.header.default),
    panel: stylex.props(styles.panel.default, !isExpanded && styles.panel.hidden),
    content: stylex.props(
      styles.content.default({ outlineColor: theme.colors[ColorToken.OutlineVariant] }),
    ),
    collapser: stylex.props(styles.collapser.default, isExpanded && styles.collapser.expanded),
  };

  const onClick = useEvent(() => {
    toggle(value);
  });

  return (
    <div
      className={clsx(
        classNames[CollapseClassToken.Item],
        {
          [classNames[CollapseClassToken.ItemActive]]: isExpanded,
        },
        styled.item.className,
      )}
      style={styled.item.style}
    >
      <div
        className={clsx(classNames[CollapseClassToken.Header], styled.header.className)}
        style={styled.header.style}
        onClick={onClick}
      >
        <KeyboardArrowRight
          className={clsx(classNames[CollapseClassToken.Collapser], styled.collapser.className)}
          style={styled.collapser.style}
        />

        {label}
      </div>

      <div
        ref={collapser}
        className={clsx(
          classNames[CollapseClassToken.Panel],
          {
            [classNames[CollapseClassToken.PanelActive]]: isExpanded,
          },
          styled.panel.className,
        )}
        style={styled.panel.style}
      >
        <div
          className={clsx(classNames[CollapseClassToken.Content], styled.content.className)}
          style={styled.content.style}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapseItem;
