import React, { type CSSProperties, useContext } from "react";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useEvent, useUpdateEffect } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";
import type { CollapseItemProps } from "musae/types/collapse";
import { Context } from "./context";
import { useExpandable } from "../../hooks/use-expandable";
import { useTheme } from "../theme";
import { KeyboardArrowRight } from "musae/icons";
import { stringify } from "@aiszlab/relax/class-name";

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
      gap: spacing.xsmall,
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
  const { activeKeys, toggle, classNames } = useContext(Context);
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
    item: stylex.props(styles.item.default({ outlineColor: theme.colors["outline-variant"] })),
    header: stylex.props(styles.header.default),
    panel: stylex.props(styles.panel.default, !isExpanded && styles.panel.hidden),
    content: stylex.props(
      styles.content.default({ outlineColor: theme.colors["outline-variant"] }),
    ),
    collapser: stylex.props(styles.collapser.default, isExpanded && styles.collapser.expanded),
  };

  const onClick = useEvent(() => {
    toggle(value);
  });

  return (
    <div
      className={stringify(
        classNames.item,
        isExpanded && classNames.itemActive,
        styled.item.className,
      )}
      style={styled.item.style}
    >
      <div
        className={stringify(classNames.header, styled.header.className)}
        style={styled.header.style}
        onClick={onClick}
      >
        <KeyboardArrowRight
          className={stringify(classNames.collapser, styled.collapser.className)}
          style={styled.collapser.style}
        />

        {label}
      </div>

      <div
        ref={collapser}
        className={stringify(
          classNames.panel,
          isExpanded && classNames.panelActive,
          styled.panel.className,
        )}
        style={styled.panel.style}
      >
        <div
          className={stringify(classNames.content, styled.content.className)}
          style={styled.content.style}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapseItem;
