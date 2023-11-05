import React from "react";
import Context from "../select/context";
import { Select } from "../select";

const Provider = Context.Provider;

const Cascader = () => {
  return (
    <Provider
      value={{
        useSelector: () => {
          return {
            options: <></>,
            value: new Map(),
          };
        },
      }}
    >
      <Select />
    </Provider>
  );
};

export default Cascader;
