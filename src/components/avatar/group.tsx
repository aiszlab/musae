import React from "react";
import * as stylex from "@stylexjs/stylex";
import { type AvatarGroupProps } from "./types";
import { Context } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { AvatarClassToken, ComponentToken } from "../../utils/class-name";

const styles = stylex.create({
  group: {
    display: "inline-flex",
  },
});

const Group = ({ children, shape = "circular", size = "medium", max = 3 }: AvatarGroupProps) => {
  const styled = stylex.props(styles.group);
  const classNames = useClassNames(ComponentToken.Avatar);

  return (
    <Context.Provider
      value={{
        shape,
        size,
      }}
    >
      <div className={(classNames[AvatarClassToken.Group], styled.className)} style={styled.style}>
        {children}
      </div>
    </Context.Provider>
  );
};

export default Group;
