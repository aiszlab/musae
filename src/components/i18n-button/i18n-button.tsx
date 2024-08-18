import React, { useRef, type Key } from "react";
import { Translate } from "../icon/icons";
import { Button } from "../button";
import { Popover, type PopoverRef } from "../popover";
import { useLocales } from "./hooks";
import { Menu } from "../menu";
import type { I18nButtonProps } from "./types";
import { useEvent } from "@aiszlab/relax";
import type { LocaleCode } from "../../locale/types";

const I18nButton = ({ onChange, variant }: I18nButtonProps) => {
  const { selections, locales, localeCode } = useLocales();
  const popoverRef = useRef<PopoverRef>(null);

  const change = useEvent((value: Key) => {
    popoverRef.current?.close();
    onChange?.(locales.get(value as LocaleCode));
  });

  return (
    <Popover
      ref={popoverRef}
      triggerBy="click"
      content={<Menu selectedKeys={[localeCode]} items={selections} onClick={change} />}
    >
      <Button shape="circular" variant={variant}>
        <Translate />
      </Button>
    </Popover>
  );
};

export default I18nButton;
