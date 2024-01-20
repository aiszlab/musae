import React, { useCallback, useMemo, useRef, type ReactNode } from "react";
import { Picker, type PickerRef } from "../picker";
import { Chip } from "../chip";
import { useOptions, useValue } from "./hooks";
import { Menu, type MenuProps } from "../menu";
import type { CascaderProps } from "./types";
import { useClassNames } from "../config";
import { CascaderClassToken, ComponentToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import clsx from "clsx";

const styles = stylex.create({
  options: {
    display: "flex",
    columnGap: spacing.xxsmall,
  },
});

const Cascader = ({ mode, separator = "/", ...props }: CascaderProps) => {
  const ref = useRef<PickerRef>(null);
  const close = useCallback(() => ref.current?.close(), []);
  const classNames = useClassNames(ComponentToken.Cascader);

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
    const styled = stylex.props(styles.options);

    return (
      <div className={clsx(styled.className, classNames[CascaderClassToken.Options])} style={styled.style}>
        {[presetedMenuItems, ...additionalMenusItems].map((menuItems, index) => {
          return <Menu items={menuItems} key={index} onClick={onChange as MenuProps["onClick"]} />;
        })}
      </div>
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
