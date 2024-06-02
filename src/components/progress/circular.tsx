import React, { useRef } from "react";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { sizes } from "../theme/tokens.stylex";
import { CircularProps } from "./types";

const styles = stylex.create({
  indicators: {
    r: 22,
    cx: 24,
    cy: 24,
    strokeWidth: sizes.xxxxxsmall,
    strokeLinecap: "round",
  },

  segment: (props: { length: number; percent: number }) => ({
    strokeDasharray: `${props.length} ${props.length}`,
    strokeDashoffset: (props.length * (100 - props.percent)) / 100,
  }),

  track: (props: { length: number; percent: number }) => ({
    strokeDasharray: `${props.length} ${props.length}`,
    strokeDashoffset: ((props.length * props.percent) / 100) * -1,
  }),
});

const Circular = ({ value, className, style }: CircularProps) => {
  const theme = useTheme();
  const segmentRef = useRef<SVGCircleElement>(null);
  const trackRef = useRef<SVGCircleElement>(null);

  const styled = {
    segment: stylex.props(
      styles.indicators,
      styles.segment({ length: segmentRef.current?.getTotalLength() ?? 0, percent: value })
    ),
    track: stylex.props(
      styles.indicators,
      styles.track({ length: trackRef.current?.getTotalLength() ?? 0, percent: value })
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      style={{
        transform: "rotate(-90deg);",
      }}
    >
      <circle
        ref={segmentRef}
        className={styled.segment.className}
        style={styled.segment.style}
        stroke={theme.colors[ColorToken.Primary]}
      />
      <circle
        ref={trackRef}
        className={styled.track.className}
        style={styled.track.style}
        stroke={theme.colors[ColorToken.PrimaryContainer]}
      />
    </svg>
  );
};

export default Circular;
