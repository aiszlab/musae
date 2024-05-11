import React from "react";
import Item from "./item";
import { TimelineProps } from "./types";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  timeline: {
    display: "flex",
    flexDirection: "column",
  },
});

const Timeline = ({ items, mode = "right" }: TimelineProps) => {
  const styled = stylex.props(styles.timeline);

  return (
    <ol className={styled.className} style={styled.style}>
      {items.map((item, index) => {
        return <Item key={index} label={item.label} description={item.description} />;
      })}
    </ol>
  );
};

export default Timeline;
