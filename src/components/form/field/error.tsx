import { FieldError } from "react-hook-form";
import { ComponentProps } from "../../../types/element";
import React from "react";
import { useClassNames } from "../../config";
import { ComponentToken, FormClassToken } from "../../../utils/class-name";
import clsx from "clsx";
import { motion } from "framer-motion";

type Props = ComponentProps & {
  /**
   * @description
   * error
   */
  error?: FieldError;
};

const Error = ({ error, className, style }: Props) => {
  const classNames = useClassNames(ComponentToken.Form);

  return (
    <motion.div
      className={clsx(classNames[FormClassToken.FieldError], className)}
      style={style}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
    >
      {error?.message}
    </motion.div>
  );
};

export default Error;
