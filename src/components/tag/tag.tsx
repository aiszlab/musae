import styles from "./styles";
import React from "react";
import { stringify } from "@aiszlab/relax/class-name";
import type { TagProps } from "../../types/tag";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { IconClose } from "../icon/icons";
import { CLASS_NAMES } from "./context";
import { $label } from "../theme/theme";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

const Tag = ({
  children,
  variant = "filled",
  size = "medium",
  className,
  style,
  closable = false,
  onClose,
  onClick,
  leading,
}: TagProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const _themeColorVars = useThemeColorVars([
    "primary-container",
    "on-primary-container",
    "surface",
    "on-surface-variant",
    "outline",
  ]);

  const styled = $props($label[size], styles.tag.base, styles.size[size], styles.variant[variant]);

  return (
    <span
      className={stringify(classNames.tag, className, styled.className)}
      style={{
        ...styled.style,
        ..._themeColorVars,
        ...style,
      }}
      onClick={onClick}
    >
      {leading}
      {children}
      {closable && <IconClose onClick={onClose} />}
    </span>
  );
};

export default Tag;
