import type { ComponentProps } from "../../../types/element";
import React, { type ReactNode, useContext, useRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { usePresence, animate } from "motion/react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../../theme/tokens.stylex";
import { useAsyncEffect } from "@aiszlab/relax";
import Context from "../context";
import { type ThemeColorVariable, useThemeColorVars } from "src/hooks/use-theme-color-vars";

const styles = $create({
  error: {
    color: "var(--color-error)" satisfies ThemeColorVariable,
    marginBlock: spacing.xxxxxsmall,
    height: 0,
    overflow: "hidden",
  },
});

type Props = ComponentProps & {
  /**
   * @description
   * error
   */
  children?: ReactNode;
};

const Error = ({ children, className, style }: Props) => {
  const { classNames } = useContext(Context);
  const [isPresent, safeToRemove] = usePresence();
  const ref = useRef<HTMLDivElement>(null);
  const _themeColorVars = useThemeColorVars(["error"]);

  useAsyncEffect(async () => {
    const _element = ref.current;
    if (!_element) return;

    if (isPresent) {
      animate(_element, { height: "auto" }, { duration: 0.2 });
      return;
    }

    animate(_element, { height: 0 }).then(() => {
      safeToRemove();
    });
  }, [isPresent]);

  const styled = $props(styles.error);

  return (
    <div
      className={stringify(classNames.fieldError, className, styled.className)}
      style={{
        ...styled.style,
        ..._themeColorVars,
        ...style,
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Error;
