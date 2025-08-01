import React, { useMemo } from "react";
import type { StepsProps } from "../../types/steps";
import Item from "./item";
import { useClassNames } from "../../hooks/use-class-names";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES, Context } from "./context";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";

const styles = $create({
  steps: {
    display: "flex",
    alignItems: "flex-start",
    gap: spacing.xxsmall,
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
  const classNames = useClassNames(CLASS_NAMES);
  const theme = useTheme();

  const styled = {
    steps: $props(styles.steps, styles[type]),
  };

  const contextValue = useMemo(
    () => ({
      type,
      onChange,
      max: items.length - 1,
      value,
      size,
      classNames,
    }),
    [type, onChange, items.length, value, size, classNames],
  );

  return (
    <Context.Provider value={contextValue}>
      <ol
        className={stringify(classNames.steps, className, styled.steps.className)}
        style={{
          ...styled.steps.style,
          ...style,
          "--color-primary": theme.colors.primary,
          "--color-on-primary": theme.colors["on-primary"],
          "--color-primary-container": theme.colors["primary-container"],
          "--color-on-primary-container": theme.colors["on-primary-container"],
          "--color-secondary": theme.colors.secondary,
          "--on-secondary": theme.colors["on-secondary"],
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
