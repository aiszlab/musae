import React, { createContext } from "react";
import type { ContextValue } from "./types";
import { Menu } from "../menu";
import { useOptions, useValue } from "./hooks";

const Context = createContext<ContextValue>({
  useSelector: ({ options, mode, close, ...props }) => {
    /// options
    const { menuItems, readableOptions } = useOptions([options]);

    /// value
    const { value, onChange } = useValue([props.value, readableOptions, mode, close]);

    return {
      value: value,
      options: <Menu items={menuItems} onClick={onChange} selectedKeys={[...value.values()]} />,
    };
  },
});

export default Context;
