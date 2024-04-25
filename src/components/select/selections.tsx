import React, { memo, useContext } from "react";
import { Menu, type MenuItem, type MenuProps } from "../menu";
import { Context } from "../picker";

interface Props {
  items: MenuItem[];
  onSelect: MenuProps["onClick"];
  selectedKeys: MenuProps["selectedKeys"];
  open: boolean;
}

/**
 * @description
 * just display the selections for user selectable like options
 * use `Menu` component for react render
 *
 * other way, use `memo` HOC to wrapper
 * because in options close, we use timeout animations
 * but in animation time, we do not need to re-render the component, keep options in last state
 */
const _Selections = memo(
  ({ items, onSelect, selectedKeys }: Props) => {
    return <Menu items={items} onClick={onSelect} selectedKeys={selectedKeys} />;
  },
  (_, nextProps) => nextProps.open
);

const Selections = () => {
  const { isFocused } = useContext(Context);
};

export default () => {};
