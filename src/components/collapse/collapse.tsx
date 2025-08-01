import React from "react";
import type { CollapseProps } from "../../types/collapse";
import { useClassNames } from "../../hooks/use-class-names";
import Item from "./item";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useActiveKeys } from "./hooks";
import { CLASS_NAMES, Context } from "./context";
import { useTheme } from "../theme";

const styles = $create({
  collapse: {
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "var(--color-outline-variant)",
    borderRadius: sizes.xxxxxxxsmall,
  },
});

const Collapse = ({
  items,
  className,
  defaultActiveKey,
  activeKey,
  onChange,
  style,
  accordion = false,
}: CollapseProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const [activeKeys, toggle] = useActiveKeys({ defaultActiveKey, activeKey, onChange, accordion });
  const theme = useTheme();

  // no need to render when items is empty
  if (items.length === 0) return null;

  const styled = $props(styles.collapse);

  return (
    <Context.Provider
      value={{
        activeKeys,
        toggle,
        classNames,
      }}
    >
      <div
        className={stringify(classNames.collapse, className, styled.className)}
        style={{
          ...styled.style,
          ...style,
          "--color-outline-variant": theme.colors["outline-variant"],
        }}
      >
        {items.map((item) => {
          return <Item {...item} value={item.key} />;
        })}
      </div>
    </Context.Provider>
  );
};

export default Collapse;
