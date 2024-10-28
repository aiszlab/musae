import React from "react";
import stylex from "@stylexjs/stylex";
import type { LoadingProps } from "musae/types/loading";
import { positions, sizes } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { LoadingClassToken } from "../../utils/class-name";
import { stringify } from "@aiszlab/relax/class-name";

const top = stylex.keyframes({
  from: {
    strokeDasharray: "0 660",
    strokeWidth: 20,
    strokeDashoffset: "-330",
  },

  "4%": {
    strokeDasharray: "0 660",
    strokeWidth: 20,
    strokeDashoffset: "-330",
  },

  "12%": {
    strokeDasharray: "60 600",
    strokeWidth: 30,
    strokeDashoffset: "-335",
  },

  "32%": {
    strokeDasharray: "60 600",
    strokeWidth: 30,
    strokeDashoffset: "-595",
  },

  "40%": {
    strokeDasharray: "0 660",
    strokeWidth: 20,
    strokeDashoffset: "-660",
  },

  "54%": {
    strokeDasharray: "0 660",
    strokeWidth: 20,
    strokeDashoffset: "-660",
  },

  "62%": {
    strokeDasharray: "60 600",
    strokeWidth: 30,
    strokeDashoffset: "-665",
  },

  "82%": {
    strokeDasharray: "60 600",
    strokeWidth: 30,
    strokeDashoffset: "-925",
  },

  "90%": {
    strokeDasharray: "0 660",
    strokeWidth: 20,
    strokeDashoffset: "-990",
  },

  to: {
    strokeDasharray: "0 660",
    strokeWidth: 20,
    strokeDashoffset: "-990",
  },
});

const bottom = stylex.keyframes({
  from: {
    strokeDasharray: "0 220",
    strokeWidth: 20,
    strokeDashoffset: "-110",
  },

  "12%": {
    strokeDasharray: "0 220",
    strokeWidth: 20,
    strokeDashoffset: "-110",
  },

  "20%": {
    strokeDasharray: "20 200",
    strokeWidth: 30,
    strokeDashoffset: "-115",
  },

  "40%": {
    strokeDasharray: "20 200",
    strokeWidth: 30,
    strokeDashoffset: "-195",
  },

  "48%": {
    strokeDasharray: "0 220",
    strokeWidth: 20,
    strokeDashoffset: "-220",
  },

  "62%": {
    strokeDasharray: "0 220",
    strokeWidth: 20,
    strokeDashoffset: "-220",
  },

  "70%": {
    strokeDasharray: "20 200",
    strokeWidth: 30,
    strokeDashoffset: "-225",
  },

  "90%": {
    strokeDasharray: "20 200",
    strokeWidth: 30,
    strokeDashoffset: "-305",
  },

  "98%": {
    strokeDasharray: "0 220",
    strokeWidth: 20,
    strokeDashoffset: "-330",
  },

  to: {
    strokeDasharray: "0 220",
    strokeWidth: 20,
    strokeDashoffset: "-330",
  },
});

const left = stylex.keyframes({
  from: {
    strokeDasharray: "0 440",
    strokeWidth: 20,
    strokeDashoffset: "0",
  },

  "8%": {
    strokeDasharray: "40 400",
    strokeWidth: 30,
    strokeDashoffset: "-5",
  },

  "28%": {
    strokeDasharray: "40 400",
    strokeWidth: 30,
    strokeDashoffset: "-175",
  },

  "36%": {
    strokeDasharray: "0 440",
    strokeWidth: 20,
    strokeDashoffset: "-220",
  },

  "58%": {
    strokeDasharray: "0 440",
    strokeWidth: 20,
    strokeDashoffset: "-220",
  },

  "66%": {
    strokeDasharray: "40 400",
    strokeWidth: 30,
    strokeDashoffset: "-225",
  },

  "86%": {
    strokeDasharray: "40 400",
    strokeWidth: 30,
    strokeDashoffset: "-395",
  },

  "94%": {
    strokeDasharray: "0 440",
    strokeWidth: 20,
    strokeDashoffset: "-440",
  },

  to: {
    strokeDasharray: "0 440",
    strokeWidth: 20,
    strokeDashoffset: "-440",
  },
});

