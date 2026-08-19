import styles from "./styles";
import React, { useContext } from "react";
import { props as $props } from "@stylexjs/stylex";
import { type TrackProps } from "../../types/slider";
import { isUndefined } from "@aiszlab/relax";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";

const Track = ({ size = 0 }: TrackProps) => {
  const isSized = !isUndefined(size);
  const { classNames } = useContext(Context);
  const styled = $props(styles.track.default, !isSized ? styles.track.flexible : {});

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
