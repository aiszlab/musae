import React, {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { isUndefined, useControlledState, useEvent } from "@aiszlab/relax";
import type { Key } from "react";
import type { SearchItem, SearchProps, SearchRef } from "../../types/search";
import type { InputRef } from "../../types/input";
import { stringify } from "@aiszlab/relax/class-name";
import SearchBar from "./bar";
import SearchView from "./view";
import styles from "./styles";
import { CLASS_NAMES } from "./context";
import { getAdjacentEnabledKey, useResolvedSearchView } from "./hooks";
import SearchResultList from "./result-list";

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
      items = [],
      renderItem,
      onSelect,
      closeOnSelect = true,
    },
    ref,
  ) => {
    const barInputRef = useRef<InputRef>(null);
    const viewInputRef = useRef<InputRef>(null);
    const wasOpenRef = useRef(false);
    const isRestoringBarFocusRef = useRef(false);
    const classNames = useClassNames(CLASS_NAMES);
    const listId = `search-result-list-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
    const [activeKey, setActiveKey] = useState<Key | undefined>();

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

    useEffect(() => {
      if (!isOpen) {
        setActiveKey(undefined);
      }
    }, [isOpen]);

    useEffect(() => {
      setActiveKey(undefined);
    }, [valueInProps]);

    useEffect(() => {
      if (disabled) {
        setActiveKey(undefined);
      }
    }, [disabled]);

    useEffect(() => {
      if (
        !isUndefined(activeKey) &&
        !items.some((item) => item.key === activeKey && !item.disabled)
      ) {
        setActiveKey(undefined);
      }
    }, [activeKey, items]);

    useImperativeHandle<SearchRef, SearchRef>(ref, () => ({
      focus: () => {
        (isOpen ? viewInputRef : barInputRef).current?.focus();
      },
      blur: () => {
        (isOpen ? viewInputRef : barInputRef).current?.blur();
      },
      clear: () => {
        setActiveKey(undefined);
        _setValue("");
        onChange?.("");
      },
      getValue: () => {
        return _value;
      },
    }));

    const handleChange = useEvent((value: string) => {
      setActiveKey(undefined);
      _setValue(value);
      onChange?.(value);
    });

    const handleSearch = useEvent(() => {
      onSearch?.(_value);
    });

    const handleClear = useEvent(() => {
      setActiveKey(undefined);
      _setValue("");
      onChange?.("");
      onClear?.();
    });

    const getOptionId = useEvent((key: Key) => {
      const serializedKey = Array.from(String(key), (character) =>
        character.codePointAt(0)!.toString(16),
      ).join("-");
      return `${listId}-option-${typeof key}-${serializedKey}`;
    });

    const selectItem = useEvent((item: SearchItem) => {
      if (item.disabled) return;

      _setValue(item.value);
      onChange?.(item.value);
      onSelect?.(item);

      if (closeOnSelect) {
        requestOpen(false);
      }
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
      } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        setActiveKey(getAdjacentEnabledKey(items, activeKey, event.key === "ArrowDown" ? 1 : -1));
      } else if (event.key === "Enter") {
        event.preventDefault();
        const activeItem = items.find(
          (item) => !isUndefined(activeKey) && item.key === activeKey && !item.disabled,
        );

        if (activeItem) {
          selectItem(activeItem);
        } else {
          handleSearch();
        }
      }
    });

    const activeDescendant = isUndefined(activeKey)
      ? undefined
      : items.some((item) => item.key === activeKey && !item.disabled)
        ? getOptionId(activeKey)
        : undefined;

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
          activeDescendant={activeDescendant}
        >
          <SearchResultList
            id={listId}
            items={items}
            renderItem={renderItem}
            activeKey={activeKey}
            getOptionId={getOptionId}
            onActiveKeyChange={setActiveKey}
            onSelect={selectItem}
          />
        </SearchView>
      </span>
    );
  },
);

Search.displayName = "Search";

export default Search;
