import React, { Children, cloneElement, useMemo } from "react";
import stylex from "@stylexjs/stylex";
import type { AvatarGroupProps } from "musae/types/avatar";
import { Context } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { AvatarClassToken } from "../../utils/class-name";
import { Popover } from "../popover";
import Avatar from "./avatar";
import { ComponentToken } from "../../utils/component-token";
import { clsx } from "@aiszlab/relax";

const styles = stylex.create({
  group: {
    display: "inline-flex",
    userSelect: "none",
  },
});

const Group = ({
  children: _children,
  shape = "circular",
  size = "medium",
  max = 3,
}: AvatarGroupProps) => {
  const classNames = useClassNames(ComponentToken.Avatar);
  const styled = stylex.props(styles.group);

  const children = useMemo(() => {
    const [visible, hidden] = Children.toArray(_children).reduce<
      [ReturnType<typeof Children.toArray>, ReturnType<typeof Children.toArray>]
    >(
      (prev, child, index) => {
        // @ts-ignore
        const element = cloneElement(child, { key: `avatars-${index}` });

        // great than max, hide current node
        if (index >= max) {
          prev[1].push(element);
        } else {
          prev[0].push(element);
        }
        return prev;
      },
      [[], []],
    );

    // got hidden nodes, show ellipse node
    if (hidden.length > 0) {
      visible.push(
        <Popover
          content={<Group max={Infinity}>{hidden}</Group>}
          key="avatars-hidden"
          placement="top"
        >
          <Avatar alt={`+${hidden.length}`} />
        </Popover>,
      );
    }

    return visible;
  }, [_children, max]);

  return (
    <Context.Provider
      value={{
        shape,
        size,
      }}
    >
      <div
        className={clsx(classNames[AvatarClassToken.Group], styled.className)}
        style={styled.style}
      >
        {children}
      </div>
    </Context.Provider>
  );
};

export default Group;
