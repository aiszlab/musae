import React, { useContext } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { type TrackProps } from "src/types/slider";
import { isUndefined } from "@aiszlab/relax";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";

const _styles = $create({
  default: {
    width: "100%",
    height: "100%",
  },

  flexible: {
    flex: 1,
  },

  sized: {
    width: "var(--size)",
  },
});

const Track = ({ size = 0 }: TrackProps) => {
  const isSized = !isUndefined(size);
  const { classNames } = useContext(Context);
  const styled = $props(_styles.default, !isSized ? _styles.flexible : {});

  return (
    <div
      className={stringify(classNames.track, styled.className)}
      style={{
        ...styled.style,
        "--size": `${size}px`,
      }}
    />
  );
};

export default Track;
