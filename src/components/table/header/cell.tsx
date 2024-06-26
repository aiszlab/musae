import React, { useContext, useMemo, type CSSProperties } from "react";
import { isUndefined, toFunction, useEvent } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../../theme/tokens.stylex";
import { useTheme } from "../../theme";
import { ColorToken } from "../../../utils/colors";
import { UnfoldMore } from "../../icon/icons";
import type { HeaderCellProps, SortDirection } from "../types";
import Context from "../context";

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

const Cell = ({ sortable = false, children: _children, value, sortDirections: _sortDirections }: HeaderCellProps) => {
  const { sortDescriptor, onSortChange } = useContext(Context);
  const children = toFunction(_children)();
  const theme = useTheme();

  // convert sort directions to usable
  const sortDirections = useMemo(() => {
    return _sortDirections.reduce((prev, item, index) => {
      return prev.set(item, _sortDirections[index + 1] ?? null);
    }, new Map<SortDirection, SortDirection>());
  }, [_sortDirections]);

  const sort = useMemo(() => {
    if (sortDescriptor?.key === value) {
      return sortDescriptor.direction;
    }
    return null;
  }, [sortDescriptor, value]);

  // sort handler
  const onSort = useEvent(() => {
    const _direction = sortDirections.get(sort);
    const __direction: SortDirection = isUndefined(_direction) ? "ascending" : _direction;

    onSortChange?.({
      key: value,
      direction: __direction,
    });
  });

  // only children, render directly
  if (!sortable) {
    return children;
  }

  const styled = {
    cell: stylex.props(styles.cell.default),
    handlers: stylex.props(styles.cell.handlers({ color: theme.colors[ColorToken.SurfaceContainerHighest] })),
    sort: stylex.props(styles.sort.default),

    fullSort: stylex.props(
      sort === "descending" &&
        styles.sort.checked({
          color: theme.colors[ColorToken.Primary],
        })
    ),

    halfSort: stylex.props(
      styles.sort.half,
      sort === "ascending" && styles.sort.checked({ color: theme.colors[ColorToken.Primary] })
    ),
  };

  return (
    <div className={styled.cell.className} style={styled.cell.style}>
      {children}

      {/* header cell operations */}
      <span className={styled.handlers.className} style={styled.handlers.style}>
        <span className={styled.sort.className} style={styled.sort.style} onClick={onSort}>
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
