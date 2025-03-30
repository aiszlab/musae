import React, { type CSSProperties, useContext } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import { useEvent, useUpdateEffect } from "@aiszlab/relax";
import type { CollapseItemProps } from "../../types/collapse";
import { Context } from "./context";
import { useExpandable } from "../../hooks/use-expandable";
import { useTheme } from "../theme";
import { KeyboardArrowRight } from "../icon/icons";
import { stringify } from "@aiszlab/relax/class-name";
import { typography } from "../theme/theme";

const styles = {
  item: $create({
    default: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
      borderBottomWidth: sizes.smallest,
      borderBottomStyle: "solid",
      borderBottomColor: props.outlineColor,

      ":last-of-type": {
        borderBottomWidth: 0,
      },
    }),
  }),

  header: $create({
    default: {
      paddingInline: spacing.large,
      paddingBlock: spacing.medium,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.xxsmall,
      cursor: "pointer",
    },
  }),

  panel: $create({
    default: {
      height: "auto",
    },

    hidden: {
      display: "none",
    },
  }),

  content: $create({
    default: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
      borderTopWidth: sizes.smallest,
      borderTopStyle: "solid",
      borderTopColor: props.outlineColor,
      padding: spacing.large,
    }),
  }),

  collapser: $create({
    default: {
      willChange: "transform",
      transitionProperty: "transform",
      transitionDuration: duration.short,
    },

    expanded: {
      transform: "rotate(90deg)",
    },
  }),
};

const CollapseItem = ({ children, label, value }: CollapseItemProps) => {
  const { activeKeys, toggle, classNames } = useContext(Context);
  const isExpanded = activeKeys.has(value);
  const theme = useTheme();
  const { ref, expand, collapse } = useExpandable<HTMLDivElement>();

  useUpdateEffect(async () => {
    if (isExpanded) {
      await expand();
      return;
    }
    await collapse();
  }, [isExpanded]);

  const styled = {
    item: $props(styles.item.default({ outlineColor: theme.colors["outline-variant"] })),
    header: $props(styles.header.default, typography.title.medium),
    panel: $props(styles.panel.default, !isExpanded && styles.panel.hidden),
    content: $props(
      styles.content.default({ outlineColor: theme.colors["outline-variant"] }),
      typography.body.medium,
    ),
    collapser: $props(styles.collapser.default, isExpanded && styles.collapser.expanded),
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
        ref={ref}
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
