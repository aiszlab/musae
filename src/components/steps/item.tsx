import styles from "./styles";
import React, { useContext } from "react";
import type { Status, StepItemProps } from "../../types/steps";
import { props as $props } from "@stylexjs/stylex";
import { isNumber, isUndefined, useEvent } from "@aiszlab/relax";
import { Context } from "./context";
import { IconDone } from "../icon/icons";
import { stringify } from "@aiszlab/relax/class-name";
import { $body, $title } from "../theme/theme";

const Item = ({ leading, title, description, value }: StepItemProps) => {
  const { type, onChange, value: _value, max, size, classNames } = useContext(Context);

  const status: Status = _value < value ? "todo" : _value === value ? "doing" : "done";
  const isClickable = !!onChange && status !== "doing";
  const isHorizontal = type === "horizontal";
  const isVertical = type === "vertical";
  const isMax = value === max;

  const styled = {
    step: $props(styles.item.step.default, isClickable && styles.item.step.clickable),
    leading: $props(styles.item.leading.default, isVertical && !isMax && styles.item.leading.tail),
    sign: $props(
      styles.item.sign.default,
      status === "doing" && styles.item.sign.doing,
      status === "done" && styles.item.sign.done,
      status === "todo" && styles.item.sign.todo,
    ),
    title: $props(
      $title.medium,
      styles.item.title.default,
      isHorizontal && !isMax && styles.item.title.tail,
    ),
    description: $props($body.medium, styles.item.description.default),
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
            "--size": isNumber(size) ? `${size}px` : void 0,
          }}
        >
          {leading ?? (status === "done" ? <IconDone /> : value)}
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
