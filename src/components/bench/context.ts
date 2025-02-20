import { using } from "@aiszlab/relax/react";

/**
 * @description class names
 */
export const CLASS_NAMES = {
  bench: "bench",
  heading: "bench__heading",
  header: "bench__header",
  trailing: "bench__header-trailing",
  sidebar: "bench__sidebar",
  expander: "bench__expander",
  main: "bench__main",
};

/**
 * @description global store
 */
export const useStore = using<{
  isCollapsed: boolean;
  collapse: VoidFunction;
  expand: VoidFunction;
}>((setState) => ({
  isCollapsed: false,
  collapse: () => setState((prev) => ({ ...prev, isCollapsed: true })),
  expand: () => setState((prev) => ({ ...prev, isCollapsed: false })),
}));
