import React, { type CSSProperties } from "react";
import type { BreadcrumbProps } from "../../types/breadcrumb";
import { $create, $props } from "../../utils/styles";
import { typography } from "../theme/theme";
import { useTheme } from "../theme";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import Item from "./item";
import { spacing } from "../theme/tokens.stylex";
import { CLASS_NAMES, Context } from "./context";

const styles = $create({
  breadcrumb: (props: { color: CSSProperties["color"] }) => ({
    color: props.color,
  }),

  navigations: {
    margin: spacing.none,
    padding: spacing.none,
    listStyleType: "none",
    display: "flex",
    flexWrap: "wrap",
  },
});

const Breadcrumb = ({ items = [], className, separator = "/", style }: BreadcrumbProps) => {
  const theme = useTheme();
  const classNames = useClassNames(CLASS_NAMES);

  // there is no need to render the breadcrumb when there is no items
  if (items.length === 0) {
    return null;
  }

  const styled = {
    breadcrumb: $props(
      typography.label.large,
      styles.breadcrumb({
        color: theme.colors["on-surface-variant"],
      }),
    ),
    navigations: $props(styles.navigations),
  };

  return (
    <Context.Provider value={{ classNames }}>
      <nav
        className={stringify(classNames.breadcrumb, className, styled.breadcrumb.className)}
        style={{
          ...styled.breadcrumb.style,
          ...style,
        }}
      >
        <ol {...styled.navigations}>
          {items.map((item, index) => {
            return (
              <Item
                key={index}
                label={item.label}
                max={index === items.length - 1}
                href={item.href}
                separator={separator}
              />
            );
          })}
        </ol>
      </nav>
    </Context.Provider>
  );
};

export default Breadcrumb;
