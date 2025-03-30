import { MouseEvent, createContext, useContext, useMemo, useRef, useState } from "react";
import type { Palette, ContextValue, Theme, Mode } from "../../types/theme";
import { toColorRoles } from "../../utils/color-role";
import { isFunction, useEvent, useMounted } from "@aiszlab/relax";
import { $create, $props } from "../../utils/styles";
import { toClassList } from "../../utils/styles";
import { Observable, type Subscriber, distinctUntilChanged } from "rxjs";
import { positions } from "./tokens.stylex";

export const PALETTE: Readonly<Palette> = {
  primary: {
    "0": "#000000",
    "10": "#21005D",
    "20": "#381E72",
    "30": "#4F378B",
    "40": "#6750A4",
    "50": "#7F67BE",
    "60": "#9A82DB",
    "70": "#B69DF8",
    "80": "#D0BCFF",
    "90": "#EADDFF",
    "95": "#F6EDFF",
    "99": "#FFFBFE",
    "100": "#FFF",
  },
  secondary: {
    "0": "#000000",
    "10": "#1D192B",
    "20": "#332D41",
    "30": "#4A4458",
    "40": "#625B71",
    "50": "#7A7289",
    "60": "#958DA5",
    "70": "#B0A7C0",
    "80": "#CCC2DC",
    "90": "#E8DEF8",
    "95": "#F6EDFF",
    "99": "#FFFBFE",
    "100": "#FFF",
  },
  tertiary: {
    "0": "#000000",
    "10": "#31111D",
    "20": "#492532",
    "30": "#633B48",
    "40": "#7D5260",
    "50": "#986977",
    "60": "#B58392",
    "70": "#D29DAC",
    "80": "#EFB8C8",
    "90": "#FFD8E4",
    "95": "#FFECF1",
    "99": "#FFFBFA",
    "100": "#FFF",
  },
  error: {
    "0": "#000000",
    "10": "#410E0B",
    "20": "#601410",
    "30": "#8C1D18",
    "40": "#B3261E",
    "50": "#DC362E",
    "60": "#E46962",
    "70": "#EC928E",
    "80": "#F2B8B5",
    "90": "#F9DEDC",
    "95": "#FCEEEE",
    "99": "#FFFBF9",
    "100": "#FFF",
  },
  neutral: {
    "0": "#000000",
    "10": "#1D1B20",
    "20": "#48464C",
    "30": "#48464C",
    "40": "#605D64",
    "50": "#79767D",
    "60": "#938F96",
    "70": "#AEA9B1",
    "80": "#CAC5CD",
    "90": "#E6E0E9",
    "95": "#F5EFF7",
    "99": "#FFFBFE",
    "100": "#FFF",
  },
  neutralVariant: {
    "0": "#000000",
    "10": "#1D1A22",
    "20": "#322F37",
    "30": "#49454F",
    "40": "#605D66",
    "50": "#79747E",
    "60": "#938F99",
    "70": "#AEA9B4",
    "80": "#CAC4D0",
    "90": "#E7E0EC",
    "95": "#F5EEFA",
    "99": "#FFFBFE",
    "100": "#FFF",
  },
  success: {
    "0": "#36c450",
    "100": "#34be4d",
  },
  warning: {
    "0": "#ffce22",
    "100": "#ffce22",
  },
};

const styles = $create({
  default: {
    "::view-transition-old(root)": {
      animationName: "none",
      mixBlendMode: "normal",
    },

    "::view-transition-new(root)": {
      animationName: "none",
      mixBlendMode: "normal",
    },
  },

  light: {
    colorScheme: "light",

    "::view-transition-old(root)": {
      zIndex: positions.max,
    },

    "::view-transition-new(root)": {
      zIndex: positions.min,
    },
  },

  dark: {
    colorScheme: "dark",

    "::view-transition-old(root)": {
      zIndex: positions.min,
    },

    "::view-transition-new(root)": {
      zIndex: positions.max,
    },
  },
});

/**
 * @description
 * theme context
 */
export const Context = createContext<ContextValue>({
  colors: toColorRoles(PALETTE, "light"),
  mode: "light",
  toggle: () => void 0,
});

/**
 * @author murukal
 *
 * @description
 * hook wrapper for emotion theme hook
 * because emotion theme has the default value
 * but the default value can not be changed
 * set the preset theme for musae ui component
 */
export const useTheme = () => {
  return useContext(Context);
};

/**
 * @description
 * inject css names and styles into html element
 * for animations
 */
export const useSwitchable = ({ theme }: { theme: Theme }) => {
  const [mode, setMode] = useState<Mode>("light");
  const isDark = mode === "dark";
  const trigger = useRef<Subscriber<Mode> | null>(null);
  const colors = useMemo(() => toColorRoles(theme.palette, mode), [mode, theme.palette]);

  const styled = {
    default: $props(styles.default),
    light: $props(styles.light),
    dark: $props(styles.dark),
  };

  const repaint = useEvent((nextMode: Mode) => {
    const _isDark = nextMode === "dark";
    const _usingMode: Mode = _isDark ? "light" : "dark";

    document.documentElement.classList.remove(...toClassList(styled[_usingMode].className));
    document.documentElement.classList.add(...toClassList(styled[nextMode].className));

    document.documentElement.style.backgroundColor = _isDark
      ? theme.palette.neutral[0]
      : theme.palette.neutral[100];
  });

  useMounted(() => {
    // set default class names
    document.documentElement.classList.add(...toClassList(styled.default.className));

    new Observable<Mode>((subscriber) => {
      trigger.current = subscriber;
    })
      .pipe(distinctUntilChanged())
      .subscribe((_mode) => {
        repaint(_mode);
        setMode(_mode);
      });
  });

  // dark, light mode switch
  const toggle = useEvent((event?: MouseEvent) => {
    const _toMode = isDark ? "light" : "dark";

    // dom not support animation
    if (!isFunction(document.startViewTransition)) {
      trigger.current?.next(_toMode);
      return;
    }

    const animation = document.startViewTransition(() => {
      trigger.current?.next(_toMode);
    });

    animation.ready.then(() => {
      const x = event?.clientX ?? 0;
      const y = event?.clientY ?? 0;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`];

      document.documentElement.animate(
        { clipPath: isDark ? clipPath.reverse() : clipPath },
        {
          duration: 300,
          easing: "ease-in",
          pseudoElement: isDark ? "::view-transition-old(root)" : "::view-transition-new(root)",
        },
      );
    });
  });

  return {
    mode,
    toggle,
    colors,
  };
};
