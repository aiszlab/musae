import React, { useContext } from "react";
import type { Status, StepItemProps } from "../../types/steps";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { isUndefined, useEvent } from "@aiszlab/relax";
import { Context } from "./context";
import { Done } from "../icon/icons";
import { stringify } from "@aiszlab/relax/class-name";
import { $body, $title } from "../theme/theme";

const styles = {
  step: $create({
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

  leading: $create({
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
        backgroundColor: "var(--color-primary)",
        insetBlockStart: "100%",
        insetInlineStart: `calc((100% - ${sizes.smallest}) / 2)`,
        marginBlockStart: spacing.xxsmall,
      },
    },
  }),

  sign: $create({
    default: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: sizes.infinity,
      overflow: "hidden",
      // width: props.size ?? sizes.xsmall,
      // height: props.size ?? sizes.xsmall,
      width: `var(--size, ${sizes.xsmall})`,
      height: `var(--size, ${sizes.xsmall})`,
    },

    doing: {
      backgroundColor: "var(--color-primary)",
      color: "var(--color-on-primary)",
    },

    done: {
      backgroundColor: "var(--color-primary-container)",
      color: "var(--color-on-primary-container)",
    },

    todo: {
      backgroundColor: "var(--color-secondary)",
      color: "var(--on-secondary)",
    },
  }),

  title: $create({
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
        backgroundColor: "var(--color-primary)",
        marginInlineStart: spacing.xxsmall,
        insetBlockStart: `calc((100% - ${sizes.smallest}) / 2)`,
      },
    },
  }),

  description: $create({
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
    step: $props(styles.step.default, isClickable && styles.step.clickable),
    leading: $props(styles.leading.default, isVertical && !isMax && styles.leading.tail),
    sign: $props(
      styles.sign.default,
      status === "doing" && styles.sign.doing,
      status === "done" && styles.sign.done,
      status === "todo" && styles.sign.todo,
    ),
    title: $props($title.medium, styles.title.default, isHorizontal && !isMax && styles.title.tail),
    description: $props($body.medium, styles.description.default),
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
          style={{
            ...styled.sign.style,
            ...(!isUndefined(size) && {
              "--size": `${size}px`,
            }),
          }}
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
