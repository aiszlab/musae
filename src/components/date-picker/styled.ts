import styled from "@emotion/styled";
import { useClassNames } from "../config";
import { ComponentToken, DatePickerClassToken, withSelf } from "../../utils/class-name";

export const StyledInput = styled.input(() => {
  const classNames = useClassNames(ComponentToken.DatePicker);

  return {
    [withSelf(classNames[DatePickerClassToken.Input])]: {
      outline: "none",
      width: "100%",
    },
  };
});
