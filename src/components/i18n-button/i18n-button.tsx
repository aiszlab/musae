import React, { useRef, type Key } from "react";
import { Translate } from "../icon/icons";
import { Popover, type PopoverRef } from "../popover";
import { useLocales } from "./hooks";
import { Menu } from "../menu";
import type { I18nButtonProps } from "../../types/i18n-button";
import { useEvent } from "@aiszlab/relax";
import type { LocaleCode } from "../../types/locale";
import { useClassNames } from "../../hooks/use-class-names";
import { IconButton } from "../icon-button";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";

const I18nButton = ({ onChange, variant, className, style, size }: I18nButtonProps) => {
  const { selections, locales, localeCode } = useLocales();
  const popoverRef = useRef<PopoverRef>(null);
  const classNames = useClassNames(CLASS_NAMES);

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
        className={stringify(classNames.i18nButton, className)}
        style={style}
        size={size}
      >
        <Translate />
      </IconButton>
    </Popover>
  );
};

export default I18nButton;
