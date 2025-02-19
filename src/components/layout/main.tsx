import type { MainProps } from "../../types/layout";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import React, { useContext } from "react";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";

const styles = {
  main: stylex.create({
    default: {
      gridArea: "main",
      overflow: "auto",
      padding: spacing.xxxxxlarge,

      borderWidth: sizes.none,
      borderTopWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline-variant)",
    },
  }),
};

const Main = ({ children, className, style }: MainProps) => {
  const { classNames } = useContext(Context);

  const styled = {
    main: stylex.props(styles.main.default),
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
