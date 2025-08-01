import React, { useState } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { useClassNames } from "src/hooks/use-class-names";
import Context, { CLASS_NAMES } from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import Track from "./track";
import Handle from "./handle";
import { useDrag } from "@aiszlab/relax";

const _styles = $create({
  default: {
    display: "flex",
    flexDirection: "row",
    gap: sizes.xxxxxxxxsmall,
  },
});

const Slider = () => {
  const classNames = useClassNames(CLASS_NAMES);
  const styled = $props(_styles.default);
  const [offset, setOffset] = useState(0);

  const {} = useDrag();

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
