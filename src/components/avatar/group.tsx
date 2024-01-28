import React from "react";
import * as stylex from "@stylexjs/stylex";
import { AvatarGroupProps } from "./types";
import { Context } from "./context";

const styles = stylex.create({
  group: {
    display: "inline-flex",
  },
});

const Group = ({ children, shape = "circle", size = "medium" }: AvatarGroupProps) => {
  const styled = stylex.props(styles.group);

  return (
    <Context.Provider
      value={{
        shape,
        size,
      }}
    >
      <div {...styled}>{children}</div>
    </Context.Provider>
  );
};

export default Group;
