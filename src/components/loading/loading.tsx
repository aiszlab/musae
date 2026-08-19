import styles from "./styles";
import React from "react";
import { props as $props } from "@stylexjs/stylex";
import type { LoadingProps } from "../../types/loading";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";

const Loading = ({
  size = "medium",
  overlay = true,
  children,
  className,
  style,
  loading = true,
}: LoadingProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const circles = {
    top: {
      ...$props(styles.circle, styles.top),
      cx: "120",
      cy: "120",
      r: "105",
    },
    bottom: {
      ...$props(styles.circle, styles.bottom),
      cx: "120",
      cy: "120",
      r: "35",
    },
    left: {
      ...$props(styles.circle, styles.left),
      cx: "85",
      cy: "120",
      r: "70",
    },
    right: {
      ...$props(styles.circle, styles.right),
      cx: "155",
      cy: "120",
      r: "70",
    },
  };

  const styled = {
    loading: $props(styles.loading),
    spin: $props(styles.spin),
    spinning: $props(styles[size]),
    content: $props(loading && overlay && styles.overlay),
  };

  return (
    <div
      className={stringify(classNames.loading, styled.loading.className)}
      style={styled.loading.style}
    >
      {loading && (
        <div
          className={stringify(classNames.spin, styled.spin.className)}
          style={styled.spin.style}
        >
          <svg
            viewBox="0 0 240 240"
            className={stringify(classNames.spinning, styled.spinning.className)}
            style={styled.spinning.style}
          >
            {Array.from(Object.entries(circles)).map(([key, props]) => {
              return <circle {...props} key={key} />;
            })}
          </svg>
        </div>
      )}

      <div
        className={stringify(classNames.content, className, styled.content.className)}
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
