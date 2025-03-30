import React, { useMemo, type CSSProperties } from "react";
import { toFunction, useEvent } from "@aiszlab/relax";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../../theme/tokens.stylex";
import { useTheme } from "../../theme";
import { UnfoldMore } from "../../icon/icons";
import type { HeaderCellProps, SortDirection } from "../../../types/table";
import { useTable } from "../context";

const styles = {
  cell: $create({
    default: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    handlers: (props: { color: CSSProperties["color"] }) => ({
      display: "inline-flex",
      flexDirection: "row",
      gap: spacing.xxxxxsmall,
      color: props.color,
      userSelect: "none",
    }),
  }),

  sort: $create({
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

const Cell = ({
  sortable = false,
  children: _children,
  value,
  sortDirections: _sortDirections,
}: HeaderCellProps) => {
  const { sortDescriptor, onSortChange } = useTable();
  const children = toFunction(_children)();
  const theme = useTheme();

  // convert sort directions to usable
  const sortDirections = useMemo(() => {
    return _sortDirections.reduce((prev, item, index) => {
      return prev.set(item, _sortDirections[index + 1] ?? null);
    }, new Map<SortDirection, SortDirection>());
  }, [_sortDirections]);

  const sort = useMemo(() => {
    if (!sortDescriptor) return null;
    if (sortDescriptor.key !== value) return null;
    return sortDescriptor.direction;
  }, [sortDescriptor, value]);

  // sort handler
  const onSort = useEvent(() => {
    if (!value) return;

    onSortChange?.({
      key: value,
      direction: sortDirections.get(sort) ?? "ascending",
    });
  });

  // only children, render directly
  if (!sortable) {
    return children;
  }

  const styled = {
    cell: $props(styles.cell.default),
    handlers: $props(styles.cell.handlers({ color: theme.colors["surface-container-highest"] })),
    sort: $props(styles.sort.default),

    fullSort: $props(
      sort === "descending" &&
        styles.sort.checked({
          color: theme.colors.primary,
        }),
    ),

    halfSort: $props(
      styles.sort.half,
      sort === "ascending" && styles.sort.checked({ color: theme.colors.primary }),
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
