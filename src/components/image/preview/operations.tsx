import React, { useContext } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
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
      top: spacing.xxxxxxlarge,
      right: spacing.xxxxxxlarge,
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

  footer: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: spacing.xxxxxxlarge,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "var(--color-on-surface)",
  },

  handlers: {
    display: "flex",
    flexDirection: "row",
    gap: spacing.xxxxxsmall,
    alignItems: "center",
    backgroundColor: "var(--color-surface)",
    borderRadius: sizes.infinity,
    paddingInline: spacing.xxxlarge,
    paddingBlock: spacing.xxxxxsmall,
  },
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
    footer: $props(styles.footer),
    handlers: $props(styles.handlers),
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
      <div
        className={styled.operations.className}
        style={{
          ...styled.operations.style,
          "--color-surface": theme.colors.surface,
          "--color-on-surface": theme.colors["on-surface"],
        }}
      >
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
