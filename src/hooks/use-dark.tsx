import stylex from "@stylexjs/stylex";
import { MouseEvent, useCallback } from "react";
import { useTheme } from "../components/theme";
import { useDefault, useMounted, isFunction } from "@aiszlab/relax";

const styles = stylex.create({
  default: {
    "::view-transition-old(root)": {
      animation: "none",
      mixBlendMode: "normal",
    },

    "::view-transition-new(root)": {
      animation: "none",
      mixBlendMode: "normal",
    },
  },

  light: {
    "::view-transition-old(root)": {
      zIndex: 999,
    },

    "::view-transition-new(root)": {
      zIndex: 1,
    },
  },

  dark: {
    "::view-transition-old(root)": {
      zIndex: 1,
    },

    "::view-transition-new(root)": {
      zIndex: 999,
    },
  },
});

export const useDark = () => {
  const { mode, setMode } = useTheme();
  const isDark = mode === "dark";

  const styled = useDefault(() => ({
    default: (stylex.attrs(styles.default).class ?? "").split(" "),
    light: (stylex.attrs(styles.light).class ?? "").split(" "),
    dark: (stylex.attrs(styles.dark).class ?? "").split(" "),
  }));

  useMounted(() => {
    document.documentElement.classList.add(...styled.default);
    document.documentElement.classList.add(...styled[mode]);
  });

  const toggle = useCallback(
    async (event: MouseEvent<HTMLElement, MouseEvent>) => {
      if (!(event && isFunction(document.startViewTransition))) {
        setMode((_mode) => (_mode === "light" ? "dark" : "light"));
        return;
      }

      const x = event.clientX;
      const y = event.clientY;
      const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

      const animation = document.startViewTransition(() => {
        document.documentElement.classList.remove(...(isDark ? styled.dark : styled.light));
        document.documentElement.classList.add(...(isDark ? styled.light : styled.dark));
      });

      animation.ready.then(() => {
        setMode((_mode) => (_mode === "light" ? "dark" : "light"));

        const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`];
        document.documentElement.animate(
          { clipPath: isDark ? [...clipPath].reverse() : clipPath },
          {
            duration: 500,
            easing: "ease-in",
            pseudoElement: isDark ? "::view-transition-old(root)" : "::view-transition-new(root)",
          }
        );
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDark]
  );

  return { toggle };
};
