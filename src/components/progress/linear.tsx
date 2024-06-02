import React, { CSSProperties } from "react";
import stylex from "@stylexjs/stylex";
import { LinearProps } from "./types";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, ProgressClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  progress: {
    width: sizes.full,
    height: sizes.xxxxxsmall,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xxsmall,
  },

  segment: (props: { flex: number; color: CSSProperties["backgroundColor"] }) => ({
    flex: props.flex,
    height: sizes.full,
    borderRadius: sizes.infinity,
    backgroundColor: props.color,
  }),

  track: (props: { flex: number; color: CSSProperties["backgroundColor"] }) => ({
    flex: props.flex,
    backgroundColor: props.color,
    height: sizes.full,
    borderRadius: sizes.infinity,
    position: "relative",
  }),

  stop: (props: { color: CSSProperties["backgroundColor"] }) => ({
    position: "absolute",
    insetInlineEnd: 0,
    width: sizes.xxxxxsmall,
    height: sizes.xxxxxsmall,
    backgroundColor: props.color,
    borderRadius: sizes.infinity,
  }),
});

const Linear = ({ value, className, style }: LinearProps) => {
  const classNames = useClassNames(ComponentToken.Progress);
  const theme = useTheme();
  const isMin = value === 0;
  const isMax = value === 100;

  const styled = {
    progress: stylex.props(styles.progress),
    segment: stylex.props(styles.segment({ flex: value, color: theme.colors[ColorToken.Primary] })),
    track: stylex.props(styles.track({ flex: 100 - value - 10, color: theme.colors[ColorToken.PrimaryContainer] })),
    stop: stylex.props(styles.stop({ color: theme.colors[ColorToken.Primary] })),
  };

  return (
    <div
      className={clsx(classNames[ProgressClassToken.Progress], className, styled.progress.className)}
      style={{
        ...styled.progress.style,
        ...style,
      }}
    >
      {!isMin && (
        <div
          className={clsx(classNames[ProgressClassToken.Segment], styled.segment.className)}
          style={styled.segment.style}
        />
      )}

      {!isMax && (
        <div className={clsx(classNames[ProgressClassToken.Track], styled.track.className)} style={styled.track.style}>
          <div className={clsx(classNames[ProgressClassToken.Stop], styled.stop.className)} style={styled.stop.style} />
        </div>
      )}
    </div>
  );
};

export default Linear;
