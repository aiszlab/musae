import React from "react";
import { QuoteProps } from "./types";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken } from "../../utils/component-token";
import { clsx } from "@aiszlab/relax";
import { QuoteClassToken } from "../../utils/class-name";
import styles from "./styles";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { typography } from "../theme/theme";

const Quote = ({ className, children, style }: QuoteProps) => {
  const classNames = useClassNames(ComponentToken.Quote);
  const theme = useTheme();

  const styled = stylex.props(
    styles.variables({
      outlineColor: theme.colors[ColorToken.Outline],
    }),
    styles.quote,
    typography.body.small,
  );

  return (
    <blockquote
      className={clsx(classNames[QuoteClassToken.Quote], className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
    >
      <span>{children}</span>
    </blockquote>
  );
};

export default Quote;