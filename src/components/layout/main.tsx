import styles from "./styles";
import type { MainProps } from "../../types/layout";
import { props as $props } from "@stylexjs/stylex";
import React, { useContext } from "react";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";

const Main = ({ children, className, style }: MainProps) => {
  const { classNames } = useContext(Context);

  const styled = {
    main: $props(styles.main.default),
  };

  return (
    <main
      className={stringify(classNames.main, className, styled.main.className)}
      style={{
        ...styled.main.style,
        ...style,
      }}
    >
      {children}
    </main>
  );
};

export default Main;
