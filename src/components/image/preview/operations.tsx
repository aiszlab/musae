import React, { type CSSProperties } from "react";
import stylex from "@stylexjs/stylex";
import { Cancel } from "../../icon/icons";
import { Portal } from "../../portal";
import { spacing, positions } from "../../theme/tokens.stylex";
import { useTheme } from "../../theme";
import { ColorToken } from "../../../utils/colors";
import type { OperationsProps } from "../types";
import { useHandlers } from "../hooks";

const styles = stylex.create({
  operations: {
    position: "fixed",
    zIndex: positions.high,
  },

  closer: {
    position: "fixed",
    top: spacing.xxlarge,
    right: spacing.xxlarge,
    zIndex: positions.higher,
  },

  footer: (props: { color: CSSProperties["color"] }) => ({
    position: "fixed",
    left: 0,
    right: 0,
    bottom: spacing.xxlarge,
    zIndex: positions.higher,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: props.color,
  }),

  handlers: {
    display: "flex",
    flexDirection: "row",
    gap: spacing.xxsmall,
    alignItems: "center",
  },
});

const Operations = ({
  onSwitchLeft,
  onSwitchRight,
  onClose,
  onZoomIn,
  onZoomOut,
  onRotateRight,
  onRotateLeft,
  onFlipX,
  onFlipY,
}: OperationsProps) => {
  const theme = useTheme();
  const styled = {
    operations: stylex.props(styles.operations),
    closer: stylex.props(styles.closer),
    footer: stylex.props(styles.footer({ color: theme.colors[ColorToken.OnSurface] })),
    handlers: stylex.props(styles.handlers),
  };

  const handlers = useHandlers({
    onFlipX,
    onFlipY,
    onRotateLeft,
    onRotateRight,
    onZoomIn,
    onZoomOut,
  });

  return (
    <Portal open>
      <div className={styled.operations.className} style={styled.operations.style}>
        <div className={styled.closer.className} style={styled.closer.style} onClick={onClose}>
          <Cancel />
        </div>

        {/* footer */}
        <div className={styled.footer.className} style={styled.footer.style}>
          <div className={styled.handlers.className} style={styled.handlers.style}>
            {handlers}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Operations;
