import React, { useContext, type CSSProperties } from "react";
import type { Status, StepItemProps } from "./types";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { StepsClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { useEvent } from "@aiszlab/relax";
import { Context } from "./context";
import { typography } from "../theme/theme";
import { Done } from "../icon/icons";
import { ComponentToken } from "../../utils/component-token";

const styles = {
  step: stylex.create({
    default: {
      flex: 1,
      display: "grid",
      alignItems: "center",
      columnGap: spacing.xsmall,
      overflow: "hidden",

      gridTemplateAreas: "'leading title' '. description'",
      gridTemplateColumns: "auto 1fr",
    },

    clickable: {
      cursor: "pointer",
    },
  }),

  leading: stylex.create({
    default: {
      gridArea: "leading",
    },

    tail: (props: { color: CSSProperties["color"] }) => ({
      position: "relative",

      "::after": {
        content: "''",
        position: "absolute",
        height: sizes.infinity,
        width: sizes.smallest,
        backgroundColor: props.color,
        insetBlockStart: "100%",
        insetInlineStart: `calc((100% - ${sizes.smallest}) / 2)`,
        marginBlockStart: spacing.small,
      },
    }),
  }),

  sign: stylex.create({
    default: (props: { size?: number }) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: sizes.infinity,
      overflow: "hidden",
      width: props.size ?? sizes.xsmall,
      height: props.size ?? sizes.xsmall,
    }),

    doing: (props: {
      backgroundColor: CSSProperties["backgroundColor"];
      color: CSSProperties["color"];
    }) => ({
      backgroundColor: props.backgroundColor,
      color: props.color,
    }),

    done: (props: {
      backgroundColor: CSSProperties["backgroundColor"];
      color: CSSProperties["color"];
    }) => ({
      backgroundColor: props.backgroundColor,
      color: props.color,
    }),

    todo: (props: {
      backgroundColor: CSSProperties["backgroundColor"];
      color: CSSProperties["color"];
    }) => ({
      backgroundColor: props.backgroundColor,
      color: props.color,
    }),
  }),

  title: stylex.create({
    default: {
      gridArea: "title",
      alignItems: "center",
    },

    tail: (props: { color: CSSProperties["color"] }) => ({
      position: "relative",

      "::after": {
        content: "''",
        position: "absolute",
        height: sizes.smallest,
        width: sizes.infinity,
        backgroundColor: props.color,
        marginInlineStart: spacing.small,
        insetBlockStart: `calc((100% - ${sizes.smallest}) / 2)`,
      },
    }),
  }),

  description: stylex.create({
    default: {
      gridArea: "description",
    },
  }),
};

const Item = ({ leading, title, description, value }: StepItemProps) => {
  const classNames = useClassNames(ComponentToken.Steps);
  const theme = useTheme();
  const { type, onChange, value: _value, max, size } = useContext(Context);

  const status: Status = _value < value ? "todo" : _value === value ? "doing" : "done";
  const isClickable = !!onChange && status !== "doing";
  const isHorizontal = type === "horizontal";
  const isVertical = type === "vertical";
  const isMax = value === max;

  const styled = {
    step: stylex.props(styles.step.default, isClickable && styles.step.clickable),
    leading: stylex.props(
      styles.leading.default,
      isVertical &&
        !isMax &&
        styles.leading.tail({
          color: theme.colors[ColorToken.Primary],
        }),
    ),
    sign: stylex.props(
      styles.sign.default({ size }),
      status === "doing" &&
        styles.sign.doing({
          backgroundColor: theme.colors[ColorToken.Primary],
          color: theme.colors[ColorToken.OnPrimary],
        }),
      status === "done" &&
        styles.sign.done({
          backgroundColor: theme.colors[ColorToken.PrimaryContainer],
          color: theme.colors[ColorToken.OnPrimaryContainer],
        }),
      status === "todo" &&
        styles.sign.todo({
          backgroundColor: theme.colors[ColorToken.Secondary],
          color: theme.colors[ColorToken.OnSecondary],
        }),
    ),
    title: stylex.props(
      typography.title.medium,
      styles.title.default,
      isHorizontal &&
        !isMax &&
        styles.title.tail({
          color: theme.colors[ColorToken.Primary],
        }),
    ),
    description: stylex.props(typography.body.medium, styles.description.default),
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
        styled.step.className,
      )}
      style={styled.step.style}
      onClick={click}
    >
      <div
        className={clsx(classNames[StepsClassToken.Leading], styled.leading.className)}
        style={styled.leading.style}
      >
        <div
          className={clsx(classNames[StepsClassToken.Sign], styled.sign.className)}
          style={styled.sign.style}
        >
          {leading ?? (status === "done" ? <Done /> : value)}
        </div>
      </div>
      <div
        className={clsx(classNames[StepsClassToken.Title], styled.title.className)}
        style={styled.title.style}
      >
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
