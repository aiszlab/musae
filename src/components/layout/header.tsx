import styles from "./styles";
import type { HeaderProps } from "../../types/layout";
import React, { useContext } from "react";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import Context from "./context";

const Header = ({ className, style, children }: HeaderProps) => {
  const { classNames } = useContext(Context);
  const styled = {
    header: $props(styles.header.default),
  };

  return (
    <header
      className={stringify(classNames.header, className, styled.header.className)}
      style={{
        ...styled.header.style,
        ...style,
      }}
    >
      {children}
    </header>
  );
};

export default Header;
