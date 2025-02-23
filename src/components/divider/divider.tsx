import type { DividerProps } from "../../types/divider";
import React from "react";
import { useOffset } from "./hooks";
import { useClassNames } from "../../hooks/use-class-names";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { stringify } from "@aiszlab/relax/class-name";
import { useGutters } from "../../hooks/use-gutters";
import { CLASS_NAMES } from "./context";

const styles = {
  divider: stylex.create({
    horizontal: {
      width: sizes.full,
      marginBlockStart: "var(--margin-start)",
      marginBlockEnd: "var(--margin-end)",
    },

    vertical: {
      minHeight: sizes.xxxxsmall,
      maxHeight: sizes.full,
      marginInlineStart: "var(--margin-start)",
      marginInlineEnd: "var(--margin-end)",
      alignSelf: "stretch",
    },
  }),

  simple: stylex.create({
    horizontal: {
      height: sizes.smallest,
      backgroundColor: "var(--color-outline-variant)",
    },

    vertical: {
      width: sizes.smallest,
      backgroundColor: "var(--color-outline-variant)",
    },
  }),

  labeled: stylex.create({
    horizontal: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",

      "::before": {
        height: sizes.smallest,
        width: "var(--offset)",
        backgroundColor: "var(--color-outline-variant)",
        content: "''",
      },

      "::after": {
        height: sizes.smallest,
        width: "calc(100% - var(--offset))",
        backgroundColor: "var(--color-outline-variant)",
        content: "''",
      },
    },

    vertical: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",

      "::before": {
        width: sizes.smallest,
        height: "var(--offset)",
        backgroundColor: "var(--color-outline-variant)",
        content: "''",
      },

      "::after": {
        width: sizes.smallest,
        height: "calc(100% - var(--offset))",
        backgroundColor: "var(--color-outline-variant)",
        content: "''",
      },
    },
  }),

  label: stylex.create({
    horizontal: {
      marginInline: spacing.xxsmall,
      whiteSpace: "nowrap",
    },

    vertical: {
      marginBlock: spacing.xxsmall,
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
  const classNames = useClassNames(CLASS_NAMES);
  const offset = useOffset({ align });
  const theme = useTheme();
  const margins = useGutters({ gutter: margin });

  // only in horizontal, divider will be labeled
  const isLabeled = !!children && orientation === "horizontal";

  const styled = {
    divider: stylex.props(
      styles.divider[orientation],
      !isLabeled && styles.simple[orientation],
      isLabeled && styles.labeled[orientation],
    ),
    label: stylex.props(styles.label[orientation], typography.body.small),
  };

  return (
    <div
      className={stringify(classNames.divider, className, styled.divider.className)}
      style={{
        ...styled.divider.style,
        ...style,
        // @ts-expect-error style vars
        "--offset": `${offset}%`,
        "--color-outline-variant": theme.colors["outline-variant"],
        "--margin-start": margins[0],
        "--margin-end": margins[1],
      }}
    >
      {isLabeled && (
        <span
          className={stringify(classNames.label, styled.label.className)}
          style={styled.label.style}
        >
          {children}
        </span>
      )}
    </div>
  );
};

export default Divider;
