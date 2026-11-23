import React from "react";
import { act, render, screen } from "@testing-library/react";
import { Portal } from "../../portal";
import { ThemeProvider, useTheme } from "..";

it("uses the last requested mode for consecutive calls before React commits", () => {
  let toggle: ReturnType<typeof useTheme>["toggle"] = () => "light";
  function ThemeConsumer() {
    const theme = useTheme();
    toggle = theme.toggle;
    return <output>{theme.mode}</output>;
  }

  render(
    <ThemeProvider>
      <ThemeConsumer />
    </ThemeProvider>,
  );

  act(() => {
    expect(toggle(undefined, { duration: 0 })).toBe("dark");
    expect(toggle(undefined, { duration: 0 })).toBe("light");
    expect(toggle(undefined, { duration: 0 })).toBe("dark");
  });
  expect(screen.getByText("dark").textContent).toBe("dark");
  expect(document.documentElement.style.colorScheme).toBe("dark");
});

it("captures default portals with the theme and honors explicit containers", () => {
  const external = document.createElement("div");
  document.body.append(external);
  const { unmount } = render(
    <ThemeProvider>
      <div>App content</div>
      <Portal>Default overlay</Portal>
      <Portal container={external}>External overlay</Portal>
    </ThemeProvider>,
  );

  try {
    const shell = screen.getByText("App content").parentElement;
    expect(shell?.contains(screen.getByText("Default overlay"))).toBe(true);
    expect(external.textContent).toBe("External overlay");
  } finally {
    unmount();
    external.remove();
  }
});
