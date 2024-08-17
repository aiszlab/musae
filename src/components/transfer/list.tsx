import React, { useContext, type CSSProperties } from "react";
import type { TransferListProps } from "./types";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import Item from "./item";
import { Checkbox } from "../checkbox";
import { Context } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { TransferClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { typography } from "../theme/theme";
import { ComponentToken } from "../../utils/component-token";

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
    paddingBlock: spacing.small,
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
});

const List = ({ options, title, onChange, value }: TransferListProps) => {
  const theme = useTheme();
  const { disabled } = useContext(Context);
  const classNames = useClassNames(ComponentToken.Transfer);
  const styled = {
    list: stylex.props(styles.list({ outlineColor: theme.colors[ColorToken.Outline] })),
    header: stylex.props(
      styles.header({ outlineColor: theme.colors[ColorToken.Outline] }),
      typography.body.medium,
    ),
    title: stylex.props(styles.title),
  };

  return (
    <div
      className={clsx(classNames[TransferClassToken.List], styled.list.className)}
      style={styled.list.style}
    >
      <div
        className={clsx(classNames[TransferClassToken.Header], styled.header.className)}
        style={styled.header.style}
      >
        <span>{options.length}项</span>
        <span
          className={clsx(classNames[TransferClassToken.Title], styled.title.className)}
          style={styled.title.style}
        >
          {title}
        </span>
      </div>

      <Checkbox.Group value={value} onChange={onChange} disabled={disabled}>
        <ul className={classNames[TransferClassToken.Body]}>
          {options.map((option) => {
            return <Item key={option.value} label={option.label} value={option.value} />;
          })}
        </ul>
      </Checkbox.Group>
    </div>
  );
};

export default List;
