import React, { useCallback, useMemo, useRef, type ReactNode } from "react";
import { Picker } from "../picker";
import { Tag } from "../tag";
import { useOptions, useValue } from "./hooks";
import { Menu } from "../menu";

import { useClassNames } from "../../hooks/use-class-names";
import { CascaderClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import { clsx } from "@aiszlab/relax";
import { spacing } from "../theme/tokens.stylex";
import { ComponentToken } from "../../utils/component-token";

import type { MenuProps } from "musae/types/menu";
import type { PickerRef } from "musae/types/picker";
import type { CascaderProps } from "musae/types/cascader";

const styles = stylex.create({
  options: {
    display: "flex",
    columnGap: spacing.xxsmall,
    marginInline: spacing.xxsmall,
  },
});

const Cascader = ({
  mode,
  separator = "/",
  options = [],
  complex = false,
  ...props
}: CascaderProps) => {
  const ref = useRef<PickerRef>(null);
  const close = useCallback(() => ref.current?.close(), []);
  const classNames = useClassNames(ComponentToken.Cascader);

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

  /// inputde value
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

  /// options render
  const menus = useMemo(() => {
    const styled = stylex.props(styles.options);

    return (
      <div
        className={clsx(classNames[CascaderClassToken.Options], styled.className)}
        style={styled.style}
      >
        {[presetedMenuItems, ...additionalMenusItems].map((menuItems, index) => {
          return <Menu items={menuItems} key={index} onClick={onChange as MenuProps["onClick"]} />;
        })}
      </div>
    );
  }, [additionalMenusItems, classNames, onChange, presetedMenuItems]);

  return (
    <Picker
      ref={ref}
      pickable={menus}
      className={classNames[CascaderClassToken.Cascader]}
      popupWidth={false}
    >
      {inputed}
    </Picker>
  );
};

export default Cascader;
