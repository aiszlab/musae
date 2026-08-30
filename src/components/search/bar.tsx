import { Button } from "../button";
import IconSearch from "../icon/icons/action/search";
import { IconClose } from "../icon/icons";
import { Input } from "../input";
import { $body } from "../theme/theme";
import { props as $props } from "@stylexjs/stylex";
import { isBoolean, isUndefined } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import React from "react";
import type { FocusEventHandler, KeyboardEventHandler, ReactNode, Ref } from "react";
import { useClassNames } from "../../hooks/use-class-names";
import type { InputRef } from "../../types/input";
import type { SearchProps } from "../../types/search";
import { CLASS_NAMES } from "./context";
import styles from "./styles";

/**
 * @zh 私有 Search Bar 属性
 * @en Private Search Bar props
 */
export type SearchBarProps = Pick<
  SearchProps,
  "clearable" | "disabled" | "leading" | "placeholder" | "searchButton" | "trailing"
> & {
  inputRef: Ref<InputRef>;
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onFocus: FocusEventHandler<HTMLInputElement>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  onSearch: () => void;
};

const hasRenderableContent = (children: ReactNode): boolean => {
  if (children === null || isUndefined(children) || isBoolean(children) || children === "") {
    return false;
  }

  return React.Children.toArray(children).some((child) => {
    if (React.isValidElement<{ children?: ReactNode }>(child) && child.type === React.Fragment) {
      return hasRenderableContent(child.props.children);
    }

    return child !== "";
  });
};

const SearchBar = ({
  clearable,
  disabled,
  leading,
  placeholder,
  searchButton,
  trailing,
  inputRef,
  value,
  onChange,
  onClear,
  onFocus,
  onKeyDown,
  onSearch,
}: SearchBarProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const hasValue = value.length > 0;
  const styled = {
    input: $props($body.large),
    leading: $props(styles.leading.base),
    trailing: $props(styles.trailing.base),
    clear: $props(styles.clear.base),
    searchButton: $props(styles.searchButton.base),
  };

  const clearAction = hasValue && clearable && !disabled && (
    <button
      type="button"
      className={stringify(classNames.searchClear, styled.clear.className)}
      style={styled.clear.style}
      onClick={(event) => {
        event.stopPropagation();
        onClear();
      }}
      aria-label="Clear search"
    >
      <IconClose size={24} />
    </button>
  );

  const searchButtonAction = searchButton && (
    <Button
      className={stringify(classNames.searchButton, styled.searchButton.className)}
      style={styled.searchButton.style}
      onClick={(event) => {
        event.stopPropagation();
        onSearch();
      }}
      disabled={disabled}
    >
      {searchButton}
    </Button>
  );

  const hasConsumerTrailing = hasRenderableContent(trailing);
  const hasTrailing = !!clearAction || hasConsumerTrailing || !!searchButtonAction;

  return (
    <Input
      ref={inputRef}
      className={stringify(classNames.searchInput, styled.input.className)}
      variant="filled"
      shape="pill"
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      leading={
        <span
          className={stringify(classNames.searchLeading, styled.leading.className)}
          style={styled.leading.style}
        >
          {leading ?? <IconSearch size={24} />}
        </span>
      }
      trailing={
        hasTrailing ? (
          <span
            className={stringify(classNames.searchTrailing, styled.trailing.className)}
            style={styled.trailing.style}
          >
            {clearAction}
            {trailing}
            {searchButtonAction}
          </span>
        ) : undefined
      }
    />
  );
};

export default SearchBar;
