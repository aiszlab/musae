import React from "react";
import { QuoteProps } from "../../types/quote";
import { stringify } from "@aiszlab/relax/class-name";
import styles from "./styles";
import { props as $props } from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { CLASS_NAMES } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { $body } from "../theme/theme";

const Quote = ({ className, children, style }: QuoteProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const theme = useTheme();

  const styled = $props(
    styles.variables({
      outlineColor: theme.colors["outline-variant"],
    }),
    styles.quote,
    $body.small,
  );

  return (
    <blockquote
      className={stringify(classNames.quote, className, styled.className)}
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
