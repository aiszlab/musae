import React, { CSSProperties, isValidElement } from "react";
import type { BreadcrumbProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { LABEL } from "../theme/theme";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  breadcrumb: (color: Required<CSSProperties>["color"]) => ({
    color,
  }),

  navigations: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
  },

  navigation: (color: Required<CSSProperties>["color"]) => ({
    ":last-of-type": {
      color,
    },
  }),

  link: (
    hoveredBackgroundColor: Required<CSSProperties>["backgroundColor"],
    hoveredColor: Required<CSSProperties>["color"]
  ) => ({
    paddingBlock: spacing.none,
    paddingInline: spacing.xxsmall,
    transition: "all 200ms",
    borderRadius: 4,
    backgroundColor: {
      default: null,
      ":hover": hoveredBackgroundColor,
    },
    color: {
      default: null,
      ":hover": hoveredColor,
    },
  }),

  separator: {
    marginBlock: spacing.none,
    marginInline: spacing.small,
  },
});

const _SEPARATOR = "/";
const _ROLE = "separator";

const Breadcrumb = (props: BreadcrumbProps) => {
  const theme = useTheme();

  /// there is no need to render the breadcrumb when there is no items
  if (!props.items.length) {
    return null;
  }

  const styled = {
    breadcrumb: stylex.props(LABEL.large, styles.breadcrumb(theme.colors[ColorToken.OnSurfaceVariant])),
    navigation: stylex.props(styles.navigation(theme.colors[ColorToken.OnSurface])),
    link: stylex.props(styles.link(theme.colors[ColorToken.Surface], theme.colors[ColorToken.OnSurface])),
    separator: stylex.props(styles.separator),
  };

  /// render the breadcrumb
  return (
    <nav {...styled.breadcrumb}>
      <ol>
        {props.items.map((_item, _index) => {
          const _isLastElement = _index + 1 === props.items.length;
          const _isReactElement = isValidElement(_item.label);

          return (
            <>
              <li key={_index}>
                {_isReactElement ? (
                  _item.label
                ) : _item.href ? (
                  <a href={_item.href}>{_item.label}</a>
                ) : (
                  <span>{_item.label}</span>
                )}
              </li>

              {!_isLastElement && (
                <li {...styled.separator} key={`${_ROLE}${_index}`} role={_ROLE}>
                  {props.separator ?? _SEPARATOR}
                </li>
              )}
            </>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
