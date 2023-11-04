import React, { useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";
import { PopupProps } from "./types";
import { Space } from "../space";
import { Button } from "../button";

enum ClassName {
  Dialog = "dialog",
  Mask = "drawer-mask",
  Panel = "drawer-panel",
  Header = "drawer-header",
  Body = "drawer-body",
  Footer = "footer",
}

/**
 * @description
 * class names
 */
export const useClassNames = () => {
  const { prefix } = useContext(Context);

  return useMemo(
    () => ({
      dialog: withPrefix(prefix, ClassName.Dialog),
      mask: withPrefix(prefix, ClassName.Mask),
      panel: withPrefix(prefix, ClassName.Panel),
      header: withPrefix(prefix, ClassName.Header),
      body: withPrefix(prefix, ClassName.Body),
      footer: withPrefix(prefix, ClassName.Footer),
    }),
    [prefix]
  );
};

/**
 * @description
 * footer
 */
export const useFooter = ([footer, onConfirm, onCancel]: [
  footer: PopupProps["footer"],
  onConfirm: PopupProps["onConfirm"],
  onCancel: PopupProps["onCancel"]
]) => {
  return useMemo(() => {
    return (
      footer ?? (
        <Space>
          <Button onClick={onCancel} color="secondary" variant="text">
            取消
          </Button>
          <Button onClick={onConfirm} variant="text">
            确认
          </Button>
        </Space>
      )
    );
  }, [footer, onConfirm, onCancel]);
};
