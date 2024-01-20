import { DividerProps } from "./types";
import React, { CSSProperties } from "react";
import { useOffset } from "./hooks";
import { useClassNames } from "../config";
import { ComponentToken, DividerClassToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { BODY } from "../theme/theme";
import clsx from "clsx";

const styles = stylex.create({
  divider: {
    width: "100%",
  },

  withChildren: (backgroundColor: CSSProperties["backgroundColor"], offset: number) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    "::before": {
      height: 1,
      backgroundColor,
      width: `${offset}%`,
      content: "''",
    },

    "::after": {
      height: 1,
      backgroundColor,
      width: `${100 - offset}%`,
      content: "''",
    },
  }),

  outline: (backgroundColor: CSSProperties["backgroundColor"]) => ({
    height: 1,
    backgroundColor,
  }),

  label: {
    marginInline: spacing.small,
    whiteSpace: "nowrap",
  },
});

const Divider = ({ align, children }: DividerProps) => {
  const classNames = useClassNames(ComponentToken.Divider);
  const offset = useOffset([align]);
  const theme = useTheme();

  const styled = {
    divider: stylex.props(
      styles.divider,
      !!children
        ? styles.withChildren(theme.colors[ColorToken.OutlineVariant], offset)
        : styles.outline(theme.colors[ColorToken.OutlineVariant])
    ),
    label: stylex.props(BODY.small, styles.label),
  };

  return (
    <div className={clsx(styled.divider.className, classNames[DividerClassToken.Divider])} style={styled.divider.style}>
      {!!children && (
        <span className={clsx(styled.label.className, classNames[DividerClassToken.Label])} style={styled.label.style}>
          {children}
        </span>
      )}
    </div>
  );
};

export default Divider;
