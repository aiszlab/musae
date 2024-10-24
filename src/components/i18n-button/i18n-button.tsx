import React, { useRef, type Key } from "react";
import { Translate } from "musae/icons";
import { Popover, type PopoverRef } from "../popover";
import { useLocales } from "./hooks";
import { Menu } from "../menu";
import type { I18nButtonProps } from "musae/types/i18n-button";
import { clsx, useEvent } from "@aiszlab/relax";
import type { LocaleCode } from "musae/types/locale";
import { useClassNames } from "../../hooks/use-class-names";
import { I18nButtonClassToken } from "../../utils/class-name";
import { IconButton } from "../icon-button";

const I18nButton = ({ onChange, variant, className, style, size }: I18nButtonProps) => {
  const { selections, locales, localeCode } = useLocales();
  const popoverRef = useRef<PopoverRef>(null);
  const classNames = useClassNames("i18n-button");

  const change = useEvent(async (value: Key) => {
    await popoverRef.current?.close();
    onChange?.(locales.get(value as LocaleCode));
  });

  return (
    <Popover
      ref={popoverRef}
      triggerBy="click"
      content={<Menu selectedKeys={localeCode} items={selections} onClick={change} />}
      padding={8}
    >
      <IconButton
        variant={variant}
        className={clsx(classNames[I18nButtonClassToken.I18nButton], className)}
        style={style}
        size={size}
      >
        <Translate />
      </IconButton>
    </Popover>
  );
};

export default I18nButton;
