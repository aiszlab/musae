import styles from "./styles";
import React, { useContext } from "react";
import { props as $props } from "@stylexjs/stylex";
import { useTheme } from "../theme";
import type { CircularProps } from "../../types/progress";
import { useCircular, useValue } from "./hooks";
import { stringify } from "@aiszlab/relax/class-name";
import Context from "./context";

const Circular = ({
  min = 0,
  max = 100,
  value = min,
  className,
  style,
  height,
  thickness,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: CircularProps) => {
  const { classNames } = useContext(Context);
  const theme = useTheme();
  const strokeWidth = thickness ?? 4;
  const strokeWidthValue = typeof strokeWidth === "number" ? `${strokeWidth}px` : strokeWidth;

  const { value: clampedValue, percentage } = useValue({ value, min, max });
  const { segmentPerimeter, segmentOffset, segmentRef } = useCircular({
    value: percentage,
  });

  const styled = {
    progress: $props(styles.circular.progress),
    segment: $props(styles.circular.shape, styles.circular.segment),
    track: $props(styles.circular.shape),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height ?? "48"}
      height={height ?? "48"}
      viewBox="0 0 48 48"
      fill="none"
      className={stringify(classNames.progress, styled.progress.className, className)}
      style={{
        ...styled.progress.style,
        ...style,
        "--radius": `calc(24px - (${strokeWidthValue} / 2))`,
        "--stroke-width": strokeWidthValue,
        "--segment-perimeter": segmentPerimeter,
        "--segment-offset": segmentOffset,
      }}
      role="progressbar"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-valuemin={min}
      aria-valuemax={Math.max(min, max)}
      aria-valuenow={clampedValue}
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
