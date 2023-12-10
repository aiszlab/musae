import React from "react";
import { TreeProps } from "./types";
import List from "./list";
import Context from "./context";
import { useToggleable } from "@aiszlab/relax";

const Tree = (props: TreeProps) => {
  const { toggledKeys: selectedKeys, toggle: select } = useToggleable();

  return (
    <Context.Provider
      value={{
        selectedKeys,
        select,
      }}
    >
      <List {...props} level={0} />
    </Context.Provider>
  );
};

export default Tree;
