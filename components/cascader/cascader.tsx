import React, { useMemo } from "react";
import { Chooser } from "../chooser";
import { useBoolean } from "@aiszlab/relax";
import { useOptions, useValue } from "./hooks";
import type { CascaderProps } from "./types";
import { Menu } from "../menu";

const Cascader = (props: CascaderProps) => {
  const { isOn: isVisible, toggle, turnOff: close } = useBoolean();
  const { readableOptions, readablePaths, reverseIds, menusItems } = useOptions([props.options]);
  const { values, onChange } = useValue([props.value, readableOptions, readablePaths, reverseIds, props.mode, close]);

  /// menu render
  const menus = useMemo(() => {
    return menusItems.map((menuItems, index) => {
      return <Menu items={menuItems} key={index} />;
    });
  }, [menusItems]);

  return <Chooser selections={values} options={menus} />;
};

export default Cascader;
