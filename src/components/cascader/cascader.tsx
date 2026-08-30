import styles from "./styles";
import React, { useMemo, type ReactNode } from "react";
import { Picker } from "../picker";
import { Tag } from "../tag";
import { useOptions, useValue } from "./hooks";
import { Menu } from "../menu";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import type { CascaderProps } from "../../types/cascader";
import { CLASS_NAMES } from "./context";
import { Input } from "../input";
import type { InputRef } from "../../types/input";

const Cascader = ({ mode, separator = "/", options = [], ...props }: CascaderProps) => {
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

  const styled = {
    options: $props(styles.options),
  };

  return (
    <Picker<InputRef>
      pickable={({ close }) => (
        <div
          className={stringify(classNames.options, styled.options.className)}
          style={styled.options.style}
        >
          {[presetedMenuItems, ...additionalMenusItems].map((menuItems, index) => (
            <Menu
              items={menuItems}
              key={index}
              onClick={(id) => {
                onChange(id as number, close);
              }}
            />
          ))}
        </div>
      )}
      popupWidth={false}
    >
      {({ close, toggle, triggerRef }) => (
        <Input
          ref={triggerRef}
          className={classNames.cascader}
          value={typeof inputed === "string" ? inputed : ""}
          leading={mode === "multiple" ? inputed : undefined}
          onBlur={close}
          onClick={toggle}
          onInputorClick={toggle}
          readOnly
        />
      )}
    </Picker>
  );
};

export default Cascader;
