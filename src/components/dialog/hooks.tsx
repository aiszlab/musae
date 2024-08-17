import React, { useMemo } from "react";
import type { PopupProps } from "./types";
import { Space } from "../space";
import { Button } from "../button";
import { useLocale } from "../../locale";
import { ComponentToken } from "../../utils/component-token";

/**
 * @description
 * footer
 */
export const useFooter = ([footer, onConfirm, onClose]: [
  footer: PopupProps["footer"],
  onConfirm: PopupProps["onConfirm"],
  onClose: PopupProps["onClose"],
]) => {
  const locale = useLocale(ComponentToken.Dialog);

  return useMemo(() => {
    return (
      footer ?? (
        <Space>
          <Button onClick={onClose} color="secondary" variant="text">
            {locale.confirm}
          </Button>
          <Button onClick={onConfirm} variant="text">
            {locale.cancel}
          </Button>
        </Space>
      )
    );
  }, [footer, onConfirm, onClose, locale]);
};
