import styles from "./styles";
import React, { useContext } from "react";
import { props as $props } from "@stylexjs/stylex";
import { useEvent, useUpdateEffect } from "@aiszlab/relax";
import type { CollapseItemProps } from "../../types/collapse";
import { Context } from "./context";
import { useExpandable } from "../../hooks/use-expandable";
import { useTheme } from "../theme";
import { IconKeyboardArrowRight } from "../icon/icons";
import { stringify } from "@aiszlab/relax/class-name";
import { $body, $title } from "../theme/theme";

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
    item: $props(styles.item.default),
    header: $props(styles.header.default, $title.medium),
    panel: $props(styles.panel.default, !isExpanded && styles.panel.hidden),
    content: $props(styles.content.default, $body.medium),
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
      style={{
        ...styled.item.style,
        "--color-outline-variant": theme.colors["outline-variant"],
      }}
    >
      <div
        className={stringify(classNames.header, styled.header.className)}
        style={styled.header.style}
        onClick={onClick}
      >
        <IconKeyboardArrowRight
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