const right = stylex.keyframes({
  from: {
    strokeDasharray: "0 440",
    strokeWidth: 20,
    strokeDashoffset: "0",
  },

  "8%": {
    strokeDasharray: "0 440",
    strokeWidth: 20,
    strokeDashoffset: "0",
  },

  "16%": {
    strokeDasharray: "40 400",
    strokeWidth: 30,
    strokeDashoffset: "-5",
  },

  "36%": {
    strokeDasharray: "40 400",
    strokeWidth: 30,
    strokeDashoffset: "-175",
  },

  "44%": {
    strokeDasharray: "0 440",
    strokeWidth: 20,
    strokeDashoffset: "-220",
  },

  "50%": {
    strokeDasharray: "0 440",
    strokeWidth: 20,
    strokeDashoffset: "-220",
  },

  "58%": {
    strokeDasharray: "40 400",
    strokeWidth: 30,
    strokeDashoffset: "-225",
  },

  "78%": {
    strokeDasharray: "40 400",
    strokeWidth: 30,
    strokeDashoffset: "-395",
  },

  "86%": {
    strokeDasharray: "0 440",
    strokeWidth: 20,
    strokeDashoffset: "-440",
  },

  to: {
    strokeDasharray: "0 440",
    strokeWidth: 20,
    strokeDashoffset: "-440",
  },
});

const styles = stylex.create({
  circle: {
    animationDuration: "2s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    fill: "none",
    strokeLinecap: "round",
  },

  top: {
    animationName: top,
    stroke: "#f42f25",
  },

  bottom: {
    animationName: bottom,
    stroke: "#f49725",
  },

  left: {
    animationName: left,
    stroke: "#255ff4",
  },

  right: {
    animationName: right,
    stroke: "#f42582",
  },

  small: {
    width: sizes.xlarge,
    height: sizes.xlarge,
  },

  medium: {
    width: sizes.xxlarge,
    height: sizes.xxlarge,
  },

  large: {
    width: sizes.xxxlarge,
    height: sizes.xxxlarge,
  },

  loading: {
    position: "relative",
    minWidth: sizes.xxxxlarge,
    minHeight: sizes.xxxxlarge,
  },

  spin: {
    position: "absolute",
    width: sizes.full,
    height: sizes.full,
    insetBlockStart: 0,
    insetInlineStart: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: positions.min,
  },

  overlay: {
    opacity: 0.5,
    userSelect: "none",
    pointerEvents: "none",
    transitionProperty: "opacity",
    transitionDuration: "0.3s",
  },
});

const Loading = ({
  size = "medium",
  overlay = true,
  children,
  className,
  style,
  loading = true,
}: LoadingProps) => {
  const classNames = useClassNames("loading");
  const circles = {
    top: {
      ...stylex.props(styles.circle, styles.top),
      cx: "120",
      cy: "120",
      r: "105",
    },
    bottom: {
      ...stylex.props(styles.circle, styles.bottom),
      cx: "120",
      cy: "120",
      r: "35",
    },
    left: {
      ...stylex.props(styles.circle, styles.left),
      cx: "85",
      cy: "120",
      r: "70",
    },
    right: {
      ...stylex.props(styles.circle, styles.right),
      cx: "155",
      cy: "120",
      r: "70",
    },
  };

  const styled = {
    loading: stylex.props(styles.loading),
    spin: stylex.props(styles.spin),
    spinning: stylex.props(styles[size]),
    content: stylex.props(loading && overlay && styles.overlay),
  };

  return (
    <div
      className={stringify(classNames[LoadingClassToken.Loading], styled.loading.className)}
      style={styled.loading.style}
    >
      {loading && (
        <div
          className={stringify(classNames[LoadingClassToken.Spin], styled.spin.className)}
          style={styled.spin.style}
        >
          <svg
            viewBox="0 0 240 240"
            className={stringify(classNames[LoadingClassToken.Spinning], styled.spinning.className)}
            style={styled.spinning.style}
          >
            {Array.from(Object.entries(circles)).map(([key, props]) => {
              return <circle {...props} key={key} />;
            })}
          </svg>
        </div>
      )}

      <div
        className={stringify(
          classNames[LoadingClassToken.Content],
          className,
          styled.content.className,
        )}
        style={{
          ...styled.content.style,
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Loading;
