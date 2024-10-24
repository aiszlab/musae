import { isUndefined, useEvent } from "@aiszlab/relax";
import React, { KeyboardEvent, useMemo } from "react";
import { IconButton } from "../components/icon-button";
import stylex from "@stylexjs/stylex";
import { spacing } from "../components/theme/tokens.stylex";
import { Close } from "musae/icons";
import { Keyboard } from "../utils/keyboard";

export type Closable = "esc" | "overlay" | "close";

const styles = stylex.create({
  static: {},

  "top-right": {
    ":not(#\\#)": {
      top: spacing.xxxsmall,
      right: spacing.xxxsmall,
      position: "absolute",
    },
  },
});

/**
 * @description
 * for dialog, close means some events or some elements
 * in musae, we use a hook to handle this
 *
 * by default, closable may be different type, like `false` | ['esc'] | undefined
 * resolve these types, we convert to `Set<Closable>`
 */
export const useClosable = ({
  onClose,
  closable,
  placement = "static",
}: {
  onClose?: VoidFunction;
  closable: boolean | Closable[];
  placement?: "static" | "top-right";
}) => {
  // convert closable to enum sets
  const triggers = useMemo<Set<Closable>>(() => {
    if (isUndefined(closable) || closable === true) {
      return new Set(["close", "esc", "overlay"]);
    }
    return new Set(closable || []);
  }, [closable]);

  // closer react element for dialog
  const closer = useMemo(() => {
    if (!triggers.has("close")) return null;

    const styled = stylex.props(styles[placement]);

    return (
      <IconButton
        variant="text"
        onClick={onClose}
        className={styled.className}
        style={styled.style}
      >
        <Close />
      </IconButton>
    );
  }, [triggers, onClose, placement]);

  /// overlay click callback
  const onOverlayClick = useEvent(() => {
    if (!triggers.has("overlay")) return;
    onClose?.();
  });

  /// esc key press callback
  const onKeyDown = useEvent((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== Keyboard.Escape) return;
    onClose?.();
  });

  return {
    closer,
    onOverlayClick,
    onKeyDown,
  };
};
