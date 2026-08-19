import styles from "./styles";
import React, { useContext } from "react";
import type { TransferListProps } from "../../types/transfer";
import { props as $props } from "@stylexjs/stylex";
import Item from "./item";
import { Checkbox } from "../checkbox";
import { Context } from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { $body, $label, $scrollbar } from "../theme/theme";
import { useLocale } from "../../locale";

const List = ({ options, title, onChange, value }: TransferListProps) => {
  const { disabled, classNames } = useContext(Context);
  const [locale] = useLocale("transfer");

  const styled = {
    list: $props($scrollbar.default, styles.list.list),
    header: $props(styles.list.header, $label.large),
    title: $props(styles.list.title),
    body: $props(styles.list.body, $body.medium),
  };

  return (
    <div className={stringify(classNames.list, styled.list.className)} style={styled.list.style}>
      <div
        className={stringify(classNames.header, styled.header.className)}
        style={styled.header.style}
      >
        <span>
          {options.length} {locale.unit}
        </span>

        <span
          className={stringify(classNames.title, styled.title.className)}
          style={styled.title.style}
        >
          {title}
        </span>
      </div>

      <Checkbox.Group value={value} onChange={onChange} disabled={disabled}>
        <ul className={stringify(classNames.body, styled.body.className)} style={styled.body.style}>
          {options.map((option) => {
            return <Item key={option.value} label={option.label} value={option.value} />;
          })}
        </ul>
      </Checkbox.Group>
    </div>
  );
};

export default List;
