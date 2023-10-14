import { useContext, useMemo } from "react";
import clsx from "clsx";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";

enum ClassName {
  Wrapper = "input-wrapper",
  FocusedWrapper = "input-wrapper-focused",
  InvalidWrapper = "input-wrapper-invalid",
}

/**
 * @description
 * class name with prefix
 */
export const useClassNames = () => {
  const { prefix } = useContext(Context);

  const classNames = useMemo(
    () => ({
      wrapper: withPrefix(prefix, ClassName.Wrapper),
      focusedWrapper: withPrefix(prefix, ClassName.FocusedWrapper),
      invalidWrapper: withPrefix(prefix, ClassName.InvalidWrapper),
    }),
    [prefix]
  );

  return classNames;
};

/**
 * @description
 * class name for input
 */
export const useStyles = ([className, isFocused, isInvalid]: [
  className: string | undefined,
  isFocused: boolean,
  isInvalid: boolean | undefined
]) => {
  const classNames = useClassNames();

  /// wrapper
  const wrapperClassName = useMemo(() => {
    return clsx([
      classNames.wrapper,
      className,
      {
        [classNames.focusedWrapper]: isFocused,
        [classNames.invalidWrapper]: isInvalid,
      },
    ]);
  }, [className, isFocused, isInvalid, ...Object.values(classNames)]);

  return {
    wrapperClassName,
  };
};
