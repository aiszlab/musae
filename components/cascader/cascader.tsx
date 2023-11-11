import React, { useCallback, useMemo, useRef, type ReactNode } from "react";
import { Chooser, useClassNames as useChooserClassNames, type ChooserRef } from "../chooser";
import { Chip } from "../chip";
import { useOptions, useValue } from "./hooks";
import { Menu, type MenuProps } from "../menu";
import type { CascaderProps } from "./types";

const Cascader = ({ mode, separator = "/", ...props }: CascaderProps) => {
  const ref = useRef<ChooserRef>(null);
  const close = useCallback(() => ref.current?.close(), []);
  const chooserClassNames = useChooserClassNames();

  const { readableOptions, readablePaths, additionalMenusItems, presetedMenuItems, setAdditionalMenusItems } =
    useOptions([props.options]);
  const { values, onChange } = useValue([
    props.value,
    readableOptions,
    readablePaths,
    mode,
    close,
    setAdditionalMenusItems,
  ]);

  /// inputde value
  const inputed = useMemo<ReactNode>(() => {
    // multiple value
    if (mode === "multiple") {
      return [...values.entries()].map(([_value, optionables]) => (
        <Chip size="small" key={_value} className={chooserClassNames.chosenItem}>
          {optionables.reverse().at(0)?.label}
        </Chip>
      ));
    }

    // default display value
    return [...values.values()]
      .at(0)
      ?.map(({ label }) => label)
      .join(` ${separator} `);
  }, [mode, values, separator, chooserClassNames.chosenItem]);

  /// options render
  const menus = useMemo(() => {
    return [presetedMenuItems, ...additionalMenusItems].map((menuItems, index) => {
      return <Menu items={menuItems} key={index} onClick={onChange as MenuProps["onClick"]} />;
    });
  }, [additionalMenusItems, onChange, presetedMenuItems]);

  return <Chooser ref={ref} selections={inputed} options={menus} />;
};

export default Cascader;
