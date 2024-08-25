import { Button } from "../button";
import React, { type Key, useMemo, useRef } from "react";
import { Popover, type PopoverRef } from "../popover";
import { Menu, type MenuItem } from "../menu";
import { Empty } from "../empty";
import { useEvent } from "@aiszlab/relax";

const Dropdown = <T extends Key = Key>({
  items: _items = new Map(),
  value,
  onChange,
}: {
  items?: Map<T, Omit<MenuItem, "key">>;
  value: T;
  onChange: (value: T) => void;
}) => {
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

  const content = useMemo(() => {
    if (items.length === 0) {
      return <Empty />;
    }
    return <Menu items={items} onClick={onClick} selectedKeys={[value]} />;
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
        {_items.get(value)?.label}
      </Button>
    </Popover>
  );
};

export default Dropdown;
