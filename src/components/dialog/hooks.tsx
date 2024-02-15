import React, { useMemo } from "react";
import { PopupProps } from "./types";
import { Space } from "../space";
import { Button } from "../button";

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
