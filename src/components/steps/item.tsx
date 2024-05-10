import React, { useContext, type CSSProperties } from "react";
import type { StepItemProps } from "./types";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../config";
import { ComponentToken, StepsClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { useEvent } from "@aiszlab/relax";
import { Context } from "./context";

const styles = {
  step: stylex.create({
    default: {
      flex: 1,
      display: "grid",
      grid: "'leading title' '. description'",
      alignItems: "center",
      columnGap: spacing.xsmall,
      overflow: "hidden",
    },

    clickable: {
      cursor: "pointer",
    },
  }),

  leading: stylex.create({
    default: {
      gridArea: "leading",
    },

    vertical: (props: { color: CSSProperties["color"] }) => ({
      position: "relative",

      "::after": {
        content: "''",
        position: "absolute",
        height: sizes.infinity,
        width: sizes.smallest,
        backgroundColor: props.color,
      },
    }),
  }),

  title: stylex.create({
    default: {
      gridArea: "title",
      alignItems: "center",
    },

    horizontal: (props: { color: CSSProperties["color"] }) => ({
      position: "relative",

      "::after": {
        content: "''",
        position: "absolute",
        height: sizes.smallest,
        width: sizes.infinity,
        backgroundColor: props.color,
      },
    }),
  }),

  description: stylex.create({
    default: {
      gridArea: "description",
    },
  }),
};

const Item = ({ leading, title, description, status, value }: StepItemProps) => {
  const classNames = useClassNames(ComponentToken.Steps);
  const theme = useTheme();
  const { type, onChange } = useContext(Context);

  const isClickable = !!onChange && status !== "doing";
  const isHorizontal = type === "horizontal";
  const isVertical = type === "vertical";

  const styled = {
    step: stylex.props(styles.step.default, isClickable && styles.step.clickable),
    leading: stylex.props(
      styles.leading.default,
      isVertical &&
        styles.leading.vertical({
          color: theme.colors[ColorToken.Primary],
        })
    ),
    title: stylex.props(
      styles.title.default,
      isHorizontal &&
        styles.title.horizontal({
          color: theme.colors[ColorToken.Primary],
        })
    ),
    description: stylex.props(styles.description.default),
  };

  const click = useEvent(() => {
    if (!isClickable) return;
    onChange(value);
  });

  return (
    <li
      className={clsx(
        classNames[StepsClassToken.Item],
        {
          [classNames[StepsClassToken.Done]]: status === "done",
          [classNames[StepsClassToken.Doing]]: status === "doing",
          [classNames[StepsClassToken.Todo]]: status === "todo",
        },
        styled.step.className
      )}
      style={styled.step.style}
      onClick={click}
    >
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