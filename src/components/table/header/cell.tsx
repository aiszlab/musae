import React, { type CSSProperties } from "react";
import { toFunction, useControlledState } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../../theme/tokens.stylex";
import { useTheme } from "../../theme";
import { ColorToken } from "../../../utils/colors";
import { UnfoldMore } from "../../icon/icons";
import { HeaderCellProps } from "../types";

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
      userSelect: "none",
    }),
  }),

  sort: stylex.create({
    default: {
      position: "relative",
      cursor: "pointer",
    },

    half: {
      position: "absolute",
      insetBlockStart: 0,
      insetInlineStart: 0,
      height: sizes.half,
      overflow: "hidden",
    },

    checked: (props: { color: CSSProperties["color"] }) => ({
      color: props.color,
    }),
  }),
};

const DIRECTIONS = new Map<HeaderCellProps["sort"], HeaderCellProps["sort"]>([
  ["ascend", "descend"],
  ["descend", null],
]);

const Cell = ({ sortable = false, children: _children, sort: _sort }: HeaderCellProps) => {
  const children = toFunction(_children)();
  const [sort, setSort] = useControlledState(_sort);
  const theme = useTheme();

  const orderBy = () => {
    setSort(DIRECTIONS.get(sort) ?? "ascend");
  };

  // only children, render directly
  if (!sortable) {
    return children;
  }

  const styled = {
    cell: stylex.props(styles.cell.default),
    handlers: stylex.props(styles.cell.handlers({ color: theme.colors[ColorToken.SurfaceContainerHighest] })),
    sort: stylex.props(styles.sort.default),

    fullSort: stylex.props(
      sort === "descend" &&
        styles.sort.checked({
          color: theme.colors[ColorToken.Primary],
        })
    ),

    halfSort: stylex.props(
      styles.sort.half,
      sort === "ascend" && styles.sort.checked({ color: theme.colors[ColorToken.Primary] })
    ),
  };

  return (
    <div className={styled.cell.className} style={styled.cell.style}>
      {children}

      {/* header cell operations */}
      <span className={styled.handlers.className} style={styled.handlers.style}>
        <span className={styled.sort.className} style={styled.sort.style} onClick={orderBy}>
          {/* full */}
          <div className={styled.fullSort.className} style={styled.fullSort.style}>
            <UnfoldMore size="medium" />
          </div>

          {/* half */}
          {!!sort && (
            <div className={styled.halfSort.className} style={styled.halfSort.style}>
              <UnfoldMore size="medium" />
            </div>
          )}
        </span>
      </span>
    </div>
  );
};

export default Cell;
