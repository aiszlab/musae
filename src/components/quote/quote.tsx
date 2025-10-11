import React from "react";
import { QuoteProps } from "../../types/quote";
import { stringify } from "@aiszlab/relax/class-name";
import styles from "./styles";
import { props as $props } from "@stylexjs/stylex";
import { CLASS_NAMES } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { $body } from "../theme/theme";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

const Quote = ({ className, children, style }: QuoteProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const themeColorVars = useThemeColorVars(["outline-variant"]);

  const styled = $props(styles.quote, $body.small);

  return (
    <blockquote
      className={stringify(classNames.quote, className, styled.className)}
      style={{
        ...styled.style,
        ...style,
        ...themeColorVars,
      }}
    >
      <span>{children}</span>
    </blockquote>
  );
};

export default Quote;
