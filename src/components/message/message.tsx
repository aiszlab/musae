import React, { CSSProperties, FC, createElement } from "react";
import { useTimeout } from "@aiszlab/relax";
import type { MessageProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { elevations, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { Cancel, CheckCircle, type IconProps } from "../icon";

const appear = stylex.keyframes({
  from: {
    transform: "translateY(-100%)",
    opacity: 0,
  },

  to: {
    transform: "translateY(0)",
    opacity: 1,
  },
});

const SIGNALS = new Map<MessageProps["type"], FC<IconProps>>([
  ["success", CheckCircle],
  ["error", Cancel],
]);

const styles = stylex.create({
  message: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    marginBlock: spacing.small,
    paddingBlock: spacing.small,
    paddingInline: spacing.medium,
    borderRadius: 6,
    backgroundColor: props.backgroundColor,
    boxShadow: elevations.xsmall,
    animationName: appear,
    animationDuration: 50,
    animationTimingFunction: "linear",
  }),
});

const Message = ({ duration = 3000, type, onClose }: MessageProps) => {
  const theme = useTheme();

  useTimeout(
    () => {
      onClose?.();
    },
    {
      duration,
    }
  );

  return (
    <div
      {...stylex.props(
        styles.message({
          backgroundColor: theme.colors[ColorToken.OnPrimary],
        })
      )}
    >
      {SIGNALS.get(type) && createElement(SIGNALS.get(type)!, {})}
      {type}
    </div>
  );
};

export default Message;
