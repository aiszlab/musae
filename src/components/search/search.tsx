import { Button } from "../button";
import { Input } from "../input";
import React, { forwardRef, useRef, useImperativeHandle, useCallback } from "react";
import IconSearch from "../icon/icons/action/search";
import { IconClose } from "../icon/icons";
import { props as $props } from "@stylexjs/stylex";
import { OPACITY } from "../theme/tokens.stylex";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";
import { useClassNames } from "../../hooks/use-class-names";
import { useEvent, useControlledState } from "@aiszlab/relax";
import type { SearchProps, SearchRef } from "../../types/search";
import type { InputRef } from "../../types/input";
import { stringify } from "@aiszlab/relax/class-name";
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
    },
    ref,
  ) => {
    const inputRef = useRef<InputRef>(null);
    const classNames = useClassNames(CLASS_NAMES);

    const themeColorVars = useThemeColorVars([
      "primary",
      "outline",
      "surface-container-high",
      "on-surface-variant",
      ["on-surface-variant", OPACITY.thin],
      ["on-surface", OPACITY.thickest],
      ["on-surface", OPACITY.thin],
    ]);

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

    const hasValue = _value.length > 0;

    const _styled = {
      container: $props(
        styles.container.default,
        disabled && styles.container.disabled,
        !!searchButton && styles.container.withSearchButton,
      ),
      leading: $props(styles.leading.default),
      input: $props(styles.input.default),
      clear: $props(styles.clear.default),
      searchButton: $props(styles.searchButton.default),
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
          ...themeColorVars,
        }}
      >
        {/* Leading search icon */}
        <span
          className={stringify(classNames.searchLeading, _styled.leading.className)}
          style={_styled.leading.style}
        >
          <IconSearch size={24} />
        </span>

        {/* Input */}
        <Input
          className={stringify(classNames.searchInput, _styled.input.className)}
          style={_styled.input.style}
          ref={inputRef}
          value={_value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          onKeyDown={handleKeyDown}
        />

        {/* Clear button */}
        {hasValue && clearable && !disabled && (
          <button
            type="button"
            className={stringify(classNames.searchClear, _styled.clear.className)}
            style={_styled.clear.style}
            onClick={handleClear}
            aria-label="Clear search"
          >
            <IconClose size={24} />
          </button>
        )}

        {/* Optional trailing search button */}
        {searchButton && (
          <Button
            className={stringify(classNames.searchButton, _styled.searchButton.className)}
            style={_styled.searchButton.style}
            onClick={handleSearch}
            disabled={disabled}
          >
            {searchButton}
          </Button>
        )}
      </span>
    );
  },
);

Search.displayName = "Search";

export default Search;
