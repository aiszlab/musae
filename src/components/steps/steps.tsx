import React, { useMemo } from "react";
import type { StepsProps, ContextValue } from "./types";
import Item from "./item";
import { useClassNames } from "../../hooks/use-class-names";
import { StepsClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { Context } from "./context";
import { spacing } from "../theme/tokens.stylex";
import { ComponentToken } from "../../utils/component-token";

const styles = stylex.create({
  steps: {
    display: "flex",
    alignItems: "flex-start",
    gap: spacing.small,
  },

  horizontal: {
    flexDirection: "row",
  },

  vertical: {
    flexDirection: "column",
  },
});

/**
 * @description
 * `Steps` component
 *
 * design by:
 * 1. `Steps` only be controlled
 * 2. render by `items` prop
 */
const Steps = ({
  items,
  value = 0,
  className,
  style,
  type = "horizontal",
  onChange,
  size,
}: StepsProps) => {
  const classNames = useClassNames(ComponentToken.Steps);

  const styled = {
    steps: stylex.props(styles.steps, styles[type]),
  };

  const contextValue = useMemo<ContextValue>(
    () => ({
      type,
      onChange,
      max: items.length - 1,
      value,
      size,
    }),
    [type, onChange, items.length, value, size],
  );

  return (
    <Context.Provider value={contextValue}>
      <ol
        className={clsx(classNames[StepsClassToken.Steps], className, styled.steps.className)}
        style={{
          ...styled.steps.style,
          ...style,
        }}
      >
        {items.map((item, index) => (
          <Item
            value={index}
            title={item.title}
            leading={item.leading}
            key={index}
            description={item.description}
          />
        ))}
      </ol>
    </Context.Provider>
  );
};

export default Steps;
