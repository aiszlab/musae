import styles from "./styles";
import React from "react";
import { props as $props } from "@stylexjs/stylex";
import { useTheme } from "../theme";
import type { CircularProps } from "../../types/progress";
import { useCircular, useValue } from "./hooks";

const Circular = ({ value: _value }: CircularProps) => {
  const theme = useTheme();
  const radius = 22;

  const { value } = useValue({ value: _value });
  const { segmentPerimeter, segmentOffset, segmentRef } = useCircular({
    value,
  });

  const styled = {
    progress: $props(styles.circular.progress),
    segment: $props(styles.circular.shape, styles.circular.segment),
    track: $props(styles.circular.shape),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={styled.progress.className}
      style={{
        ...styled.progress.style,
        "--radius": `${radius}px`,
        "--segment-perimeter": segmentPerimeter,
        "--segment-offset": segmentOffset,
      }}
    >
      <circle
        className={styled.track.className}
        style={styled.track.style}
        stroke={theme.colors["primary-container"]}
      />

      <circle
        ref={segmentRef}
        className={styled.segment.className}
        style={styled.segment.style}
        stroke={theme.colors.primary}
      />
    </svg>
  );
};

export default Circular;
