import React, { useContext } from "react";
import type { FooterProps } from "../../types/layout";
import Context from "./context";
import { $create, $props } from "../../utils/styles";
import { stringify } from "@aiszlab/relax/class-name";
import { spacing } from "../theme/tokens.stylex";

const styles = {
  footer: $create({
    default: {
      gridArea: "footer",
      paddingInline: spacing.xxxxxlarge,
    },
  }),
};

const Footer = ({ children, className, style }: FooterProps) => {
  const { classNames } = useContext(Context);

  const styled = {
    footer: $props(styles.footer.default),
  };

  return (
    <footer
      className={stringify(classNames.footer, className, styled.footer.className)}
      style={{
        ...styled.footer.style,
        ...style,
      }}
    >
      {children}
    </footer>
  );
};

export default Footer;
