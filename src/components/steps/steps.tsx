import React from "react";
import type { StepsProps } from "./types";

const Steps = ({ items }: StepsProps) => {
  return (
    <ul>
      {items.map((item) => {
        return <li>{item.leading}</li>;
      })}
    </ul>
  );
};

export default Steps;
