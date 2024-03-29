import React, { CSSProperties, FC, createElement, useMemo } from "react";
import { useTimeout } from "@aiszlab/relax";
import type { MessageProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { elevations, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { type IconProps } from "../icon";
import { Cancel, CheckCircle } from "../icon/icons";
import { typography } from "../theme/theme";
import { motion } from "framer-motion";

const SIGNALS = new Map<MessageProps["type"], FC<IconProps>>([
  ["success", CheckCircle],
  ["error", Cancel],
]);

const styles = stylex.create({
  message: (props: { backgroundColor: CSSProperties["backgroundColor"]; color: CSSProperties["color"] }) => ({
    marginBlock: spacing.small,
    paddingBlock: spacing.small,
    paddingInline: spacing.medium,
    borderRadius: sizes.xxxsmall,
    boxShadow: elevations.xsmall,
    display: "flex",
    alignItems: "flex-start",
    columnGap: spacing.xsmall,
    maxWidth: sizes.full,
    pointerEvents: "auto",

    backgroundColor: props.backgroundColor,
    color: props.color,
  }),

  content: {
    display: "inline-block",
    wordBreak: "break-word",
  },
});

const Message = ({ duration = 3000, type, onClose, children }: MessageProps) => {
  const theme = useTheme();

  useTimeout(() => {
    onClose?.();
  }, duration);

  const colors = useMemo(
    () => ({
      success: theme.colors[ColorToken.Primary],
      error: theme.colors[ColorToken.Error],
    }),
    [theme]
  );

  const styled = {
    message: stylex.props(
      styles.message({
        backgroundColor: theme.colors[ColorToken.OnPrimary],
        color: theme.colors[ColorToken.OnPrimaryContainer],
      })
    ),
    content: stylex.props(typography.body.medium, styles.content),
  };

  return (
    <motion.div
      className={styled.message.className}
      style={styled.message.style}
      initial={{
        y: "-100%",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "-100%",
        opacity: 0,
      }}
    >
      {/* icon */}
      {SIGNALS.get(type) &&
        createElement(SIGNALS.get(type)!, {
          color: colors[type as keyof typeof colors],
        })}

      {/* content */}
      <span {...styled.content}>{children}</span>
    </motion.div>
  );
};

export default Message;
