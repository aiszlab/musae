import React from "react";
import { StepItemProps } from "./types";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../config";
import { ComponentToken, StepsClassToken } from "../../utils/class-name";
import clsx from "clsx";

const styles = stylex.create({
  leading: {},

  title: {},

  description: {},
});

const Item = ({ leading, title, description }: StepItemProps) => {
  const classNames = useClassNames(ComponentToken.Steps);

  const styled = {
    leading: stylex.props(styles.leading),
    title: stylex.props(styles.title),
    description: stylex.props(styles.description),
  };

  return (
    <li className={classNames[StepsClassToken.Item]}>
      <div className={clsx(classNames[StepsClassToken.Leading], styled.leading.className)} style={styled.leading.style}>
        {leading}
      </div>
      <div className={clsx(classNames[StepsClassToken.Title], styled.title.className)} style={styled.title.style}>
        {title}
      </div>
      <div
        className={clsx(classNames[StepsClassToken.Description], styled.description.className)}
        style={styled.description.style}
      >
        {description}
      </div>
    </li>
  );
};

export default Item;
