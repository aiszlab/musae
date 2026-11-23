import React, {
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  ViewTransition,
  type ViewTransitionInstance,
} from "react";
import type { Props, Theme } from "../../types/theme";
import { Context, PALETTE, THEME_TRANSITION, useSwitchable } from "./hooks";
import { isUndefined, merge } from "@aiszlab/relax";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { PortalContainerContext } from "../../contexts/portal-container.context";
import { sizes } from "./tokens.stylex";

const styles = $create({
  shell: {
    minBlockSize: sizes.viewportHeight,
  },
});

/**
 * @zh 提供主题与全局配色，并对应用外壳执行主题切换动画
 * @en Provides theme colors and animates mode changes across the application shell
 */
const ThemeProvider = ({ theme: _theme, defaultMode, children }: Props) => {
  const theme = useMemo<Theme>(() => {
    if (!_theme) {
      return {
        palette: PALETTE,
      };
    }

    return merge(_theme, {
      palette: PALETTE,
    });
  }, [_theme]);

  const { mode, toggle, colors, update } = useSwitchable({ theme, defaultMode });
  const parentContainer = useContext(PortalContainerContext);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const backgroundColor = theme.palette.neutral[mode === "light" ? 100 : 0];

  useLayoutEffect(() => {
    if (!isUndefined(parentContainer)) return;

    const { style } = document.documentElement;
    const previousScheme = style.colorScheme;
    const previousBackground = style.backgroundColor;
    style.colorScheme = mode;
    style.backgroundColor = backgroundColor;
    const appliedBackground = style.backgroundColor;

    return () => {
      if (style.colorScheme === mode) style.colorScheme = previousScheme;
      if (style.backgroundColor === appliedBackground) style.backgroundColor = previousBackground;
    };
  }, [backgroundColor, mode, parentContainer]);

  const animateTheme = (instance: ViewTransitionInstance, types: string[]) => {
    if (!types.includes(THEME_TRANSITION) || !container || update.duration <= 0) return;

    const { x, y, duration } = update;
    const { left, top } = container.getBoundingClientRect();
    const { innerWidth, innerHeight } = container.ownerDocument.defaultView ?? window;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const center = `${x - left}px ${y - top}px`;
    const closed = `circle(0px at ${center})`;
    const open = `circle(${radius}px at ${center})`;
    const darkening = mode === "dark";
    const foreground = darkening ? instance.new : instance.old;
    const background = darkening ? instance.old : instance.new;

    for (const layer of [instance.group, foreground, background]) {
      for (const animation of layer.getAnimations()) animation.cancel();
    }

    const reveal = foreground.animate(
      { clipPath: darkening ? [closed, open] : [open, closed], zIndex: ["1", "1"] },
      { duration, easing: "ease-in", fill: "both" },
    );

    return () => reveal.cancel();
  };

  const shell = $props(styles.shell);

  return (
    <Context.Provider value={{ colors, mode, toggle }}>
      <PortalContainerContext.Provider value={container}>
        <ViewTransition
          default="none"
          update={{ default: "none", [THEME_TRANSITION]: "auto" }}
          onUpdate={animateTheme}
        >
          <div
            {...shell}
            data-musae-theme={mode}
            ref={setContainer}
            style={{ ...shell.style, backgroundColor, colorScheme: mode }}
          >
            {children}
          </div>
        </ViewTransition>
      </PortalContainerContext.Provider>
    </Context.Provider>
  );
};

export default ThemeProvider;
