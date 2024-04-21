import React, {
  type ChangeEvent,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useContext,
  CSSProperties,
} from "react";
import type { SelectorProps, SelectorRef } from "./types";
import { Tag } from "../tag";
import { styles as inputStyles } from "../input";
import stylex from "@stylexjs/stylex";
import { Context } from "../picker";
import { useUpdateEffect } from "@aiszlab/relax";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  input: (props: { color: CSSProperties["color"] }) => ({
    "::placeholder": {
      color: props.color,
    },
  }),
});

const Selector = forwardRef<SelectorRef, SelectorProps>(({ mode, searchable, value }, ref) => {
  const [searched, setSearched] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { isFocused, open } = useContext(Context);
  const theme = useTheme();

  useUpdateEffect(() => {
    setSearched("");
  }, [value]);

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current?.focus();
      },
    };
  });

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

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    setSearched(e.target.value);
    open?.();
  };

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
});

export default Selector;
