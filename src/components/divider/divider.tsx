import styles from "./styles";
import type { DividerProps } from "../../types/divider";
import React from "react";
import { useOffset } from "./hooks";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { stringify } from "@aiszlab/relax/class-name";
import { useGutters } from "../../hooks/use-gutters";
import { CLASS_NAMES } from "./context";
import { $body } from "../theme/theme";

const Divider = ({
  align = "center",
  children,
  orientation = "horizontal",
  className,
  style,
  margin = 0,
}: DividerProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const offset = useOffset({ align });
  const theme = useTheme();
  const margins = useGutters({ gutter: margin });

  // only in horizontal, divider will be labeled
  const isLabeled = !!children && orientation === "horizontal";

  const styled = {
    divider: $props(
      styles.divider[orientation],
      !isLabeled && styles.simple[orientation],
      isLabeled && styles.labeled[orientation],
    ),
    label: $props(styles.label[orientation], $body.small),
  };

  return (
    <div
      className={stringify(classNames.divider, className, styled.divider.className)}
      style={{
        ...styled.divider.style,
        ...style,
        "--color-outline-variant": theme.colors["outline-variant"],
        "--margin-start": `${margins[0]}px`,
        "--margin-end": `${margins[1]}px`,
        "--offset": `${offset}%`,
      }}
    >
      {isLabeled && (
        <span
          className={stringify(classNames.label, styled.label.className)}
          style={styled.label.style}
        >
          {children}
        </span>
      )}
    </div>
  );
};

export default Divider;
