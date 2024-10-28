import React, { useContext, type CSSProperties } from "react";
import type { TransferListProps } from "musae/types/transfer";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import Item from "./item";
import { Checkbox } from "../checkbox";
import { Context } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { TransferClassToken } from "../../utils/class-name";
import { stringify } from "@aiszlab/relax/class-name";
import { typography } from "../theme/theme";
import { useLocale } from "../../locale";

const styles = stylex.create({
  list: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    width: sizes.xxxxxxlarge,
    height: sizes.xxxxxxlarge,
    borderWidth: sizes.smallest,
    borderColor: props.outlineColor,
    borderStyle: "solid",
    borderRadius: sizes.xxxxsmall,
  }),

  header: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    display: "flex",
    alignItems: "center",
    paddingBlock: spacing.xsmall,
    paddingInline: spacing.medium,
    borderBottomWidth: sizes.smallest,
    borderBottomColor: props.outlineColor,
    borderBottomStyle: "solid",
  }),

  title: {
    overflow: "hidden",
    textAlign: "end",
    flex: "auto",
  },

  body: {
    padding: spacing.none,
    margin: spacing.none,
  },
});

const List = ({ options, title, onChange, value }: TransferListProps) => {
  const theme = useTheme();
  const { disabled } = useContext(Context);
  const classNames = useClassNames("transfer");
  const [locale] = useLocale("transfer");

  const styled = {
    list: stylex.props(styles.list({ outlineColor: theme.colors["outline-variant"] })),
    header: stylex.props(
      styles.header({ outlineColor: theme.colors["outline-variant"] }),
      typography.body.medium,
    ),
    title: stylex.props(styles.title),
    body: stylex.props(styles.body),
  };

  return (
    <div
      className={stringify(classNames[TransferClassToken.List], styled.list.className)}
      style={styled.list.style}
    >
      <div
        className={stringify(classNames[TransferClassToken.Header], styled.header.className)}
        style={styled.header.style}
      >
        <span>
          {options.length}
          {locale.unit}
        </span>
        <span
          className={stringify(classNames[TransferClassToken.Title], styled.title.className)}
          style={styled.title.style}
        >
          {title}
        </span>
      </div>

      <Checkbox.Group value={value} onChange={onChange} disabled={disabled}>
        <ul
          className={stringify(classNames[TransferClassToken.Body], styled.body.className)}
          style={styled.body.style}
        >
          {options.map((option) => {
            return <Item key={option.value} label={option.label} value={option.value} />;
          })}
        </ul>
      </Checkbox.Group>
    </div>
  );
};

export default List;
