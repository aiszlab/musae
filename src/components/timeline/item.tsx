import React, { useContext } from "react";
import { TimelineItemProps } from "./types";
import stylex from "@stylexjs/stylex";
import { Context } from "./context";
import { sizes, spacing } from "../theme/tokens.stylex";

const styles = {
  item: stylex.create({
    default: {
      display: "grid",
      justifyContent: "flex-start",
      gap: spacing.medium,
      overflow: "hidden",
      paddingBottom: spacing.xlarge,
    },

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
    default: {
      gridArea: "leading",
      position: "relative",

      "::after": {
        content: "''",
        position: "absolute",
        height: sizes.infinity,
        width: sizes.smallest,
        backgroundColor: "#000",
        marginBlockStart: spacing.xxxsmall,
        insetBlockStart: "100%",
        insetInlineStart: "50%",
      },
    },
  }),

  description: stylex.create({
    default: {
      gridArea: "description",
    },
  }),
};

const Item = ({ description, label }: TimelineItemProps) => {
  const { mode } = useContext(Context);
  const isLabeled = !!label;
  const styled = {
    item: stylex.props(styles.item.default, styles.item[mode], isLabeled && styles.labeled[mode]),
    label: stylex.props(styles.label.default),
    leading: stylex.props(styles.leading.default),
    description: stylex.props(styles.description.default),
  };

  return (
    <li className={styled.item.className} style={styled.item.style}>
      {isLabeled && (
        <div className={styled.label.className} style={styled.label.style}>
          {label}
        </div>
      )}
      <div className={styled.leading.className} style={styled.leading.style}>
        dots
      </div>
      <div className={styled.description.className} style={styled.description.style}>
        {description}
      </div>
    </li>
  );
};

export default Item;
