import { createColumnHelper } from "@tanstack/react-table";
import { useRef } from "react";
import { TableProps } from "./types";

/**
 * @description
 * use columns
 */
export const useColumns = <T>([columns]: [TableProps<T>["columns"]]) => {
  const { current: helper } = useRef(createColumnHelper<T>());
  return columns ? columns(helper) : [];
};
