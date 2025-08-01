import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { useContext } from "react";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import React from "react";

const _styles = $create({
  default: {
    width: sizes.xxxxxxxxsmall,
    height: sizes.xxlarge,
    borderRadius: sizes.infinity,
    backgroundColor: "var(--color-primary)",
  },
});

/**
 * @description 滑块句柄
 */
const Handle = () => {
  const { classNames } = useContext(Context);
  const styled = $props(_styles.default);

  return <div className={stringify(classNames.handle, styled.className)} style={styled.style} />;
};

export default Handle;
