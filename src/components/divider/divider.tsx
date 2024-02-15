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
  horizontal: {
    width: "100%",
  },

  vertical: {
    height: "100%",
  },

  horizontalLabeled: (props: { backgroundColor: CSSProperties["backgroundColor"]; offset: number }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    "::before": {
      height: 1,
      width: `${props.offset}%`,
      backgroundColor: props.backgroundColor,
      content: "''",
    },

    "::after": {
      height: 1,
      width: `${100 - props.offset}%`,
      backgroundColor: props.backgroundColor,
      content: "''",
    },
  }),

  verticalLabeled: (props: { backgroundColor: CSSProperties["backgroundColor"]; offset: number }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    "::before": {
      width: 1,
      height: `${props.offset}%`,
      backgroundColor: props.backgroundColor,
      content: "''",
    },

    "::after": {
      width: 1,
      height: `${100 - props.offset}%`,
      backgroundColor: props.backgroundColor,
      content: "''",
    },
  }),

  horizontalUnlabeled: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    height: 1,
    backgroundColor: props.backgroundColor,
  }),

  verticalUnlabeled: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    width: 1,
    backgroundColor: props.backgroundColor,
  }),

  horizontalLabel: {
    marginInline: spacing.small,
    whiteSpace: "nowrap",
  },

  verticalLabel: {
    marginBlock: spacing.small,
    whiteSpace: "nowrap",
  },
});

const Divider = ({ align, children, type = "horizontal" }: DividerProps) => {
  const classNames = useClassNames(ComponentToken.Divider);
  const offset = useOffset([align]);
  const theme = useTheme();

  const styled = {
    divider: stylex.props(
      styles[type],
      !!children
        ? styles[type === "horizontal" ? "horizontalLabeled" : "verticalLabeled"]({
            backgroundColor: theme.colors[ColorToken.OutlineVariant],
            offset,
          })
        : styles[type === "horizontal" ? "horizontalUnlabeled" : "verticalUnlabeled"]({
            backgroundColor: theme.colors[ColorToken.OutlineVariant],
          })
    ),
    label: stylex.props(BODY.small, styles[type === "horizontal" ? "horizontalLabel" : "verticalLabel"]),
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
