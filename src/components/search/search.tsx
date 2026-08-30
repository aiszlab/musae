import React, { forwardRef, useRef, useImperativeHandle, useCallback } from "react";
import { props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { useEvent, useControlledState } from "@aiszlab/relax";
import type { SearchProps, SearchRef } from "../../types/search";
import type { InputRef } from "../../types/input";
import { stringify } from "@aiszlab/relax/class-name";
import SearchBar from "./bar";
import styles from "./styles";
import { CLASS_NAMES } from "./context";

/**
 * @zh Search 搜索组件，基于 Material 3 设计规范
 * @en Search component based on Material 3 design specifications
 */
const Search = forwardRef<SearchRef, SearchProps>(
  (
    {
      className,
      style,
      value: valueInProps,
      defaultValue,
      onChange,
      placeholder,
      disabled = false,
      clearable = true,
      searchButton,
      onSearch,
      onClear,
      leading,
      trailing,
    },
    ref,
  ) => {
    const inputRef = useRef<InputRef>(null);
    const classNames = useClassNames(CLASS_NAMES);

    const [_value, _setValue] = useControlledState<string>(valueInProps, {
      defaultState: defaultValue ?? "",
    });

    useImperativeHandle<SearchRef, SearchRef>(ref, () => ({
      focus: () => {
        inputRef.current?.focus?.();
      },
      blur: () => {
        inputRef.current?.blur?.();
      },
      clear: () => {
        _setValue("");
        onChange?.("");
      },
      getValue: () => {
        return _value;
      },
    }));

    const handleChange = useEvent((value: string) => {
      _setValue(value);
      onChange?.(value);
    });

    const handleSearch = useEvent(() => {
      onSearch?.(_value);
    });

    const handleClear = useEvent(() => {
      _setValue("");
      onChange?.("");
      onClear?.();
    });

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSearch();
        } else if (e.key === "Escape") {
          e.preventDefault();
          handleClear();
        }
      },
      [handleSearch, handleClear],
    );

    const _styled = {
      container: $props(styles.container.base),
    };

    return (
      <span
        className={stringify(
          classNames.search,
          {
            [classNames.disabled]: disabled,
          },
          _styled.container.className,
          className,
        )}
        style={{
          ..._styled.container.style,
          ...style,
        }}
      >
        <SearchBar
          inputRef={inputRef}
          value={_value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          clearable={clearable}
          leading={leading}
          trailing={trailing}
          searchButton={searchButton}
          onClear={handleClear}
          onFocus={() => {}}
          onKeyDown={handleKeyDown}
          onSearch={handleSearch}
        />
      </span>
    );
  },
);

Search.displayName = "Search";

export default Search;
