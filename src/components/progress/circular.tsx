import React from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { sizes } from "../theme/tokens.stylex";
import type { CircularProps } from "../../types/progress";
import { useCircular, useValue } from "./hooks";

const styles = $create({
  progress: {
    transform: "rotate(-90deg)",
  },

  shape: {
    r: "var(--radius)",
    cx: `calc(var(--radius) + (${sizes.xxxxxxxxxsmall} / 2))`,
    cy: `calc(var(--radius) + (${sizes.xxxxxxxxxsmall} / 2))`,
    strokeWidth: sizes.xxxxxxxxxsmall,
    strokeLinecap: "round",
  },

  segment: {
    strokeDasharray: "var(--segment-perimeter) var(--segment-perimeter)",
    strokeDashoffset: "var(--segment-offset)",
  },
});

const Circular = ({ value: _value }: CircularProps) => {
  const theme = useTheme();
  const radius = 22;

  const { value } = useValue({ value: _value });
  const { segmentPerimeter, segmentOffset, segmentRef } = useCircular({
    value,
  });

  const styled = {
    progress: $props(styles.progress),
    segment: $props(styles.shape, styles.segment),
    track: $props(styles.shape),
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
