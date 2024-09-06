import React, { type CSSProperties } from "react";
import type { CollapseProps } from "./types";
import { useClassNames } from "../../hooks/use-class-names";
import { CollapseClassToken } from "../../utils/class-name";
import Item from "./item";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { clsx } from "@aiszlab/relax";
import { useActiveKeys } from "./hooks";
import { Context } from "./context";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { ComponentToken } from "../../utils/component-token";

const styles = stylex.create({
  collapse: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: props.outlineColor,
    borderRadius: sizes.xxxxsmall,
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
  const classNames = useClassNames(ComponentToken.Collapse);
  const [activeKeys, toggle] = useActiveKeys({ defaultActiveKey, activeKey, onChange, accordion });
  const theme = useTheme();

  // no need to render when items is empty
  if (items.length === 0) return null;

  const styled = stylex.props(
    styles.collapse({ outlineColor: theme.colors[ColorToken.OutlineVariant] }),
  );

  return (
    <Context.Provider
      value={{
        activeKeys,
        toggle,
      }}
    >
      <div
        className={clsx(classNames[CollapseClassToken.Collapse], className, styled.className)}
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
