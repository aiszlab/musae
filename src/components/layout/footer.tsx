import styles from "./styles";
import React, { useContext } from "react";
import type { FooterProps } from "../../types/layout";
import Context from "./context";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";

const Footer = ({ children, className, style }: FooterProps) => {
  const { classNames } = useContext(Context);

  const styled = {
    footer: $props(styles.footer.base),
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
