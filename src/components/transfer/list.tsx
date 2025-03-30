import React, { useContext } from "react";
import type { TransferListProps } from "../../types/transfer";
import { $create, $props } from "../../utils/styles";
import { elevations, sizes, spacing } from "../theme/tokens.stylex";
import Item from "./item";
import { Checkbox } from "../checkbox";
import { Context } from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { scrollbar, typography } from "../theme/theme";
import { useLocale } from "../../locale";

const styles = $create({
  list: {
    minWidth: sizes.xxxxxxxlarge,
    maxHeight: sizes.xxxxxxxxlarge,
    display: "flex",
    flexDirection: "column",
    gap: spacing.xxxxxsmall,
  },

  header: {
    display: "flex",
    alignItems: "center",
    padding: spacing.xxsmall,
    borderTopLeftRadius: sizes.xxxxsmall,
    borderTopRightRadius: sizes.xxxxsmall,
    borderBottomLeftRadius: sizes.xxxxxxxxsmall,
    borderBottomRightRadius: sizes.xxxxxxxxsmall,
    boxShadow: elevations.xsmall,
  },

  title: {
    overflow: "hidden",
    textAlign: "end",
    flex: "auto",
  },

  body: {
    minHeight: sizes.xxxxxxxlarge,
    flexGrow: 1,

    margin: spacing.none,
    borderTopLeftRadius: sizes.xxxxxxxxsmall,
    borderTopRightRadius: sizes.xxxxxxxxsmall,
    borderBottomLeftRadius: sizes.xxxxxxsmall,
    borderBottomRightRadius: sizes.xxxxxxsmall,
    boxShadow: elevations.xsmall,
    overflow: "auto",

    paddingInline: spacing.none,
    paddingBlock: spacing.xxxxxsmall,
  },
});

const List = ({ options, title, onChange, value }: TransferListProps) => {
  const { disabled, classNames } = useContext(Context);
  const [locale] = useLocale("transfer");

  const styled = {
    list: $props(scrollbar.default, styles.list),
    header: $props(styles.header, typography.label.large),
    title: $props(styles.title),
    body: $props(styles.body, typography.body.medium),
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
