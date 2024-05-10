import React, { useMemo } from "react";
import type { StepsProps, Status, ContextValue } from "./types";
import Item from "./item";
import { useClassNames } from "../config";
import { ComponentToken, StepsClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { Context } from "./context";

const styles = stylex.create({
  steps: {
    display: "flex",
    alignItems: "flex-start",
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
const Steps = ({ items, value = 0, className, style, type = "horizontal", onChange, ...props }: StepsProps) => {
  const classNames = useClassNames(ComponentToken.Steps);

  const styled = {
    steps: stylex.props(styles.steps, styles[type]),
  };

  const contextValue = useMemo<ContextValue>(
    () => ({
      type,
      onChange,
    }),
    [type, onChange]
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
        {items.map((item, index) => {
          const status: Status = index > value ? "todo" : index === value ? "doing" : "done";

          return (
            <Item
              value={index}
              title={item.title}
              leading={item.leading}
              key={index}
              status={status}
              description={item.description}
            />
          );
        })}
      </ol>
    </Context.Provider>
  );
};

export default Steps;
