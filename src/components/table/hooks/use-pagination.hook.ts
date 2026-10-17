import { useMemo } from "react";
import type { TableProps } from "../../../types/table";
import { isNull, useControlledState, useEvent } from "@aiszlab/relax";
import type { PaginationState } from "@tanstack/react-table";

type UsingPagination = Pick<TableProps<unknown>, "pagination">;

const usePagination = ({ pagination }: UsingPagination) => {
  const _pagination = useMemo(() => {
    if (pagination === false) {
      return null;
    }

    if (isNull(pagination)) {
      return null;
    }

    return pagination ?? {};
  }, []);

  const isPaginationHidden = !_pagination;

  const [at, setAt] = useControlledState(_pagination?.at, { defaultState: 1 });
  const [pageSize, setPageSize] = useControlledState(_pagination?.pageSize, { defaultState: 10 });

  const paginationState = useMemo<PaginationState>(
    () => ({
      pageIndex: at,
      pageSize,
    }),
    [at, pageSize],
  );

  const changeAt = useEvent((_at: number) => {
    setAt(_at);

    if (_at === at) {
      return;
    }

    _pagination?.onChange?.(_at);
  });

  const changePageSize = useEvent((_pageSize: number) => {
    setPageSize(_pageSize);

    if (_pageSize === pageSize) {
      return;
    }

    _pagination?.onPageSizeChange?.(_pageSize);
  });

  return {
    pagination: paginationState,
    changeAt,
    changePageSize,
    isPaginationHidden,
    paginationProps: _pagination,
  };
};

export { usePagination };
