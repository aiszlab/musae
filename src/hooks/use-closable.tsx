import { isUndefined, useEvent } from "@aiszlab/relax";
import React, { KeyboardEvent, useMemo } from "react";
import { Button } from "../components/button";
import stylex from "@stylexjs/stylex";
import { spacing } from "../components/theme/tokens.stylex";
import { Close } from "../components/icon/icons";
import { Keyboard } from "../utils/keyboard";

export type Closable = "esc" | "overlay" | "close";

const styles = stylex.create({
  closer: {
    top: spacing.large,
    right: spacing.large,
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
export const useClosable = ({ onClose, closable }: { onClose?: VoidFunction; closable: boolean | Closable[] }) => {
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

    const styled = stylex.props(styles.closer);

    return (
      <Button
        shape="circular"
        variant="text"
        prefix={<Close />}
        onClick={onClose}
        className={styled.className}
        style={{
          ...styled.style,
          position: "absolute",
        }}
        size="small"
      />
    );
  }, [triggers, onClose]);

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
