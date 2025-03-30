import { Button } from "../button";
import React, { type Key, useMemo, useRef } from "react";
import { Popover, type PopoverRef } from "../popover";
import { Menu } from "../menu";
import { Empty } from "../empty";
import { toArray, useEvent } from "@aiszlab/relax";
import type { DropdownProps } from "../../types/rich-text-editor";
import { create as $create, props as $props } from "@stylexjs/stylex";

const _styles = $create({
  label: (props: { width?: number }) => ({
    width: props.width,
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
});

const Dropdown = ({
  items: _items = new Map(),
  value: _value,
  onChange,
  children,
  width,
}: DropdownProps) => {
  const popoverRef = useRef<PopoverRef>(null);

  const onClick = useEvent(async (key: Key) => {
    await popoverRef.current?.close().catch(() => null);
    onChange(key);
  });

  const items = useMemo(() => {
    return Array.from(_items).map(([key, item]) => ({
      ...item,
      key,
    }));
  }, [_items]);

  const value = useMemo(() => toArray(_value), [_value]);

  const content = useMemo(() => {
    if (items.length === 0) {
      return <Empty />;
    }
    return <Menu items={items} onClick={onClick} selectedKeys={value} />;
  }, [items, onClick, value]);

  return (
    <Popover
      content={content}
      triggerBy="click"
      arrow={false}
      placement="bottom-start"
      padding={4}
      ref={popoverRef}
    >
      <Button variant="text" size="small">
        <span {...$props(_styles.label({ width }))}>{children ?? _items.get(value[0])?.label}</span>
      </Button>
    </Popover>
  );
};

export default Dropdown;
