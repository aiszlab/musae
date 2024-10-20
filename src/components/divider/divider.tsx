import type { DividerProps } from "musae/types/divider";
import React, { type CSSProperties } from "react";
import { useOffset } from "./hooks";
import { useClassNames } from "../../hooks/use-class-names";
import { DividerClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { clsx } from "@aiszlab/relax";
import { type Gutters, useGutters } from "../../hooks/use-gutters";

const styles = {
  divider: stylex.create({
    horizontal: (props: { margins: Gutters }) => ({
      width: sizes.full,
      marginBlockStart: props.margins[0],
      marginBlockEnd: props.margins[1],
    }),

    vertical: (props: { margins: Gutters }) => ({
      minHeight: sizes.xxxsmall,
      maxHeight: sizes.full,
      marginInlineStart: props.margins[0],
      marginInlineEnd: props.margins[1],
    }),
  }),

  simple: stylex.create({
    horizontal: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      height: sizes.smallest,
      backgroundColor: props.backgroundColor,
    }),

    vertical: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      width: sizes.smallest,
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

const Divider = ({
  align = "center",
  children,
  orientation = "horizontal",
  className,
  style,
  margin = 0,
}: DividerProps) => {
  const classNames = useClassNames("divider");
  const offset = useOffset({ align });
  const theme = useTheme();
  const margins = useGutters({ gutter: margin });

  // only in horizontal, divider will be labeled
  const isLabeled = !!children && orientation === "horizontal";

  const styled = {
    divider: stylex.props(
      styles.divider[orientation]({ margins }),
      !isLabeled &&
        styles.simple[orientation]({
          backgroundColor: theme.colors["outline-variant"],
        }),
      isLabeled &&
        styles.labeled[orientation]({
          backgroundColor: theme.colors["outline-variant"],
          offset,
        }),
    ),
    label: stylex.props(styles.label[orientation], typography.body.small),
  };

  return (
    <div
      className={clsx(classNames[DividerClassToken.Divider], className, styled.divider.className)}
      style={{
        ...styled.divider.style,
        ...style,
      }}
    >
      {isLabeled && (
        <span
          className={clsx(classNames[DividerClassToken.Label], styled.label.className)}
          style={styled.label.style}
        >
          {children}
        </span>
      )}
    </div>
  );
};

export default Divider;
