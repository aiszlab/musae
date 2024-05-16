import React, { type CSSProperties, useContext } from "react";
import { TimelineItemProps } from "./types";
import stylex from "@stylexjs/stylex";
import { Context } from "./context";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useClassNames } from "../config";
import { ComponentToken, TimelineClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = {
  item: stylex.create({
    default: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      display: "grid",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: spacing.medium,
      overflow: "hidden",
      paddingBottom: spacing.xlarge,
      backgroundColor: props.backgroundColor,
    }),

    right: {
      grid: "'leading description'",
    },

    left: {
      grid: "'description leading'",
    },

    alternate: {
      grid: "'leading description'",

      ":nth-of-type(2n)": {
        grid: "'description leading'",
      },
    },
  }),

  labeled: stylex.create({
    right: {
      grid: "'label leading description'",
    },

    left: {
      grid: "'description leading label'",
    },

    alternate: {
      grid: "'label leading description'",

      ":nth-of-type(2n)": {
        grid: "'description leading label'",
      },
    },
  }),

  label: stylex.create({
    default: {
      gridArea: "label",
    },
  }),

  leading: stylex.create({
    default: (props: { color: CSSProperties["color"] }) => ({
      gridArea: "leading",
      width: sizes.xxxsmall,
      height: sizes.xxxsmall,
      borderRadius: sizes.infinity,
      backgroundColor: props.color,
    }),

    vertical: (props: { color: CSSProperties["color"] }) => ({
      position: "relative",

      "::after": {
        content: "''",
        position: "absolute",
        height: sizes.infinity,
        width: sizes.smallest,
        backgroundColor: props.color,
        marginBlockStart: spacing.xsmall,
        insetBlockStart: "100%",
        insetInlineStart: `calc((100% - ${sizes.smallest}) / 2)`,
      },
    }),
  }),

  description: stylex.create({
    default: {
      gridArea: "description",
    },
  }),
};

const Item = ({ description, label, value }: TimelineItemProps) => {
  const classNames = useClassNames(ComponentToken.Timeline);
  const { mode, max } = useContext(Context);
  const theme = useTheme();
  const isLabeled = !!label;
  const isMax = max === value;

  const styled = {
    item: stylex.props(
      styles.item.default({ backgroundColor: theme.colors[ColorToken.Surface] }),
      styles.item[mode],
      isLabeled && styles.labeled[mode]
    ),
    label: stylex.props(styles.label.default),
    leading: stylex.props(
      styles.leading.default({ color: theme.colors[ColorToken.Primary] }),
      !isMax && styles.leading.vertical({ color: theme.colors[ColorToken.Primary] })
    ),
    description: stylex.props(styles.description.default),
  };

  return (
    <li className={clsx(classNames[TimelineClassToken.Item], styled.item.className)} style={styled.item.style}>
      {isLabeled && (
        <div className={styled.label.className} style={styled.label.style}>
          {label}
        </div>
      )}
      <div className={styled.leading.className} style={styled.leading.style} />
      <div className={styled.description.className} style={styled.description.style}>
        {description}
      </div>
    </li>
  );
};

export default Item;
