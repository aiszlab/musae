import { Button } from "../button";
import React, { type Key, useMemo, useRef } from "react";
import { Popover, type PopoverRef } from "../popover";
import { Menu } from "../menu";
import { Empty } from "../empty";
import { toArray, useEvent } from "@aiszlab/relax";
import type { DropdownProps } from "../../types/rich-text-editor";
import { create as $create, props as $props } from "@stylexjs/stylex";

const _styles = $create({
  label: {
    width: "var(--width)",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

const Dropdown = <T extends Key>({
  items: _items = new Map(),
  value: _value,
  onChange,
  children,
  width,
}: DropdownProps<T>) => {
  const popoverRef = useRef<PopoverRef>(null);

  const onClick = useEvent(async (key: T) => {
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
  const _firstValue = value.at(0);

  const content = useMemo(() => {
    if (items.length === 0) {
      return <Empty />;
    }
    return (
      <Menu
        items={items}
        // @ts-expect-error type-safe value
        onClick={onClick}
        selectedKeys={value}
      />
    );
  }, [items, onClick, value]);

  const _styled = $props(_styles.label);

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
        <span className={_styled.className} style={{ ..._styled.style, "--width": width }}>
          {children ?? (!!_firstValue && _items.get(_firstValue as T)?.label)}
        </span>
      </Button>
    </Popover>
  );
};

export default Dropdown;
