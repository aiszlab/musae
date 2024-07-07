import { type FieldError } from "react-hook-form";
import type { ComponentProps } from "../../../types/element";
import React, { type CSSProperties, useEffect } from "react";
import { ComponentToken, FormClassToken } from "../../../utils/class-name";
import clsx from "clsx";
import { useAnimate, usePresence } from "framer-motion";
import stylex from "@stylexjs/stylex";
import { spacing } from "../../theme/tokens.stylex";
import { useClassNames } from "../../../hooks/use-class-names";
import { useTheme } from "../../theme";
import { ColorToken } from "../../../utils/colors";

const styles = stylex.create({
  error: (props: { color: CSSProperties["color"] }) => ({
    paddingInline: spacing.large,
    color: props.color,
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
  const classNames = useClassNames(ComponentToken.Form);
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
      color: theme.colors[ColorToken.Error],
    })
  );

  return (
    <div
      className={clsx(classNames[FormClassToken.FieldError], className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
      ref={scope}
    >
      <p>{error?.message}</p>
    </div>
  );
};

export default Error;
