import React, { type CSSProperties, type FC, createElement, useMemo, useEffect } from "react";
import { useTimeout } from "@aiszlab/relax";
import type { MessageProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { elevations, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { type IconProps } from "../icon";
import { Cancel, CheckCircle } from "../icon/icons";
import { typography } from "../theme/theme";
import { useAnimate, usePresence } from "framer-motion";

const SIGNALS = new Map<MessageProps["type"], FC<IconProps>>([
  ["success", CheckCircle],
  ["error", Cancel],
]);

const styles = stylex.create({
  message: (props: { backgroundColor: CSSProperties["backgroundColor"]; color: CSSProperties["color"] }) => ({
    paddingBlock: spacing.small,
    paddingInline: spacing.medium,
    borderRadius: sizes.xxxsmall,
    boxShadow: elevations.xsmall,
    display: "flex",
    alignItems: "flex-start",
    columnGap: spacing.xsmall,
    maxWidth: sizes.full,
    pointerEvents: "all",
    overflow: "hidden",

    backgroundColor: props.backgroundColor,
    color: props.color,

    transform: "translateY(-100%)",
    opacity: 0,
    marginTop: 0,
  }),

  content: {
    display: "inline-block",
    wordBreak: "break-word",
  },
});

const Message = ({ duration = 3000, type, onClose, children }: MessageProps) => {
  const theme = useTheme();
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const [isPresent, safeToRemove] = usePresence();

  /// after duration, message will auto destory
  useTimeout(async () => {
    await animate(scope.current, { opacity: 0, marginTop: scope.current.getBoundingClientRect().height * -1 });
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

  useEffect(() => {
    if (!isPresent) {
      safeToRemove();
      return;
    }

    // appear animation
    animate(scope.current, { opacity: 1, transform: "translateY(0px)" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent]);

  return (
    <div className={styled.message.className} style={styled.message.style} ref={scope}>
      {/* icon */}
      {SIGNALS.get(type) &&
        createElement(SIGNALS.get(type)!, {
          color: colors[type as keyof typeof colors],
        })}

      {/* content */}
      <span {...styled.content}>{children}</span>
    </div>
  );
};

export default Message;
