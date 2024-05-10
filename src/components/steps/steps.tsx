import React from "react";
import type { StepsProps, Status } from "./types";
import Item from "./item";
import { useClassNames } from "../config";
import { ComponentToken, StepsClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { useControlledState } from "@aiszlab/relax";

const styles = stylex.create({
  steps: {
    display: "flex",
    flexDirection: "row",
  },
});

const Steps = ({ items, ...props }: StepsProps) => {
  const classNames = useClassNames(ComponentToken.Steps);
  const [value, setValue] = useControlledState(props.value!, { defaultState: 0 });

  const styled = {
    steps: stylex.props(styles.steps),
  };

  return (
    <ul className={clsx(classNames[StepsClassToken.Steps], styled.steps.className)} style={styled.steps.style}>
      {items.map((item, index) => {
        const status: Status = index > value ? "todo" : index === value ? "doing" : "done";

        return (
          <Item title={item.title} leading={item.leading} key={index} status={status} description={item.description} />
        );
      })}
    </ul>
  );
};

export default Steps;
