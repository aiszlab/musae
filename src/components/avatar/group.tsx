import React, { Children, cloneElement, isValidElement, useMemo } from "react";
import { $create, $props } from "../../utils/styles";
import type { AvatarGroupProps } from "../../types/avatar";
import Context, { CLASS_NAMES } from "./context";
import { Popover } from "../popover";
import Avatar from "./avatar";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names";

const styles = $create({
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
  const classNames = useClassNames(CLASS_NAMES);
  const styled = $props(styles.group);

  const children = useMemo(() => {
    const [visible, hidden] = Children.toArray(_children).reduce<
      [ReturnType<typeof Children.toArray>, ReturnType<typeof Children.toArray>]
    >(
      (prev, child, index) => {
        const _child = isValidElement(child)
          ? cloneElement(child, { key: `avatars-${index}` })
          : child;

        // great than max, hide current node
        if (index >= max) {
          prev[1].push(_child);
        } else {
          prev[0].push(_child);
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
      <div className={stringify(classNames.group, styled.className)} style={styled.style}>
        {children}
      </div>
    </Context.Provider>
  );
};

export default Group;
