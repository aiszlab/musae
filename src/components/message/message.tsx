import React, { CSSProperties, FC, createElement } from "react";
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
  message: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    marginBlock: spacing.small,
    paddingBlock: spacing.small,
    paddingInline: spacing.medium,
    borderRadius: 6,
    backgroundColor: props.backgroundColor,
    boxShadow: elevations.xsmall,

    display: "flex",
    alignItems: "flex-start",
    columnGap: spacing.xsmall,
    maxWidth: sizes.full,
    pointerEvents: "auto",
  }),

  content: {
    display: "inline-block",
    wordBreak: "break-word",
  },
});

const Message = ({ duration = 60000000, type, onClose, children }: MessageProps) => {
  const theme = useTheme();

  useTimeout(() => {
    onClose?.();
  }, duration);

  const color =
    type === "success" ? theme.colors[ColorToken.Primary] : "error" ? theme.colors[ColorToken.Error] : void 0;
  const styled = {
    message: stylex.props(
      styles.message({
        backgroundColor: theme.colors[ColorToken.OnPrimary],
      })
    ),
    content: stylex.props(typography.body.medium, styles.content),
  };

  return (
    <motion.div
      {...styled.message}
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
          color,
        })}

      {/* content */}
      <span {...styled.content}>{children}</span>
    </motion.div>
  );
};

export default Message;
