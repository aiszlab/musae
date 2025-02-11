import React, { useContext } from "react";
import { Menu } from "../menu";
import { Context } from "../picker";
import { useMemorable } from "@aiszlab/relax";
import type { SelectionsProps } from "../../types/select";
import { Empty } from "../empty";

/**
 * @description
 * just display the selections for user selectable like options
 * use `Menu` component for react render
 *
 * other way, use `memo` HOC to wrapper
 * because in options close, we use timeout animations
 * but in animation time, we do not need to re-render the component, keep options in last state
 */
const Selections = ({ onSelect, selectedKeys, ...props }: SelectionsProps) => {
  const { isOpen } = useContext(Context);

  const items = useMemorable(
    () => props.items,
    [isOpen, props.items] satisfies [boolean, SelectionsProps["items"]],
    ({ 1: prevItems }, { 0: isNextOpen, 1: nextItems }) => isNextOpen && nextItems !== prevItems,
  );

  if (items.length === 0) {
    return <Empty />;
  }

  return <Menu items={items} onClick={onSelect} selectedKeys={selectedKeys} />;
};

export default Selections;
