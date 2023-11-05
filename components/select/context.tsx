import React, { createContext } from "react";
import type { ContextValue } from "./types";
import { Menu } from "../menu";
import { useReadableOptions, useValue } from "./hooks";

const Context = createContext<ContextValue>({
  useSelector: ({ options, mode, close, ...props }) => {
    /// options
    const { menuItems, readableOptions } = useReadableOptions([options]);

    /// value
    const { value, onChange } = useValue([props.value, mode, readableOptions, close]);

    return {
      value: value,
      options: <Menu items={menuItems} onClick={onChange} selectedKeys={[...value.values()]} />,
    };
  },
});

export default Context;
