import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useContext,
  type ChangeEvent,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithoutRef,
  type RefAttributes,
} from "react";
import type { SelectorProps, SelectorRef } from "musae/types/select";
import { Tag } from "../tag";
import { styles as inputStyles } from "../input";
import stylex from "@stylexjs/stylex";
import { Context } from "../picker";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { typography } from "../theme/theme";

const styles = stylex.create({
  input: (props: { color: CSSProperties["color"] }) => ({
    "::placeholder": {
      color: props.color,
    },
  }),
});

const Selector: ForwardRefExoticComponent<
  PropsWithoutRef<SelectorProps> & RefAttributes<SelectorRef>
> = forwardRef(({ mode, searchable, value, onSearch, searched, onChange, onBlur }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { isFocused, open } = useContext(Context);
  const theme = useTheme();

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

  const styled = stylex.props(
    inputStyles.input,
    styles.input({
      color: (isFocused && searchable && theme.colors[ColorToken.OnSurface]) || void 0,
    }),
    typography.body.small,
  );

  // multiple mode render
  if (mode === "multiple") {
    return (
      <>
        {Array.from(value.entries()).map(([key, label]) => {
          return (
            <Tag key={key} size="small" closable onClose={() => onChange(key)}>
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
            style={styled.style}
            onChange={search}
            onBlur={onBlur}
          />
        )}
      </>
    );
  }

  // single mode render
  if (!searchable) {
    return (
      <span className={styled.className} style={styled.style}>
        {Array.from(value.values()).join(",")}
      </span>
    );
  }

  return (
    <input
      ref={inputRef}
      value={searched}
      placeholder={Array.from(value.values()).join(",")}
      className={styled.className}
      style={styled.style}
      onChange={search}
      onBlur={onBlur}
    />
  );
});

export default Selector;
