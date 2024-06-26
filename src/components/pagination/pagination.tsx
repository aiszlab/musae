import React from "react";
import type { PagiantionProps } from "./types";
import { usePagiantion } from "./hooks";
import Item from "./item";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  pagination: {
    display: "flex",
    columnGap: spacing.xxsmall,
  },
});

const Pagination = ({ total = 0, siblings = 1, boundaries = 1, pageSize = 0 }: PagiantionProps) => {
  const { paginationItems, add, subtract, changePage, page, hasNext, hasPrev } = usePagiantion({
    boundaries,
    pageSize,
    siblings,
    total,
  });
  const styled = stylex.props(styles.pagination);

  return (
    <nav aria-label="pagination navigation">
      <ul className={styled.className} style={styled.style}>
        {paginationItems.map((item) => (
          <li key={item}>
            <Item
              value={item}
              add={add}
              subtract={subtract}
              onPageChange={changePage}
              checked={page === item}
              hasNext={hasNext}
              hasPrev={hasPrev}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
