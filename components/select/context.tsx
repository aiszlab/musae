import { createContext } from "react";
import type { ContextValue } from "./types";
import React from "react";
import { Menu } from "../menu";
import { useReadableOptions, useToAddition, useValue } from "./hooks";

const Context = createContext<ContextValue>({
  useSelector: ({ options, mode, close, ...props }) => {
    /// addition
    const toAddition = useToAddition();

    /// options
    const { additions, readableOptions } = useReadableOptions([options, toAddition]);

    /// value
    const { value, onChange } = useValue([props.value, mode, readableOptions, close]);

    return {
      value: value,
      options: <Menu items={additions} onClick={onChange} selectedKeys={[...value.values()]} />,
    };
  },
});

export default Context;
