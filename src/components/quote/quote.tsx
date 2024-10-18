import React from "react";
import { QuoteProps } from "musae/types/quote";
import { useClassNames } from "../../hooks/use-class-names";
import { clsx } from "@aiszlab/relax";
import { QuoteClassToken } from "../../utils/class-name";
import styles from "./styles";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";

const Quote = ({ className, children, style }: QuoteProps) => {
  const classNames = useClassNames("quote");
  const theme = useTheme();

  const styled = stylex.props(
    styles.variables({
      outlineColor: theme.colors["outline-variant"],
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
