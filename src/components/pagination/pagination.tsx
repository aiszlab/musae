import React, { useMemo } from "react";
import type { PagiantionProps } from "./types";
import { usePagiantion } from "./hooks";
import Item from "./item";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { Select } from "../select";
import type { Option } from "../../types/option";
import { useClassNames } from "../../hooks/use-class-names";
import { PaginationClassToken } from "../../utils/class-name";
import { ComponentToken } from "../../utils/component-token";
import { useLocale } from "../../locale";
import { toFunction, clsx } from "@aiszlab/relax";

const styles = stylex.create({
  pagination: {
    display: "flex",
    columnGap: spacing.xxsmall,
  },

  sizer: {
    display: "flex",
    alignItems: "center",
  },
});

const Pagination = ({
  total = 0,
  siblings = 1,
  boundaries = 1,
  pageSize: _pageSize,
  pageSizes = [10, 20, 50, 100],
}: PagiantionProps) => {
  const {
    paginationItems,
    add,
    subtract,
    changePage,
    page,
    hasNext,
    hasPrev,
    pageSize,
    onPageSizeChange,
  } = usePagiantion({
    boundaries,
    pageSize: _pageSize,
    siblings,
    total,
  });
  const styled = {
    pagination: stylex.props(styles.pagination),
    sizer: stylex.props(styles.sizer),
  };
  const classNames = useClassNames(ComponentToken.Pagination);
  const [locale] = useLocale(ComponentToken.Pagination);

  const sizeOptions = useMemo<Option[]>(
    () =>
      Array.from(new Set(pageSizes)).map((size) => ({
        value: size,
        label: toFunction(locale.size)(size),
      })),
    [locale, pageSizes],
  );

  return (
    <nav aria-label="pagination navigation" className={classNames[PaginationClassToken.Pagination]}>
      <ul className={styled.pagination.className} style={styled.pagination.style}>
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

        <li
          className={clsx(classNames[PaginationClassToken.SizeSelector], styled.sizer.className)}
          style={styled.sizer.style}
        >
          <Select
            options={sizeOptions}
            value={pageSize}
            style={{ minWidth: 0 }}
            onChange={onPageSizeChange}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
