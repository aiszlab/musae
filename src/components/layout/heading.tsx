import styles from "./styles";
import React, { useContext } from "react";
import { props as $props } from "@stylexjs/stylex";
import { HeadingProps } from "../../types/layout";
import { stringify } from "@aiszlab/relax/class-name";
import Context from "./context";

const Heading = ({ children, className, style }: HeadingProps) => {
  const { classNames } = useContext(Context);

  const styled = {
    heading: $props(styles.heading.heading.default),
  };

  return (
    <div
      role="heading"
      className={stringify(classNames.heading, className, styled.heading.className)}
      style={{ ...styled.heading.style, ...style }}
    >
      {children}
    </div>
  );
};

export default Heading;
