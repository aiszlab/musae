import React, { KeyboardEvent, useMemo } from "react";
import { Dismissable, PopupProps } from "./types";
import { Space } from "../space";
import { Button } from "../button";
import { isUndefined, useEvent } from "@aiszlab/relax";
import { Close } from "../icon";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  closer: {
    position: "absolute",
    top: spacing.xxsmall,
    right: spacing.xxsmall,
  },
});

/**
 * @description
 * footer
 */
export const useFooter = ([footer, onConfirm, onClose]: [
  footer: PopupProps["footer"],
  onConfirm: PopupProps["onConfirm"],
  onClose: PopupProps["onClose"]
]) => {
  return useMemo(() => {
    return (
      footer ?? (
        <Space>
          <Button onClick={onClose} color="secondary" variant="text">
            取消
          </Button>
          <Button onClick={onConfirm} variant="text">
            确认
          </Button>
        </Space>
      )
    );
  }, [footer, onConfirm, onClose]);
};

/**
 * @description
 * for dialog, dismiss means some events or some elements
 * in musae, we use a hook to handle this
 *
 * by default, dismissable may be different type, like `false` | ['esc'] | undefined
 * resolve these types, we convert to `Set<Dismissable>`
 */
export const useDismissable = (props: Pick<PopupProps, "dismissable" | "onClose">) => {
  const dismissable = useMemo<Set<Dismissable>>(() => {
    if (isUndefined(props.dismissable) || props.dismissable === true) {
      return new Set(["close", "esc", "mask"]);
    }
    return new Set(props.dismissable || []);
  }, [props.dismissable]);

  /// closer for dialog
  const closer = useMemo(() => {
    if (!dismissable.has("close")) return null;

    const styled = stylex.props(styles.closer);
    return (
      <Button
        shape="circle"
        prefix={<Close />}
        className={styled.className}
        style={styled.style}
        onClick={props.onClose}
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
    if (e.key !== "Escape") return;
    props.onClose?.();
  });

  return {
    closer,
    onMaskClick,
    onKeyDown,
  };
};
