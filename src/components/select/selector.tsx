import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useContext,
  type ChangeEvent,
  type ForwardRefExoticComponent,
  type PropsWithoutRef,
  type RefAttributes,
} from "react";
import type { SelectorProps, SelectorRef } from "../../types/select";
import { Tag } from "../tag";
import { styles as inputStyles } from "../input";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { Context } from "../picker";
import { $body } from "../theme/theme";
import { ThemeColorVariable, useThemeColorVars } from "src/hooks/use-theme-color-vars";

const styles = {
  input: {
    focused: $create({
      default: {},

      searchable: {
        "::placeholder": {
          color: "var(--color-on-surface)" satisfies ThemeColorVariable,
        },
      },
    }),
  },
};

const Selector: ForwardRefExoticComponent<
  PropsWithoutRef<SelectorProps> & RefAttributes<SelectorRef>
> = forwardRef(
  ({ mode, searchable, value, onSearch, searched, onChange, onBlur, placeholder }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { isFocused, open } = useContext(Context);
    const _themeColorVars = useThemeColorVars(["on-surface"]);

    useImperativeHandle(ref, () => {
      return {
        focus: () => {
          inputRef.current?.focus();
        },
      };
    });

    // on user search input, trigger the search callback
    const search = (e: ChangeEvent<HTMLInputElement>) => {
      open?.();
      onSearch(e.target.value);
    };

    const styled = $props(
      inputStyles.input,
      styles.input.focused.default,
      isFocused && searchable && styles.input.focused.searchable,
      $body.small,
    );

    // multiple mode render
    if (mode === "multiple") {
      return (
        <>
          {Array.from(value.entries()).map(([key, label]) => {
            return (
              <Tag
                key={key}
                size="small"
                closable
                onClose={(event) => {
                  // stop event: in `Select`, it will trigger and open the popup
                  event.stopPropagation();
                  onChange(key);
                }}
              >
                {label}
              </Tag>
            );
          })}

          {searchable && (
            <input
              key="select-selector"
              ref={inputRef}
              value={searched}
              className={styled.className}
              style={{ ...styled.style, ..._themeColorVars }}
              onChange={search}
              onBlur={onBlur}
              placeholder={placeholder}
            />
          )}
        </>
      );
    }

    // single mode render
    if (!searchable) {
      return (
        <span className={styled.className} style={{ ...styled.style, ..._themeColorVars }}>
          {Array.from(value.values()).join(",") || placeholder}
        </span>
      );
    }

    return (
      <input
        ref={inputRef}
        value={searched}
        placeholder={Array.from(value.values()).join(",") || placeholder}
        className={styled.className}
        style={{ ...styled.style, ..._themeColorVars }}
        onChange={search}
        onBlur={onBlur}
      />
    );
  },
);

export default Selector;
