import React, { ReactNode, useContext } from "react";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  default: {
    flexBasis: "calc(var(--basis) - 10px)",
    flexGrow: 0,
  },
});

const Panel = ({ children }: { children?: ReactNode }) => {
  const { classNames, count } = useContext(Context);

  const styled = {
    default: stylex.props(styles.default),
  };

  return (
    <div
      className={stringify(classNames.panel, styled.default.className)}
      style={{
        ...styled.default.style,
        // @ts-expect-error
        "--basis": `${100 / count}%`,
      }}
    >
      {children}
    </div>
  );
};

export default Panel;
