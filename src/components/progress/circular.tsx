import React from "react";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { sizes } from "../theme/tokens.stylex";
import type { CircularProps } from "../../types/progress";
import { useCircular, useValue } from "./hooks";

const styles = stylex.create({
  progress: {
    transform: "rotate(-90deg)",
  },

  shape: (props: { radius: number }) => ({
    r: props.radius,
    cx: `calc(${props.radius}px + (${sizes.xxxxxxxsmall} / 2))`,
    cy: `calc(${props.radius}px + (${sizes.xxxxxxxsmall} / 2))`,
    strokeWidth: sizes.xxxxxxxsmall,
    strokeLinecap: "round",
  }),

  segment: (props: { perimeter: number; offset: number }) => ({
    strokeDasharray: `${props.perimeter} ${props.perimeter}`,
    strokeDashoffset: props.offset,
  }),
});

const Circular = ({ value: _value }: CircularProps) => {
  const theme = useTheme();
  const radius = 22;

  const { value } = useValue({ value: _value });
  const { segmentPerimeter, segmentOffset, segmentRef } = useCircular({
    value,
  });

  const styled = {
    progress: stylex.props(styles.progress),
    segment: stylex.props(
      styles.shape({ radius }),
      styles.segment({ perimeter: segmentPerimeter, offset: segmentOffset }),
    ),
    track: stylex.props(styles.shape({ radius })),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={styled.progress.className}
      style={styled.progress.style}
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
