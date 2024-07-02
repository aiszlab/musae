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
import type { SelectorProps, SelectorRef } from "./types";
import { Tag } from "../tag";
import { styles as inputStyles } from "../input";
import stylex from "@stylexjs/stylex";
import { Context } from "../picker";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  input: (props: { color: CSSProperties["color"] }) => ({
    "::placeholder": {
      color: props.color,
    },
  }),
});

const Selector: ForwardRefExoticComponent<PropsWithoutRef<SelectorProps> & RefAttributes<SelectorRef>> = forwardRef(
  ({ mode, searchable, value, onSearch, searched }, ref) => {
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

    const search = (e: ChangeEvent<HTMLInputElement>) => {
      open?.();
      // on user search input, trigger the search callback
      onSearch(e.target.value);
    };

    /// multiple mode render
    if (mode === "multiple") {
      return [
        ...Array.from(value.entries()).map(([key, label]) => {
          return (
            <Tag key={key} size="small">
              {label}
            </Tag>
          );
        }),
        searchable && <input ref={inputRef} />,
      ];
    }

    const styled = stylex.props(
      inputStyles.input,
      styles.input({
        color: isFocused && searchable ? void 0 : theme.colors[ColorToken.OnSurface],
      })
    );

    /// single mode render
    return (
      <input
        readOnly={!searchable}
        ref={inputRef}
        value={searched}
        placeholder={Array.from(value.values()).join(",")}
        className={styled.className}
        style={styled.style}
        onChange={search}
      />
    );
  }
);

export default Selector;
