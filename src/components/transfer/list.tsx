import React, { CSSProperties } from "react";
import type { TransferListProps } from "./types";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  list: (props: {
    outlineColor: CSSProperties["borderColor"]
  }) => ({
    width: sizes.xxxxxlarge,
    height: sizes.xxxxxxlarge,
    borderWidth: sizes.smallest,
    borderColor: props.outlineColor,
    borderStyle: "solid",
    borderRadius: sizes.xxxxsmall
  })
});

const List = ({ options }: TransferListProps) => {
  const theme = useTheme();
  const styled = {
    list: stylex.props(styles.list({ outlineColor: theme.colors[ColorToken.Outline] }))
  };

  return (
    <div className={styled.list.className} style={styled.list.style}>
      <ul>
        {options.map((option) => {
          return <li key={option.value}>{option.label}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
