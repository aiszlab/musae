import React, { ReactNode, useCallback, useMemo, useRef } from "react";
import { Chooser } from "../chooser";
import { Chip } from "../chip";
import { useOptions, useValue } from "./hooks";
import { Menu } from "../menu";
import { ChooserRef } from "../chooser/types";
import type { CascaderProps } from "./types";

const Cascader = ({ mode, ...props }: CascaderProps) => {
  const ref = useRef<ChooserRef>(null);
  const close = useCallback(() => ref.current?.close(), []);

  const { readableOptions, readablePaths, reverseIds, menusItems } = useOptions([props.options]);
  const { values, onChange } = useValue([props.value, readableOptions, readablePaths, reverseIds, mode, close]);

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
    return [...values.values()].join(" / ");
  }, [values, mode]);

  /// options render
  const menus = useMemo(() => {
    return menusItems.map((menuItems, index) => {
      return <Menu items={menuItems} key={index} onClick={(id) => {}} />;
    });
  }, [menusItems]);

  return <Chooser ref={ref} selections={inputed} options={menus} />;
};

export default Cascader;
