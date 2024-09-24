import React, { type CSSProperties } from "react";
import type { BreadcrumbProps } from "musae/types/breadcrumb";
import stylex from "@stylexjs/stylex";
import { typography } from "../theme/theme";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { useClassNames } from "../../hooks/use-class-names";
import { BreadcrumbClassToken } from "../../utils/class-name";
import { clsx } from "@aiszlab/relax";
import Item from "./item";
import { ComponentToken } from "../../utils/component-token";

const styles = stylex.create({
  breadcrumb: (props: { color: CSSProperties["color"] }) => ({
    color: props.color,
  }),

  navigations: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
  },
});

const Breadcrumb = ({ items = [], className, separator = "/", style }: BreadcrumbProps) => {
  const theme = useTheme();
  const classNames = useClassNames(ComponentToken.Breadcrumb);

  /// there is no need to render the breadcrumb when there is no items
  if (items.length === 0) {
    return null;
  }

  const styled = {
    breadcrumb: stylex.props(
      typography.label.large,
      styles.breadcrumb({
        color: theme.colors[ColorToken.OnSurfaceVariant],
      }),
    ),
    navigations: stylex.props(styles.navigations),
  };

  return (
    <nav
      className={clsx(
        classNames[BreadcrumbClassToken.Breadcrumb],
        className,
        styled.breadcrumb.className,
      )}
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
  );
};

export default Breadcrumb;
