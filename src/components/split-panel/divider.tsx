import styles from "./styles";
import React, { useContext } from "react";
import { props as $props } from "@stylexjs/stylex";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { useTheme } from "../theme";
import { useDraggable, useEvent } from "@aiszlab/relax";
import { DividerProps } from "../../types/split-panel";
import { useDrag } from "@aiszlab/relax";
import { RequiredTo } from "@aiszlab/relax/types";

const Divider = ({ onDragMove, onDragEnd }: DividerProps) => {
  const { classNames, orientation } = useContext(Context);
  const theme = useTheme();
  const [draggerRef] = useDraggable<HTMLDivElement>({
    onDragMove: useEvent<RequiredTo<RequiredTo<Parameters<typeof useDrag>["0"]>["onDragMove"]>>(
      ({ movementX, movementY }) =>
        onDragMove(orientation === "horizontal" ? movementX : movementY),
    ),
    onDragEnd,
  });

  const styled = {
    divider: $props(styles.divider.base, styles.divider[orientation]),
    dragger: $props(styles.dragger.base, styles.dragger[orientation]),
  };

  return (
    <div
      className={stringify(classNames.divider, styled.divider.className)}
      style={{
        ...styled.divider.style,
        "--color-outline": theme.colors.outline,
        "--color-outline-variant": theme.colors["outline-variant"],
      }}
    >
      <div
        className={stringify(classNames.dragger, styled.dragger.className)}
        style={styled.dragger.style}
        ref={draggerRef}
      />
    </div>
  );
};

export default Divider;
