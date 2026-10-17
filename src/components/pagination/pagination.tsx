import styles from "./styles";
import React, { useMemo } from "react";
import type { PagiantionProps } from "../../types/pagination";
import { usePagiantion } from "./hooks";
import Item from "./item";
import { props as $props } from "@stylexjs/stylex";
import { Select } from "../select";
import type { Option } from "../../types/option";
import { useLocale } from "../../locale";
import { toFunction, unique } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";
import { $body } from "../theme/theme";

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

  const { paginationItems, onChange, at, hasNext, hasPrev, pageSize, onPageSizeChange } =
    usePagiantion({
      boundaries,
      pageSize: _pageSize,
      siblings,
      total,
      at: _at,
      onChange: _onChange,
      onPageSizeChange: _onPageSizeChange,
    });

  const styled = {
    pagination: $props(styles.pagination.base),
    sizer: $props(styles.pagination.sizer),
    range: $props(styles.pagination.range, $body.small),
  };
  const pages = Math.max(1, Math.ceil(total / Math.max(1, pageSize)));

  const sizeOptions = useMemo<Option[]>(() => {
    return unique(pageSizes).map((size) => ({
      value: size,
      label: toFunction(locale.size)(size),
    }));
  }, [locale, pageSizes]);

  return (
    <nav aria-label="pagination navigation" className={classNames.pagination}>
      <ul className={styled.pagination.className} style={styled.pagination.style}>
        <li className={styled.range.className} style={styled.range.style}>
          {locale.range(
            total === 0 ? 0 : Math.min(total, (at - 1) * pageSize + 1),
            Math.min(at * pageSize, total),
            total,
          )}
        </li>

        {paginationItems.map((item) => (
          <li key={item}>
            <Item
              value={item}
              add={(step = 1) => onChange(Math.min(pages, at + step))}
              subtract={(step = 1) => onChange(Math.max(1, at - step))}
              onClick={onChange}
              checked={at === item}
              hasNext={hasNext}
              hasPrev={hasPrev}
            />
          </li>
        ))}

        {sizeOptions.length > 0 && (
          <li
            className={stringify(classNames.sizeSelector, styled.sizer.className)}
            style={styled.sizer.style}
          >
            <Select options={sizeOptions} value={pageSize} onChange={onPageSizeChange} />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
