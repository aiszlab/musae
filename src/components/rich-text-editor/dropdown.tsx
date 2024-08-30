import { Button } from "../button";
import React, { type Key, useMemo, useRef } from "react";
import { Popover, type PopoverRef } from "../popover";
import { Menu } from "../menu";
import { Empty } from "../empty";
import { toArray, useEvent } from "@aiszlab/relax";
import { DropdownProps } from "./types";

const Dropdown = <T extends Key = Key>({
  items: _items = new Map(),
  value: _value,
  onChange,
  children,
}: DropdownProps<T>) => {
  const popoverRef = useRef<PopoverRef>(null);

  const onClick = useEvent(async (key: Key) => {
    await popoverRef.current?.close().catch(() => null);
    onChange(key as T);
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
    return <Menu items={items} onClick={onClick} selectedKeys={toArray(value)} />;
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
        {children ?? _items.get(value[0])?.label}
      </Button>
    </Popover>
  );
};

export default Dropdown;
