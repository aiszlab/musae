import { type DividerProps } from "./types";
import React, { type CSSProperties } from "react";
import { useOffset } from "./hooks";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, DividerClassToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { typography } from "../theme/theme";
import clsx from "clsx";

const styles = {
  divider: stylex.create({
    horizontal: {
      width: sizes.full,
    },

    vertical: {
      height: sizes.full,
    },
  }),

  simple: stylex.create({
    horizontal: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      height: sizes.smallest,
      backgroundColor: props.backgroundColor,
    }),

    vertical: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      height: sizes.smallest,
      backgroundColor: props.backgroundColor,
    }),
  }),

  labeled: stylex.create({
    horizontal: (props: { backgroundColor: CSSProperties["backgroundColor"]; offset: number }) => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",

      "::before": {
        height: sizes.smallest,
        width: `${props.offset}%`,
        backgroundColor: props.backgroundColor,
        content: "''",
      },

      "::after": {
        height: sizes.smallest,
        width: `${100 - props.offset}%`,
        backgroundColor: props.backgroundColor,
        content: "''",
      },
    }),

    vertical: (props: { backgroundColor: CSSProperties["backgroundColor"]; offset: number }) => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",

      "::before": {
        width: sizes.smallest,
        height: `${props.offset}%`,
        backgroundColor: props.backgroundColor,
        content: "''",
      },

      "::after": {
        width: sizes.smallest,
        height: `${100 - props.offset}%`,
        backgroundColor: props.backgroundColor,
        content: "''",
      },
    }),
  }),

  label: stylex.create({
    horizontal: {
      marginInline: spacing.small,
      whiteSpace: "nowrap",
    },

    vertical: {
      marginBlock: spacing.small,
      whiteSpace: "nowrap",
    },
  }),
};

const Divider = ({ align = "center", children, type = "horizontal", className, style }: DividerProps) => {
  const classNames = useClassNames(ComponentToken.Divider);
  const offset = useOffset({ align });
  const theme = useTheme();
  const isLabeled = !!children;

  const styled = {
    divider: stylex.props(
      styles.divider[type],
      !isLabeled &&
        styles.simple[type]({
          backgroundColor: theme.colors[ColorToken.OutlineVariant],
        }),
      isLabeled &&
        styles.labeled[type]({
          backgroundColor: theme.colors[ColorToken.OutlineVariant],
          offset,
        })
    ),
    label: stylex.props(typography.body.small, styles.label[type]),
  };

  return (
    <div
      className={clsx(styled.divider.className, className, classNames[DividerClassToken.Divider])}
      style={{
        ...styled.divider.style,
        ...style,
      }}
    >
      {!!children && (
        <span className={clsx(styled.label.className, classNames[DividerClassToken.Label])} style={styled.label.style}>
          {children}
        </span>
      )}
    </div>
  );
};

export default Divider;
