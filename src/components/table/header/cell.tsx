import React, { type CSSProperties, type ReactNode } from "react";
import { SwapVert } from "../../icon/icons";
import { toFunction, useControlledState } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../../theme/tokens.stylex";
import { useTheme } from "../../theme";
import { ColorToken } from "../../../utils/colors";

const styles = {
  cell: stylex.create({
    default: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    handlers: (props: { color: CSSProperties["color"] }) => ({
      display: "inline-flex",
      flexDirection: "row",
      gap: spacing.xxsmall,
      color: props.color,
    }),
  }),

  sort: stylex.create({
    default: {
      position: "relative",
    },

    full: {},

    half: (props: { color: CSSProperties["color"] }) => ({
      position: "absolute",
      insetInlineStart: 0,
      insetBlockStart: 0,
      width: sizes.half,
      height: sizes.full,
      color: props.color,
      overflow: "hidden",
    }),
  }),
};

interface Props {
  sortable?: boolean;
  children: ReactNode | (() => ReactNode);
  sort?: "ascend" | "descend" | null;
}

const Cell = ({ sortable = false, children: _children, sort: _sort }: Props) => {
  const children = toFunction(_children)();
  const [sort, setSort] = useControlledState(_sort);
  const theme = useTheme();

  // only children, render directly
  if (!sortable) {
    return children;
  }

  const styled = {
    cell: stylex.props(styles.cell.default),
    handlers: stylex.props(styles.cell.handlers({ color: theme.colors[ColorToken.OnPrimary] })),
    sort: stylex.props(styles.sort.default),
    halfSort: stylex.props(styles.sort.half({ color: theme.colors[ColorToken.Primary] })),
    fullSort: stylex.props(styles.sort.full),
  };

  return (
    <div className={styled.cell.className} style={styled.cell.style}>
      {children}

      {/* header cell operations */}
      <span className={styled.handlers.className} style={styled.cell.style}>
        <span className={styled.sort.className} style={styled.sort.style}>
          {/* full */}
          <div className={styled.fullSort.className} style={styled.fullSort.style}>
            <SwapVert size="large" />
          </div>

          {/* half */}
          <div className={styled.halfSort.className} style={styled.halfSort.style}>
            <SwapVert size="large" />
          </div>
        </span>
      </span>
    </div>
  );
};

export default Cell;
