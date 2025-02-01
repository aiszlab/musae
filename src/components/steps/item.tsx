import React, { useContext, type CSSProperties } from "react";
import type { Status, StepItemProps } from "musae/types/steps";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useEvent } from "@aiszlab/relax";
import { Context } from "./context";
import { typography } from "../theme/theme";
import { Done } from "musae/icons";
import { stringify } from "@aiszlab/relax/class-name";

const styles = {
  step: stylex.create({
    default: {
      flex: 1,
      display: "grid",
      alignItems: "center",
      columnGap: spacing.xxxsmall,
      overflow: "hidden",
      pointerEvents: "none",

      gridTemplateAreas: "'leading title' '. description'",
      gridTemplateColumns: "auto 1fr",
    },

    clickable: {
      cursor: "pointer",
      pointerEvents: null,
    },
  }),

  leading: stylex.create({
    default: {
      gridArea: "leading",
    },

    tail: {
      position: "relative",

      "::after": {
        content: "''",
        position: "absolute",
        height: sizes.infinity,
        width: sizes.smallest,
        backgroundColor: "var(--primary)",
        insetBlockStart: "100%",
        insetInlineStart: `calc((100% - ${sizes.smallest}) / 2)`,
        marginBlockStart: spacing.xxsmall,
      },
    },
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

    doing: {
      backgroundColor: "var(--primary)",
      color: "var(--on-primary)",
    },

    done: {
      backgroundColor: "var(--primary-container)",
      color: "var(--on-primary-container)",
    },

    todo: {
      backgroundColor: "var(--secondary)",
      color: "var(--on-secondary)",
    },
  }),

  title: stylex.create({
    default: {
      gridArea: "title",
      alignItems: "center",
    },

    tail: {
      position: "relative",

      "::after": {
        content: "''",
        position: "absolute",
        height: sizes.smallest,
        width: sizes.infinity,
        backgroundColor: "var(--primary)",
        marginInlineStart: spacing.xxsmall,
        insetBlockStart: `calc((100% - ${sizes.smallest}) / 2)`,
      },
    },
  }),

  description: stylex.create({
    default: {
      gridArea: "description",
    },
  }),
};

const Item = ({ leading, title, description, value }: StepItemProps) => {
  const { type, onChange, value: _value, max, size, classNames } = useContext(Context);

  const status: Status = _value < value ? "todo" : _value === value ? "doing" : "done";
  const isClickable = !!onChange && status !== "doing";
  const isHorizontal = type === "horizontal";
  const isVertical = type === "vertical";
  const isMax = value === max;

  const styled = {
    step: stylex.props(styles.step.default, isClickable && styles.step.clickable),
    leading: stylex.props(styles.leading.default, isVertical && !isMax && styles.leading.tail),
    sign: stylex.props(
      styles.sign.default({ size }),
      status === "doing" && styles.sign.doing,
      status === "done" && styles.sign.done,
      status === "todo" && styles.sign.todo,
    ),
    title: stylex.props(
      typography.title.medium,
      styles.title.default,
      isHorizontal && !isMax && styles.title.tail,
    ),
    description: stylex.props(typography.body.medium, styles.description.default),
  };

  const click = useEvent(() => {
    onChange?.(value);
  });

  return (
    <li
      className={stringify(
        classNames.item,
        {
          [classNames.done]: status === "done",
          [classNames.doing]: status === "doing",
          [classNames.todo]: status === "todo",
        },
        styled.step.className,
      )}
      style={styled.step.style}
      onClick={click}
    >
      <div
        className={stringify(classNames.leading, styled.leading.className)}
        style={styled.leading.style}
      >
        <div
          className={stringify(classNames.sign, styled.sign.className)}
          style={styled.sign.style}
        >
          {leading ?? (status === "done" ? <Done /> : value)}
        </div>
      </div>
      <div
        className={stringify(classNames.title, styled.title.className)}
        style={styled.title.style}
      >
        {title}
      </div>
      <div
        className={stringify(classNames.description, styled.description.className)}
        style={styled.description.style}
      >
        {description}
      </div>
    </li>
  );
};

export default Item;
