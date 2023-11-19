import React, { useCallback, useMemo, useRef, type ReactNode, useContext } from "react";
import { Picker, type PickerRef } from "../picker";
import { Chip } from "../chip";
import { useOptions, useValue } from "./hooks";
import { Menu, type MenuProps } from "../menu";
import type { CascaderProps } from "./types";
import { Context } from "../config";
import { CascaderClassToken, ComponentToken } from "../../utils/class-name";

const Cascader = ({ mode, separator = "/", ...props }: CascaderProps) => {
  const ref = useRef<PickerRef>(null);
  const close = useCallback(() => ref.current?.close(), []);
  const classNames = useContext(Context).classNames[ComponentToken.Cascader];

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
        <Chip size="small" key={_value}>
          {optionables.reverse().at(0)?.label}
        </Chip>
      ));
    }

    // default display value
    return [...values.values()]
      .at(0)
      ?.map(({ label }) => label)
      .join(` ${separator} `);
  }, [mode, values, separator]);

  /// options render
  const menus = useMemo(() => {
    return [presetedMenuItems, ...additionalMenusItems].map((menuItems, index) => {
      return <Menu items={menuItems} key={index} onClick={onChange as MenuProps["onClick"]} />;
    });
  }, [additionalMenusItems, onChange, presetedMenuItems]);

  return <Picker ref={ref} selections={inputed} options={menus} className={classNames[CascaderClassToken.Cascader]} />;
};

export default Cascader;
