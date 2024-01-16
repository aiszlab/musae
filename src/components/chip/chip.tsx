import React, { CSSProperties } from "react";
import clsx from "clsx";
import type { ChipProps } from "./types";
import { useClassNames } from "../config";
import { ChipClassToken, ComponentToken } from "../../utils/class-name";
import { stylex } from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { LABEL } from "../theme/theme";
import { ColorToken } from "../../utils/colors";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  chip: (backgroundColor: CSSProperties["backgroundColor"], color: CSSProperties["color"]) => ({
    backgroundColor,
    color,
  }),

  small: {
    paddingInline: spacing.small,
    paddingBlock: spacing.xxsmall,
    borderRadius: spacing.xxsmall,
  },

  large: {
    paddingInline: spacing.large,
    paddingBlock: spacing.small,
    borderRadius: spacing.small,
  },
});

const Chip = ({ children, size = "large", ...props }: ChipProps) => {
  const classNames = useClassNames(ComponentToken.Chip);
  const theme = useTheme();

  const styled = stylex.props(
    LABEL.large,
    styles.chip(theme.colors[ColorToken.PrimaryContainer], theme.colors[ColorToken.OnPrimaryContainer]),
    styles[size]
  );

  return (
    <span
      className={clsx([classNames[ChipClassToken.Chip], props.className, styled.className])}
      style={{
        ...styled.style,
        ...props.style,
      }}
    >
      {children}
    </span>
  );
};

export default Chip;
