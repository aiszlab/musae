import styles from "./styles";
import React, { useContext } from "react";
import { props as $props } from "@stylexjs/stylex";
import { IconClose, IconKeyboardArrowLeft, IconKeyboardArrowRight } from "../../icon/icons";
import { Portal } from "../../portal";
import { useTheme } from "../../theme";
import type { OperationsProps } from "../../../types/image";
import { useHandlers } from "../hooks";
import PreviewGroupContext from "./context";
import { IconButton } from "../../icon-button";

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
    operations: $props(styles.operations.default),
    closer: $props(styles.operations.closer),
    navigations: $props(styles.operations.navigations),
    footer: $props(styles.operations.footer),
    handlers: $props(styles.operations.handlers),
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
    <Portal modal>
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
          <IconClose size={32} />
        </IconButton>

        {/* navigations */}
        {isMultiple && (
          <div className={styled.navigations.className} style={styled.navigations.style}>
            <IconButton variant="text" onClick={onSwitchLeft} disabled={!onSwitchLeft}>
              <IconKeyboardArrowLeft size={32} />
            </IconButton>

            <IconButton variant="text" onClick={onSwitchRight} disabled={!onSwitchRight}>
              <IconKeyboardArrowRight size={32} />
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
