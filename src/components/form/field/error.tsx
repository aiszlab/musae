import { type FieldError } from "react-hook-form";
import type { ComponentProps } from "../../../types/element";
import React, { type CSSProperties, useContext, useEffect, useRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { usePresence } from "motion/react";
import { animate } from "motion/mini";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../../theme";
import { spacing } from "../../theme/tokens.stylex";
import { Context } from "../context";
import { useAsyncEffect } from "@aiszlab/relax";

const styles = stylex.create({
  error: (props: { color: CSSProperties["color"] }) => ({
    color: props.color,
    marginBlock: spacing.xxxxxsmall,
    height: 0,
    overflow: "hidden",
  }),
});

type Props = ComponentProps & {
  /**
   * @description
   * error
   */
  error?: FieldError;
};

const Error = ({ error, className, style }: Props) => {
  const { classNames } = useContext(Context);
  const [isPresent, safeToRemove] = usePresence();
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);

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

  const styled = stylex.props(
    styles.error({
      color: theme.colors.error,
    }),
  );

  return (
    <div
      className={stringify(classNames.fieldError, className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
      ref={ref}
    >
      {error?.message}
    </div>
  );
};

export default Error;
