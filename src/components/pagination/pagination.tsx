import React, { useMemo } from "react";
import type { PagiantionProps } from "./types";
import { usePagiantion } from "./hooks";
import Item from "./item";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { Select } from "../select";
import type { Option } from "../../types/option";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, PaginationClassToken } from "../../utils/class-name";

const styles = stylex.create({
  pagination: {
    display: "flex",
    columnGap: spacing.xxsmall,
  },
});

const Pagination = ({
  total = 0,
  siblings = 1,
  boundaries = 1,
  pageSize = 10,
  pageSizes = [10, 20, 50, 100],
}: PagiantionProps) => {
  const { paginationItems, add, subtract, changePage, page, hasNext, hasPrev } = usePagiantion({
    boundaries,
    pageSize,
    siblings,
    total,
  });
  const styled = stylex.props(styles.pagination);
  const classNames = useClassNames(ComponentToken.Pagination);

  const sizeOptions = useMemo<Option[]>(
    () =>
      Array.from(new Set(pageSizes)).map((size) => ({
        value: size,
        label: `${size} 条/页`,
      })),
    [pageSizes]
  );

  return (
    <nav aria-label="pagination navigation" className={classNames[PaginationClassToken.Pagination]}>
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

        <li className={classNames[PaginationClassToken.SizeSelector]}>
          <Select options={sizeOptions} value={pageSize} style={{ minWidth: 0 }} />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
