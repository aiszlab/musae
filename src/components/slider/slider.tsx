import styles from "./styles";
import React, { useState } from "react";
import { props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import Context, { CLASS_NAMES } from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import Track from "./track";
import Handle from "./handle";

const Slider = () => {
  const classNames = useClassNames(CLASS_NAMES);
  const styled = $props(styles.slider.default);
  const [offset] = useState(0);

  // const {} = useDrag();

  return (
    <Context.Provider value={{ classNames }}>
      <div className={stringify(classNames.slider, styled.className)}>
        <Track size={offset} />
        <Handle />
        <Track />
      </div>
    </Context.Provider>
  );
};

export default Slider;
