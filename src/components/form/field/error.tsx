import { FieldError } from "react-hook-form";
import { ComponentProps } from "../../../types/element";
import React from "react";
import { useClassNames } from "../../config";
import { ComponentToken, FormClassToken } from "../../../utils/class-name";
import clsx from "clsx";
import { motion } from "framer-motion";
import stylex from "@stylexjs/stylex";
import { spacing } from "../../theme/tokens.stylex";

const styles = stylex.create({
  error: {
    paddingInline: spacing.large,
    paddingTop: spacing.xxsmall,
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

  return (
    <motion.div
      className={clsx(classNames[FormClassToken.FieldError], className, styled.className)}
      style={{
        ...style,
        ...styled.style,
      }}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.1 }}
    >
      {error?.message}
    </motion.div>
  );
};

export default Error;
