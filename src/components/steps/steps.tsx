import React from "react";
import type { StepsProps } from "./types";
import Item from "./item";
import { useClassNames } from "../config";
import { ComponentToken, StepsClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import clsx from "clsx";

const styles = stylex.create({
  steps: {},
});

const Steps = ({ items, value }: StepsProps) => {
  const classNames = useClassNames(ComponentToken.Steps);

  const styled = {
    steps: stylex.props(styles.steps),
  };

  return (
    <ul className={clsx(classNames[StepsClassToken.Steps], styled.steps.className)} style={styled.steps.style}>
      {items.map((item, index) => {
        return <Item title={item.title} leading={item.leading} key={index} />;
      })}
    </ul>
  );
};

export default Steps;
