import React from "react";
import type { Props } from "./types";
import { Context, useContextValue } from "./hooks";

/**
 * @author murukal
 *
 * @description
 * theme provider
 * if user provider theme, we will merge it with presets theme
 */
const ThemeProvider = (props: Props) => {
  const contextValue = useContextValue({
    theme: props.theme,
  });

  return (
    <Context.Provider value={contextValue}>
      {/* children */}
      {props.children}
    </Context.Provider>
  );
};

export default ThemeProvider;
