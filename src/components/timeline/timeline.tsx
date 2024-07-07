import React, { useMemo } from "react";
import Item from "./item";
import type { ContextValue, TimelineProps } from "./types";
import stylex from "@stylexjs/stylex";
import { Context } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, TimelineClassToken } from "../../utils/class-name";
import clsx from "clsx";

const styles = stylex.create({
  timeline: {
    display: "flex",
    flexDirection: "column",
  },
});

const Timeline = ({ items, mode = "right", size }: TimelineProps) => {
  const styled = stylex.props(styles.timeline);
  const classNames = useClassNames(ComponentToken.Timeline);
  const total = items.length;

  const contextValue = useMemo<ContextValue>(
    () => ({
      mode,
      max: total - 1,
      size,
    }),
    [mode, total, size]
  );

  return (
    <Context.Provider value={contextValue}>
      <ol className={clsx(classNames[TimelineClassToken.Timeline], styled.className)} style={styled.style}>
        {items.map((item, index) => {
          return <Item key={index} value={index} label={item.label} description={item.description} dot={item.dot} />;
        })}
      </ol>
    </Context.Provider>
  );
};

export default Timeline;
