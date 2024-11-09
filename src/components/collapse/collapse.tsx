import React, { type CSSProperties } from "react";
import type { CollapseProps } from "musae/types/collapse";
import { useClassNames } from "../../hooks/use-class-names.component";
import Item from "./item";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useActiveKeys } from "./hooks";
import { CLASS_NAMES, Context } from "./context";
import { useTheme } from "../theme";

const styles = stylex.create({
  collapse: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: props.outlineColor,
    borderRadius: sizes.xxxxxsmall,
  }),
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

  const styled = stylex.props(styles.collapse({ outlineColor: theme.colors["outline-variant"] }));

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
