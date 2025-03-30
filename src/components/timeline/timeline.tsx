import React, { useMemo } from "react";
import Item from "./item";
import type { TimelineProps } from "../../types/timeline";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { CLASS_NAMES, Context } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";

const styles = $create({
  timeline: {
    // reset styles
    margin: spacing.none,
    padding: spacing.none,

    // apply styles
    display: "flex",
    flexDirection: "column",
  },
});

const Timeline = ({ items, mode = "right", size }: TimelineProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const total = items.length;
  const theme = useTheme();

  const contextValue = useMemo(
    () => ({
      mode,
      max: total - 1,
      size,
      classNames,
    }),
    [mode, total, size, classNames],
  );

  const styled = $props(styles.timeline);

  return (
    <Context.Provider value={contextValue}>
      <ol
        className={stringify(classNames.timeline, styled.className)}
        style={{
          ...styled.style,
          // @ts-expect-error style vars
          "--color-primary": theme.colors.primary,
        }}
      >
        {items.map((item, index) => {
          return (
            <Item
              key={index}
              value={index}
              label={item.label}
              description={item.description}
              dot={item.dot}
            />
          );
        })}
      </ol>
    </Context.Provider>
  );
};

export default Timeline;
