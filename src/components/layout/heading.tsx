import React, { useContext } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { HeadingProps } from "../../types/layout";
import { stringify } from "@aiszlab/relax/class-name";
import Context from "./context";

const styles = {
  heading: $create({
    default: {
      gridArea: "heading",
      paddingInline: spacing.xxxxlarge,
      fontWeight: 700,

      display: "flex",
      alignItems: "center",
      gap: spacing.xxsmall,
      overflow: "hidden",
      whiteSpace: "nowrap",

      borderWidth: sizes.none,
      borderRightWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline-variant)",
    },
  }),
};

const Heading = ({ children, className, style }: HeadingProps) => {
  const { classNames } = useContext(Context);

  const styled = {
    heading: $props(styles.heading.default),
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
