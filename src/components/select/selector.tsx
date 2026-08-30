import styles from "./styles";
import React, { forwardRef } from "react";
import type { SelectorProps } from "../../types/select";
import type { InputRef } from "../../types/input";
import { Tag } from "../tag";
import { Input } from "../input";
import { props as $props } from "@stylexjs/stylex";
import { IconClose } from "../icon/icons";
import { isMultiple } from "./utils";

const Selector = forwardRef<InputRef, SelectorProps>(
  (
    {
      mode,
      searchable,
      value,
      onSearch,
      keyword,
      onChange,
      onBlur,
      onClose,
      onOpen,
      onClear,
      onClick,
      placeholder,
      disabled = false,
      invalid = false,
    },
    ref,
  ) => {
    const multiple = isMultiple(mode);
    const selectedValue = Array.from(value.values()).join(",");

    // on user search input, trigger the search callback
    const search = (nextKeyword: string) => {
      onOpen();
      onSearch(nextKeyword);
    };

    const styled = {
      input: $props(styles.selector.input),
    };

    const selections = multiple
      ? Array.from(value.entries()).map(([key, label]) => (
          <Tag
            key={key}
            size="small"
            closable={!disabled}
            onClose={(event) => {
              // stop event: in `Select`, it will trigger and open the popup
              event.stopPropagation();
              onChange(key);
            }}
          >
            {label}
          </Tag>
        ))
      : undefined;

    return (
      <Input
        ref={ref}
        value={searchable ? keyword : multiple ? "" : selectedValue}
        placeholder={searchable && !multiple ? selectedValue || placeholder : placeholder}
        className={styled.input.className}
        style={styled.input.style}
        onChange={searchable ? search : undefined}
        onClick={onClick}
        onInputorClick={onClick}
        onBlur={(event) => {
          onBlur?.(event);
          onClose();
        }}
        readOnly={!searchable}
        disabled={disabled}
        invalid={invalid}
        leading={selections}
        trailing={
          !!onClear &&
          !disabled && (
            <IconClose
              onClick={(event) => {
                event.stopPropagation();
                onClear();
              }}
            />
          )
        }
      />
    );
  },
);

export default Selector;
