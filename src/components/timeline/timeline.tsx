import styles from "./styles";
import React, { useMemo } from "react";
import Item from "./item";
import type { TimelineProps } from "../../types/timeline";
import { props as $props } from "@stylexjs/stylex";
import { CLASS_NAMES, Context } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { useTheme } from "../theme";

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

  const styled = $props(styles.timeline.timeline);

  return (
    <Context.Provider value={contextValue}>
      <ol
        className={stringify(classNames.timeline, styled.className)}
        style={{
          ...styled.style,
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
