import { type FieldError } from "react-hook-form";
import type { ComponentProps } from "../../../types/element";
import React, { type CSSProperties, useContext, useEffect } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { useAnimate, usePresence } from "framer-motion";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../../theme";
import { spacing } from "../../theme/tokens.stylex";
import { Context } from "../context";

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
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const [isPresent, safeToRemove] = usePresence();
  const theme = useTheme();

  useEffect(() => {
    if (isPresent) {
      animate(scope.current, { height: "auto" }, { duration: 0.2 });
      return;
    }

    animate(scope.current, { height: 0 }).then(() => {
      safeToRemove();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      ref={scope}
    >
      {error?.message}
    </div>
  );
};

export default Error;
