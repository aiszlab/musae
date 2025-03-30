import React from "react";
import { QuoteProps } from "../../types/quote";
import { stringify } from "@aiszlab/relax/class-name";
import styles from "./styles";
import { $props } from "../../utils/styles";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { CLASS_NAMES } from "./context";
import { useClassNames } from "../../hooks/use-class-names";

const Quote = ({ className, children, style }: QuoteProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const theme = useTheme();

  const styled = $props(
    styles.variables({
      outlineColor: theme.colors["outline-variant"],
    }),
    styles.quote,
    typography.body.small,
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
