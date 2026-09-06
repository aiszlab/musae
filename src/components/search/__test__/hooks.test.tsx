import { act, renderHook } from "@testing-library/react";
import type { SearchView } from "../../../types/search";
import { getAdjacentEnabledKey, useResolvedSearchView } from "../hooks";

test("auto Search View follows the mobile media query and explicit views bypass it", () => {
  let matches = false;
  const listeners = new Set<() => void>();
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: jest.fn(() => ({
      matches,
      media: "(max-width: 904px)",
      onchange: null,
      addEventListener: (_type: string, listener: () => void) => listeners.add(listener),
      removeEventListener: (_type: string, listener: () => void) => listeners.delete(listener),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  const { result, rerender } = renderHook(
    ({ view }: { view: SearchView }) => useResolvedSearchView(view),
    {
      initialProps: { view: "auto" as SearchView },
    },
  );
  expect(result.current).toBe("modal");

  act(() => {
    matches = true;
    listeners.forEach((listener) => listener());
  });
  expect(result.current).toBe("full-screen");

  rerender({ view: "modal" });
  expect(result.current).toBe("modal");
});

test("navigation wraps across enabled Search items and skips disabled items", () => {
  const items = [
    { key: "a", value: "a", label: "A" },
    { key: "b", value: "b", label: "B", disabled: true },
    { key: "c", value: "c", label: "C" },
  ];

  expect(getAdjacentEnabledKey(items, undefined, 1)).toBe("a");
  expect(getAdjacentEnabledKey(items, "a", 1)).toBe("c");
  expect(getAdjacentEnabledKey(items, "c", 1)).toBe("a");
  expect(getAdjacentEnabledKey(items, "a", -1)).toBe("c");
  expect(getAdjacentEnabledKey(items, "removed", 1)).toBe("a");
  expect(items).toEqual([
    { key: "a", value: "a", label: "A" },
    { key: "b", value: "b", label: "B", disabled: true },
    { key: "c", value: "c", label: "C" },
  ]);
});

test("navigation returns undefined when no Search items are enabled", () => {
  expect(
    getAdjacentEnabledKey(
      [
        { key: "a", value: "a", label: "A", disabled: true },
        { key: "b", value: "b", label: "B", disabled: true },
      ],
      undefined,
      1,
    ),
  ).toBeUndefined();
});
