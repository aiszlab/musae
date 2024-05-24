import { FieldError } from "react-hook-form";
import { ComponentProps } from "../../../types/element";
import React, { useEffect } from "react";
import { ComponentToken, FormClassToken } from "../../../utils/class-name";
import clsx from "clsx";
import { useAnimate, usePresence } from "framer-motion";
import stylex from "@stylexjs/stylex";
import { spacing } from "../../theme/tokens.stylex";
import { useClassNames } from "../../../hooks/use-class-names";

const styles = stylex.create({
  error: {
    paddingInline: spacing.large,
    paddingTop: spacing.xxsmall,
    height: 0,
  },
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
  const styled = stylex.props(styles.error);
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      const enter = async () => {
        await animate(
          scope.current,
          {
            height: "auto",
          },
          {
            duration: 0.1,
          }
        );
      };

      enter();
      return;
    }

    const exit = async () => {
      await animate(
        scope.current,
        {
          height: 0,
        },
        {
          duration: 0.1,
        }
      );

      safeToRemove();
    };
    exit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent]);

  return (
    <div
      className={clsx(classNames[FormClassToken.FieldError], className, styled.className)}
      style={{
        ...style,
        ...styled.style,
      }}
      ref={scope}
    >
      {error?.message}
    </div>
  );
};

export default Error;
