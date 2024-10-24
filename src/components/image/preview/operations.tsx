import React, { useContext, type CSSProperties } from "react";
import stylex from "@stylexjs/stylex";
import { Close, KeyboardArrowLeft, KeyboardArrowRight } from "musae/icons";
import { Portal } from "../../portal";
import { spacing, positions, sizes } from "../../theme/tokens.stylex";
import { useTheme } from "../../theme";
import type { OperationsProps } from "musae/types/image";
import { useHandlers } from "../hooks";
import PreviewGroupContext from "./context";
import { IconButton } from "../../icon-button";

const styles = stylex.create({
  operations: {
    position: "fixed",
    zIndex: positions.image,
  },

  closer: {
    ":not(#\\#)": {
      top: spacing.xxlarge,
      right: spacing.xxlarge,
      position: "fixed",
    },
  },

  navigations: {
    position: "fixed",
    left: 0,
    right: 0,
    top: "50%",
    paddingInline: spacing.medium,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  footer: (props: { color: CSSProperties["color"] }) => ({
    position: "fixed",
    left: 0,
    right: 0,
    bottom: spacing.xxlarge,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: props.color,
  }),

  handlers: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    display: "flex",
    flexDirection: "row",
    gap: spacing.xxxsmall,
    alignItems: "center",
    backgroundColor: props.backgroundColor,
    borderRadius: sizes.infinity,
    paddingInline: spacing.xlarge,
    paddingBlock: spacing.xxxsmall,
  }),
});

const Operations = ({
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
    navigations: stylex.props(styles.navigations),
    footer: stylex.props(styles.footer({ color: theme.colors["on-surface"] })),
    handlers: stylex.props(styles.handlers({ backgroundColor: theme.colors.surface })),
  };

  const handlers = useHandlers({
    onFlipX,
    onFlipY,
    onRotateLeft,
    onRotateRight,
    onZoomIn,
    onZoomOut,
  });

  const { onSwitchLeft, onSwitchRight, total = 1 } = useContext(PreviewGroupContext) ?? {};
  const isMultiple = total > 1;

  return (
    <Portal lockable>
      <div className={styled.operations.className} style={styled.operations.style}>
        <IconButton
          className={styled.closer.className}
          style={{
            ...styled.closer.style,
            position: "fixed",
          }}
          variant="text"
          onClick={onClose}
        >
          <Close size={32} />
        </IconButton>

        {/* navigations */}
        {isMultiple && (
          <div className={styled.navigations.className} style={styled.navigations.style}>
            <IconButton variant="text" onClick={onSwitchLeft} disabled={!onSwitchLeft}>
              <KeyboardArrowLeft size={32} />
            </IconButton>

            <IconButton variant="text" onClick={onSwitchRight} disabled={!onSwitchRight}>
              <KeyboardArrowRight size={32} />
            </IconButton>
          </div>
        )}

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
