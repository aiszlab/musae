import React, { useMemo } from "react";
import type { PopupProps } from "../../types/dialog";
import { Space } from "../space";
import { Button } from "../button";
import { useLocale } from "../../locale";

/**
 * @description
 * footer
 */
export const useFooter = ({
  footer,
  onConfirm,
  onClose,
  confirm,
  cancel,
}: {
  footer: PopupProps["footer"];
  onConfirm: PopupProps["onConfirm"];
  onClose: PopupProps["onClose"];
  confirm: PopupProps["confirm"];
  cancel: PopupProps["cancel"];
}) => {
  const [locale] = useLocale("dialog");

  return useMemo(() => {
    return (
      footer ?? (
        <Space>
          <Button onClick={onConfirm} variant="text" children={locale.confirm} {...confirm} />
          <Button
            onClick={onClose}
            color="secondary"
            variant="text"
            children={locale.cancel}
            {...cancel}
          />
        </Space>
      )
    );
  }, [footer, onConfirm, onClose, locale, confirm]);
};
