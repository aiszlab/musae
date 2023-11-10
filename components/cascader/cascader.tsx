import React, { ReactNode, useCallback, useMemo, useRef } from "react";
import { Chooser, type ChooserRef } from "../chooser";
import { Chip } from "../chip";
import { useOptions, useValue } from "./hooks";
import { Menu, MenuItemProps } from "../menu";
import type { CascaderProps, ReadableOptions } from "./types";
import type { Partialable } from "../../types/lib";

const Cascader = ({ mode, ...props }: CascaderProps) => {
  const ref = useRef<ChooserRef>(null);
  const close = useCallback(() => ref.current?.close(), []);

  const { readableOptions, readablePaths, menusItems, setMenusItems } = useOptions([props.options]);
  const { values, onChange } = useValue([props.value, readableOptions, readablePaths, mode, close]);

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

  const onMenuClick = (id: number) => {
    // on menu click, when menu has children, add submenu
    // when menu has no children, just change value and close dropdown
    const _paths = readablePaths.get(id)?.map((path) => path.value) || [];

    const [hasChildren] = _paths.reduce<[boolean, MenuItemProps[][], ReadableOptions]>(
      (prev, key) => {
        const _option = readableOptions.get(key)!;


        _option.children && prev[1].push([..._option.children.values()].map((option)=>({
          
        })))
        return prev;
      },
      [false, [], readableOptions]
    );

    // tree node, add menu items
    const hasChildren = !!readablePaths
      .get(id)
      ?.reduce<[boolean, Partialable<ReadableOptions>]>(
        ([_hasChildren, _reverseIds], { value }) => [
          _hasChildren || !!_reverseIds?.get(value)?.children,
          _reverseIds?.get(value)?.children,
        ],
        [false, readableOptions]
      )[0];

    if (hasChildren) {
      setMenusItems((menusItems) => menusItems.concat());
    }
  };

  /// options render
  const menus = useMemo(() => {
    return menusItems.map((menuItems, index) => {
      return <Menu items={menuItems} key={index} onClick={(id) => {}} />;
    });
  }, [menusItems]);

  return <Chooser ref={ref} selections={inputed} options={menus} />;
};

export default Cascader;
