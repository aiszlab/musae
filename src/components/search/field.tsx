import { props as $props } from "@stylexjs/stylex";
import { useComposedRef } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import React, { useRef } from "react";
import type {
  ChangeEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler,
  ReactNode,
  Ref,
} from "react";
import { useClassNames } from "../../hooks/use-class-names";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";
import { $body } from "../theme/theme";
import { OPACITY } from "../theme/tokens.stylex";
import { CLASS_NAMES } from "./context";
import styles from "./styles";

/**
 * @zh 私有 Search 输入区域属性
 * @en Private Search input field props
 */
export type SearchFieldProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | "aria-activedescendant"
  | "aria-autocomplete"
  | "aria-controls"
  | "aria-expanded"
  | "onFocus"
  | "role"
> & {
  inputRef: Ref<HTMLInputElement>;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  shape?: "pill" | "standard";
  leading?: ReactNode;
  trailing?: ReactNode;
  onChange: (value: string) => void;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
};

const SearchField = ({
  disabled,
  inputRef,
  leading,
  onChange,
  onFocus,
  onKeyDown,
  placeholder,
  shape = "pill",
  trailing,
  value,
  ...inputProps
}: SearchFieldProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const ownedInputRef = useRef<HTMLInputElement>(null);
  const composedInputRef = useComposedRef(ownedInputRef, inputRef);
  const themeColorVars = useThemeColorVars([
    "primary",
    "surface-container-high",
    "on-surface",
    "on-surface-variant",
    ["on-surface", OPACITY.medium],
    ["on-surface", OPACITY.thickest],
  ]);
  const styled = {
    root: $props(
      $body.large,
      styles.field.root,
      shape === "pill" ? styles.field.pill : styles.field.standard,
      !disabled && styles.field.enabled,
      disabled && styles.field.disabled,
    ),
    input: $props(styles.fieldInput.base, disabled && styles.fieldInput.disabled),
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.currentTarget.value);
  };

  return (
    <div
      className={stringify(classNames.searchInput, styled.root.className)}
      style={{ ...styled.root.style, ...themeColorVars }}
      {...(!disabled && {
        onClick: () => {
          ownedInputRef.current?.focus();
        },
      })}
    >
      {leading}
      <input
        {...inputProps}
        ref={composedInputRef}
        className={stringify(classNames.searchInputControl, styled.input.className)}
        style={styled.input.style}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
      />
      {trailing}
    </div>
  );
};

export default SearchField;
