import React from "react";
import Item from "./item";
import { TimelineProps } from "./types";

const Timeline = ({ items }: TimelineProps) => {
  return (
    <ol>
      {items.map((item, index) => {
        return (
          <Item key={index} label={item.label}>
            {item.children}
          </Item>
        );
      })}
    </ol>
  );
};

export default Timeline;
