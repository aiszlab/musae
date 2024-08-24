import { Button } from "../button";
import React, { useMemo } from "react";
import { Popover } from "../popover";
import { Menu, type MenuItem } from "../menu";
import { Empty } from "../empty";

const Dropdown = ({ items = [] }: { items?: MenuItem[] }) => {
  const content = useMemo(() => {
    if (items.length === 0) {
      return <Empty />;
    }

    return <Menu items={items} />;
  }, [items]);

  return (
    <Popover content={content} triggerBy="click" arrow={false} placement="bottom-start" padding={4}>
      <Button variant="text" size="small">
        字体
      </Button>
    </Popover>
  );
};

export default Dropdown;
