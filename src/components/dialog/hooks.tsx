import React, { useMemo } from "react";
import type { PopupProps } from "musae/types/dialog";
import { Space } from "../space";
import { Button } from "../button";
import { useLocale } from "../../locale";

/**
 * @description
 * footer
 */
export const useFooter = ([footer, onConfirm, onClose]: [
  footer: PopupProps["footer"],
  onConfirm: PopupProps["onConfirm"],
  onClose: PopupProps["onClose"],
]) => {
  const [locale] = useLocale("dialog");

  return useMemo(() => {
    return (
      footer ?? (
        <Space>
          <Button onClick={onConfirm} variant="text">
            {locale.confirm}
          </Button>
          <Button onClick={onClose} color="secondary" variant="text">
            {locale.cancel}
          </Button>
        </Space>
      )
    );
  }, [footer, onConfirm, onClose, locale]);
};
