import React, { useContext } from "react";
import type { FooterProps } from "../../types/layout";
import Context from "./context";
import stylex from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { spacing } from "../theme/tokens.stylex";

const styles = {
  footer: stylex.create({
    default: {
      gridArea: "footer",
      paddingInline: spacing.xxxxxlarge,
    },
  }),
};

const Footer = ({ children, className, style }: FooterProps) => {
  const { classNames } = useContext(Context);

  const styled = {
    footer: stylex.props(styles.footer.default),
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
