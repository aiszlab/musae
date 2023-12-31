import React, { useCallback, useMemo, useRef, type ReactNode, useContext } from "react";
import { Picker, type PickerRef } from "../picker";
import { Chip } from "../chip";
import { useOptions, useValue } from "./hooks";
import { Menu, type MenuProps } from "../menu";
import type { CascaderProps } from "./types";
import { Context } from "../config";
import { CascaderClassToken, ComponentToken } from "../../utils/class-name";
import { StyledOptions } from "./styled";

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
          {optionables.at(optionables.length - 1)?.label}
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
    return (
      <StyledOptions className={classNames[CascaderClassToken.Options]}>
        {[presetedMenuItems, ...additionalMenusItems].map((menuItems, index) => {
          return <Menu items={menuItems} key={index} onClick={onChange as MenuProps["onClick"]} />;
        })}
      </StyledOptions>
    );
  }, [additionalMenusItems, classNames, onChange, presetedMenuItems]);

  return (
    <Picker
      ref={ref}
      picked={inputed}
      pickable={menus}
      className={classNames[CascaderClassToken.Cascader]}
      popupWidth={false}
    />
  );
};

export default Cascader;
