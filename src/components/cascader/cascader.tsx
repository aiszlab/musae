import React, { useCallback, useMemo, useRef, type ReactNode } from "react";
import { Picker } from "../picker";
import { Tag } from "../tag";
import { useOptions, useValue } from "./hooks";
import { Menu } from "../menu";
import { useClassNames } from "../../hooks/use-class-names";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { spacing } from "../theme/tokens.stylex";
import type { MenuProps } from "../../types/menu";
import type { PickerRef } from "../../types/picker";
import type { CascaderProps } from "../../types/cascader";
import { CLASS_NAMES } from "./context";

const styles = $create({
  options: {
    display: "flex",
    columnGap: spacing.xxxxxsmall,
    marginInline: spacing.xxxxxsmall,
  },
});

const Cascader = ({ mode, separator = "/", options = [], ...props }: CascaderProps) => {
  const ref = useRef<PickerRef>(null);
  const close = useCallback(() => ref.current?.close(), []);
  const classNames = useClassNames(CLASS_NAMES);

  const {
    readableOptions,
    readablePaths,
    additionalMenusItems,
    presetedMenuItems,
    setAdditionalMenusItems,
  } = useOptions([options]);
  const { values, onChange } = useValue([
    props.value,
    readableOptions,
    readablePaths,
    mode,
    close,
    setAdditionalMenusItems,
  ]);

  // inputde value
  const inputed = useMemo<ReactNode>(() => {
    // multiple value
    if (mode === "multiple") {
      return [...values.entries()].map(([_value, optionables]) => (
        <Tag size="small" key={_value}>
          {optionables.at(optionables.length - 1)?.label}
        </Tag>
      ));
    }

    // default display value
    return [...values.values()]
      .at(0)
      ?.map(({ label }) => label)
      .join(` ${separator} `);
  }, [mode, values, separator]);

  // options render
  const menus = useMemo(() => {
    const styled = $props(styles.options);

    return (
      <div className={stringify(classNames.options, styled.className)} style={styled.style}>
        {[presetedMenuItems, ...additionalMenusItems].map((menuItems, index) => {
          return <Menu items={menuItems} key={index} onClick={onChange as MenuProps["onClick"]} />;
        })}
      </div>
    );
  }, [additionalMenusItems, classNames, onChange, presetedMenuItems]);

  return (
    <Picker ref={ref} pickable={menus} className={classNames.cascader} popupWidth={false}>
      {inputed}
    </Picker>
  );
};

export default Cascader;
