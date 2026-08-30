import React from "react";
import type { KeyboardEventHandler, ReactNode, Ref } from "react";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";
import type { InputRef } from "../../types/input";
import type { ResolvedSearchView, SearchProps } from "../../types/search";
import { IconArrowBack, IconClose } from "../icon/icons";
import { Input } from "../input";
import { Portal } from "../portal";
import { CLASS_NAMES } from "./context";
import styles from "./styles";

/**
 * @zh 私有 Search View 属性
 * @en Private Search View props
 */
export type SearchViewProps = Pick<SearchProps, "clearable" | "disabled" | "placeholder"> & {
  inputRef: Ref<InputRef>;
  mode: ResolvedSearchView;
  open: boolean;
  value: string;
  activeDescendant?: string;
  listId: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onClose: () => void;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  children?: ReactNode;
};

const SearchView = ({
  activeDescendant,
  children,
  clearable,
  disabled,
  inputRef,
  listId,
  mode,
  open,
  placeholder,
  value,
  onChange,
  onClear,
  onClose,
  onKeyDown,
}: SearchViewProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const themeColorVars = useThemeColorVars([
    "surface-dim",
    "surface-container-high",
    "outline",
    "on-surface-variant",
  ]);
  const hasValue = value.length > 0;
  const styled = {
    root: $props(styles.view.root, mode === "modal" && styles.view.modalRoot),
    overlay: $props(styles.view.overlay),
    panel: $props(styles.view.panel, mode === "modal" ? styles.view.modal : styles.view.fullScreen),
    header: $props(
      styles.view.header,
      mode === "modal" ? styles.view.modalHeader : styles.view.fullScreenHeader,
    ),
    action: $props(styles.view.action),
  };

  const clearAction = hasValue && clearable && !disabled && (
    <button
      type="button"
      className={stringify(classNames.searchViewAction, styled.action.className)}
      style={styled.action.style}
      onClick={(event) => {
        event.stopPropagation();
        onClear();
      }}
      aria-label="Clear search"
    >
      <IconClose size={24} />
    </button>
  );

  return (
    <Portal open={open} destroyable modal>
      <div
        className={stringify(classNames.searchView, styled.root.className)}
        style={{ ...styled.root.style, ...themeColorVars }}
      >
        {mode === "modal" && (
          <div
            className={stringify(classNames.searchViewOverlay, styled.overlay.className)}
            style={styled.overlay.style}
            data-testid="search-view-overlay"
            onClick={onClose}
          />
        )}

        <div
          className={stringify(classNames.searchViewPanel, styled.panel.className)}
          style={styled.panel.style}
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          onClick={(event) => event.stopPropagation()}
        >
          <div
            className={stringify(classNames.searchViewHeader, styled.header.className)}
            style={styled.header.style}
          >
            <Input
              ref={inputRef}
              variant="filled"
              shape={mode === "modal" ? "pill" : "standard"}
              role="combobox"
              aria-expanded={open}
              aria-controls={listId}
              aria-activedescendant={activeDescendant}
              aria-autocomplete="list"
              value={value}
              placeholder={placeholder}
              disabled={disabled}
              onChange={onChange}
              onKeyDown={onKeyDown}
              leading={
                <button
                  type="button"
                  className={stringify(classNames.searchViewAction, styled.action.className)}
                  style={styled.action.style}
                  onClick={(event) => {
                    event.stopPropagation();
                    onClose();
                  }}
                  aria-label="Close search"
                >
                  <IconArrowBack size={24} />
                </button>
              }
              trailing={clearAction}
            />
          </div>

          {children}
        </div>
      </div>
    </Portal>
  );
};

export default SearchView;
