import React, { type CSSProperties } from "react";
import stylex from "@stylexjs/stylex";
import type { LinearProps } from "musae/types/progress";
import { useClassNames } from "../../hooks/use-class-names";
import { ProgressClassToken } from "../../utils/class-name";
import { clsx } from "@aiszlab/relax";
import { sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useValue } from "./hooks";

const styles = stylex.create({
  progress: (props: { color: CSSProperties["backgroundColor"] }) => ({
    width: sizes.full,
    height: sizes.xxxxxsmall,
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
  const classNames = useClassNames("progress");
  const theme = useTheme();
  const { value } = useValue({ value: _value });

  const styled = {
    progress: stylex.props(styles.progress({ color: theme.colors["primary-container"] })),
    segment: stylex.props(styles.segment({ flex: value, color: theme.colors.primary })),
  };

  return (
    <div
      className={clsx(
        classNames[ProgressClassToken.Progress],
        className,
        styled.progress.className,
      )}
      style={{
        ...styled.progress.style,
        ...style,
      }}
    >
      <div
        className={clsx(classNames[ProgressClassToken.Segment], styled.segment.className)}
        style={styled.segment.style}
      />
    </div>
  );
};

export default Linear;
