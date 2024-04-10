import { isUndefined, useEvent } from "@aiszlab/relax";
import React, { KeyboardEvent, useMemo } from "react";
import { Button } from "../components/button";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../components/theme/tokens.stylex";
import { Close } from "../components/icon/icons";
import { Keyboard } from "../utils/keyboard";

export type Dismissable = "esc" | "mask" | "close";

const styles = stylex.create({
  closer: {
    position: "absolute",
    top: spacing.large,
    right: spacing.large,
  },
});

/**
 * @description
 * for dialog, dismiss means some events or some elements
 * in musae, we use a hook to handle this
 *
 * by default, dismissable may be different type, like `false` | ['esc'] | undefined
 * resolve these types, we convert to `Set<Dismissable>`
 */
export const useDismissable = (props: { onClose?: VoidFunction; dismissable: boolean | Dismissable[] }) => {
  const dismissable = useMemo<Set<Dismissable>>(() => {
    if (isUndefined(props.dismissable) || props.dismissable === true) {
      return new Set(["close", "esc", "mask"]);
    }
    return new Set(props.dismissable || []);
  }, [props.dismissable]);

  /// closer for dialog
  const closer = useMemo(() => {
    if (!dismissable.has("close")) return null;

    return (
      <Button
        shape="circular"
        variant="text"
        prefix={<Close />}
        onClick={props.onClose}
        style={styles.closer}
        size="small"
      />
    );
  }, [dismissable, props.onClose]);

  /// mask click callback
  const onMaskClick = useEvent(() => {
    if (!dismissable.has("mask")) return;
    props.onClose?.();
  });

  /// esc key press callback
  const onKeyDown = useEvent((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== Keyboard.Escape) return;
    props.onClose?.();
  });

  return {
    closer,
    onMaskClick,
    onKeyDown,
  };
};
