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

const Pagination = (props: PagiantionProps) => {
  const { paginationItems, next, prev, changePage } = usePagiantion(props);
  const styled = stylex.props(styles.pagination);

  return (
    <nav aria-label="pagination navigation">
      <ul className={styled.className} style={styled.style}>
        {paginationItems.map((item) => (
          <Item key={item} value={item} next={next} prev={prev} onPageChange={changePage} />
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
