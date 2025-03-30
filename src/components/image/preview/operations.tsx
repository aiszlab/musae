import React, { useContext, type CSSProperties } from "react";
import { $create, $props } from "../../../utils/styles";
import { Close, KeyboardArrowLeft, KeyboardArrowRight } from "../../icon/icons";
import { Portal } from "../../portal";
import { spacing, positions, sizes } from "../../theme/tokens.stylex";
import { useTheme } from "../../theme";
import type { OperationsProps } from "../../../types/image";
import { useHandlers } from "../hooks";
import PreviewGroupContext from "./context";
import { IconButton } from "../../icon-button";

const styles = $create({
  operations: {
    position: "fixed",
    zIndex: positions.image,
  },

  closer: {
    ":not(#\\#)": {
      top: spacing.xxxxlarge,
      right: spacing.xxxxlarge,
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
    bottom: spacing.xxxxlarge,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: props.color,
  }),

  handlers: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    display: "flex",
    flexDirection: "row",
    gap: spacing.xxxxxsmall,
    alignItems: "center",
    backgroundColor: props.backgroundColor,
    borderRadius: sizes.infinity,
    paddingInline: spacing.xxlarge,
    paddingBlock: spacing.xxxxxsmall,
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
    operations: $props(styles.operations),
    closer: $props(styles.closer),
    navigations: $props(styles.navigations),
    footer: $props(styles.footer({ color: theme.colors["on-surface"] })),
    handlers: $props(styles.handlers({ backgroundColor: theme.colors.surface })),
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
