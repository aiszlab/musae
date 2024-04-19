import stylex from "@stylexjs/stylex";
import React, { CSSProperties, useEffect } from "react";
import { usePresence } from "framer-motion";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  notification: (props: { background: CSSProperties["backgroundColor"]; color: CSSProperties["color"] }) => ({
    backgroundColor: props.background,
    color: props.color,
  }),
});

const Notification = () => {
  const theme = useTheme();
  const [isPresent, safeToRemove] = usePresence();
  const styled = stylex.props(
    styles.notification({
      background: theme.colors[ColorToken.SurfaceContainer],
      color: theme.colors[ColorToken.OnSurface],
    })
  );

  useEffect(() => {
    if (isPresent) {
      const enter = () => {};
      enter();
      return;
    }

    const exit = () => {
      safeToRemove?.();
    };
    exit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent]);

  return (
    <div className={styled.className} style={styled.style}>
      展示消息
    </div>
  );
};

export default Notification;
