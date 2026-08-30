import React, {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from "react";
import { props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { isUndefined, useControlledState, useEvent } from "@aiszlab/relax";
import type { SearchProps, SearchRef } from "../../types/search";
import type { InputRef } from "../../types/input";
import { stringify } from "@aiszlab/relax/class-name";
import SearchBar from "./bar";
import SearchView from "./view";
import styles from "./styles";
import { CLASS_NAMES } from "./context";
import { useResolvedSearchView } from "./hooks";

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
      view = "auto",
      open,
      defaultOpen,
      onOpenChange,
    },
    ref,
  ) => {
    const barInputRef = useRef<InputRef>(null);
    const viewInputRef = useRef<InputRef>(null);
    const wasOpenRef = useRef(false);
    const isRestoringBarFocusRef = useRef(false);
    const classNames = useClassNames(CLASS_NAMES);
    const listId = useId();

    const [_value, _setValue] = useControlledState<string>(valueInProps, {
      defaultState: defaultValue ?? "",
    });
    const [isOpen, setOpen] = useControlledState(open, {
      defaultState: defaultOpen ?? false,
    });
    const resolvedView = useResolvedSearchView(view);

    const requestOpen = useEvent((nextOpen: boolean) => {
      if (disabled && nextOpen) return;
      if (nextOpen === isOpen) return;

      setOpen(nextOpen);
      onOpenChange?.(nextOpen);
    });

    useEffect(() => {
      if (isOpen) {
        viewInputRef.current?.focus();
      } else if (wasOpenRef.current) {
        isRestoringBarFocusRef.current = true;
        barInputRef.current?.focus();
        isRestoringBarFocusRef.current = false;
      }

      wasOpenRef.current = isOpen;
    }, [isOpen]);

    useEffect(() => {
      if (disabled && isUndefined(open) && isOpen) {
        requestOpen(false);
      }
    }, [disabled, isOpen, open, requestOpen]);

    useImperativeHandle<SearchRef, SearchRef>(ref, () => ({
      focus: () => {
        (isOpen ? viewInputRef : barInputRef).current?.focus();
      },
      blur: () => {
        (isOpen ? viewInputRef : barInputRef).current?.blur();
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

    const handleViewKeyDown = useEvent((event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        requestOpen(false);
      } else if (event.key === "Enter") {
        event.preventDefault();
        handleSearch();
      }
    });

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
          inputRef={barInputRef}
          value={_value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          clearable={clearable}
          leading={leading}
          trailing={trailing}
          searchButton={searchButton}
          onClear={handleClear}
          onFocus={() => {
            if (!isRestoringBarFocusRef.current) {
              requestOpen(true);
            }
          }}
          onKeyDown={handleKeyDown}
          onSearch={handleSearch}
        />

        <SearchView
          inputRef={viewInputRef}
          mode={resolvedView}
          open={isOpen}
          value={_value}
          listId={listId}
          placeholder={placeholder}
          disabled={disabled}
          clearable={clearable}
          onChange={handleChange}
          onClear={handleClear}
          onClose={() => requestOpen(false)}
          onKeyDown={handleViewKeyDown}
        />
      </span>
    );
  },
);

Search.displayName = "Search";

export default Search;
