import React, { useContext, type CSSProperties } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import type { LinearProps } from "../../types/progress";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useValue } from "./hooks";
import Context from "./context";

const styles = $create({
  progress: (props: { color: CSSProperties["backgroundColor"] }) => ({
    width: sizes.full,
    height: sizes.xxxxxxxxxsmall,
    backgroundColor: props.color,
    borderRadius: sizes.infinity,
  }),

  segment: (props: { flex: number; color: CSSProperties["backgroundColor"] }) => ({
    width: `${props.flex}%`,
    height: sizes.full,
    borderRadius: sizes.infinity,
    backgroundColor: props.color,
  }),
});

const Linear = ({ value: _value, className, style }: LinearProps) => {
  const { classNames } = useContext(Context);
  const theme = useTheme();
  const { value } = useValue({ value: _value });

  const styled = {
    progress: $props(styles.progress({ color: theme.colors["primary-container"] })),
    segment: $props(styles.segment({ flex: value, color: theme.colors.primary })),
  };

  return (
    <div
      className={stringify(classNames.progress, className, styled.progress.className)}
      style={{
        ...styled.progress.style,
        ...style,
      }}
    >
      <div
        className={stringify(classNames.segment, styled.segment.className)}
        style={styled.segment.style}
      />
    </div>
  );
};

export default Linear;
