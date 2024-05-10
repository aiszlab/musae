import React from "react";
import { StepItemProps } from "./types";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../config";
import { ComponentToken, StepsClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  step: {
    flex: 1,
    display: "grid",
    grid: "'leading title' '. description'",
    alignItems: "center",
    columnGap: spacing.xsmall,
    overflow: "hidden",
  },

  leading: {
    gridArea: "leading",
  },

  title: {
    gridArea: "title",
    position: "relative",
    alignItems: "center",

    "::after": {
      content: "''",
      position: "absolute",
      height: 1,
      width: 99999,
      backgroundColor: "red",
    },
  },

  description: {
    gridArea: "description",
  },
});

const Item = ({ leading, title, description }: StepItemProps) => {
  const classNames = useClassNames(ComponentToken.Steps);

  const styled = {
    step: stylex.props(styles.step),
    leading: stylex.props(styles.leading),
    title: stylex.props(styles.title),
    description: stylex.props(styles.description),
  };

  return (
    <li className={clsx(classNames[StepsClassToken.Item], styled.step.className)} style={styled.step.style}>
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
