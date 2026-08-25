import styles from "./styles";
import React, { useContext, useMemo } from "react";
import type { TimelineItemProps } from "../../types/timeline";
import { props as $props } from "@stylexjs/stylex";
import { Context } from "./context";
import { stringify } from "@aiszlab/relax/class-name";

const Item = ({ description, label, value, dot }: TimelineItemProps) => {
  const { mode: _mode, max, size, classNames } = useContext(Context);
  const isLabeled = !!label;
  const isMax = max === value;

  // convert alternate mode to normal mode
  const mode = useMemo(() => {
    if (_mode === "alternate") {
      return value % 2 === 1 ? "right" : "left";
    }
    return _mode;
  }, [_mode, value]);

  const styled = {
    item: $props(
      styles.item.base,
      styles.item[mode],
      isLabeled && styles.labeled.base,
      isLabeled && styles.labeled[mode],
    ),
    label: $props(styles.label.base, styles.label[mode]),
    leading: $props(styles.leading.base, !isMax && styles.leading.tail),
    sign: $props(styles.sign.base),
    dot: $props(styles.dot.base),
    description: $props(styles.description.base, styles.description[mode]),
  };

  return (
    <li
      className={stringify(classNames.item, styled.item.className)}
      style={{ ...styled.item.style, "--sign-size": size }}
    >
      {isLabeled && (
        <div
          className={stringify(classNames.label, styled.label.className)}
          style={styled.label.style}
        >
          {label}
        </div>
      )}

      <div
        className={stringify(classNames.leading, styled.leading.className)}
        style={styled.leading.style}
      >
        <div
          className={stringify(classNames.sign, styled.sign.className)}
          style={styled.sign.style}
        >
          {dot ?? (
            <span
              className={stringify(classNames.dot, styled.dot.className)}
              style={styled.dot.style}
            />
          )}
        </div>
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
