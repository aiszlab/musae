import { type FieldError } from "react-hook-form";
import type { ComponentProps } from "musae/types/element";
import React, { type CSSProperties, useEffect } from "react";
import { FormClassToken } from "../../../utils/class-name";
import { stringify } from "@aiszlab/relax/class-name";
import { useAnimate, usePresence } from "framer-motion";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../../../hooks/use-class-names";
import { useTheme } from "../../theme";
import { spacing } from "../../theme/tokens.stylex";

const styles = stylex.create({
  error: (props: { color: CSSProperties["color"] }) => ({
    color: props.color,
    marginBlock: spacing.xxxsmall,
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
  const classNames = useClassNames("form");
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
      className={stringify(classNames[FormClassToken.FieldError], className, styled.className)}
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
