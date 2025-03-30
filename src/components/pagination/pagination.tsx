import React, { useMemo } from "react";
import type { PagiantionProps } from "../../types/pagination";
import { usePagiantion } from "./hooks";
import Item from "./item";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { Select } from "../select";
import type { Option } from "../../types/option";
import { useLocale } from "../../locale";
import { toFunction, unique } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";

const styles = $create({
  pagination: {
    display: "flex",
    columnGap: spacing.xxxxxsmall,
    listStyleType: "none",
    margin: spacing.none,
    padding: spacing.none,
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
  at: _at,
  onChange: _onChange,
  onPageSizeChange: _onPageSizeChange,
}: PagiantionProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const [locale] = useLocale("pagination");

  const {
    paginationItems,
    add,
    subtract,
    onChange,
    at,
    hasNext,
    hasPrev,
    pageSize,
    onPageSizeChange,
  } = usePagiantion({
    boundaries,
    pageSize: _pageSize,
    siblings,
    total,
    at: _at,
    onChange: _onChange,
    onPageSizeChange: _onPageSizeChange,
  });

  const styled = {
    pagination: $props(styles.pagination),
    sizer: $props(styles.sizer),
  };

  const sizeOptions = useMemo<Option[]>(() => {
    return unique(pageSizes).map((size) => ({
      value: size,
      label: toFunction(locale.size)(size),
    }));
  }, [locale, pageSizes]);

  return (
    <nav aria-label="pagination navigation" className={classNames.pagination}>
      <ul className={styled.pagination.className} style={styled.pagination.style}>
        {paginationItems.map((item) => (
          <li key={item}>
            <Item
              value={item}
              add={add}
              subtract={subtract}
              onClick={onChange}
              checked={at === item}
              hasNext={hasNext}
              hasPrev={hasPrev}
            />
          </li>
        ))}

        <li
          className={stringify(classNames.sizeSelector, styled.sizer.className)}
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
