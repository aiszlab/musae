import styles from "./styles";
import { props as $props } from "@stylexjs/stylex";
import { useContext } from "react";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import React from "react";

/**
 * @description 滑块句柄
 */
const Handle = () => {
  const { classNames } = useContext(Context);
  const styled = $props(styles.handle.base);

  return <div className={stringify(classNames.handle, styled.className)} style={styled.style} />;
};

export default Handle;
