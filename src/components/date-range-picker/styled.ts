import styled from "@emotion/styled";
import { useClassNames } from "../config";
import { ComponentToken, DateRangePickerClassToken, withDot, withSelf } from "../../utils/class-name";

export const StyledWrapper = styled.div(() => {
  const classNames = useClassNames(ComponentToken.DateRangePicker);

  return {
    [withSelf(classNames[DateRangePickerClassToken.Picker])]: {
      flex: 1,
      display: "flex",
      columnGap: 8,
      alignItems: "center",

      [withDot(classNames[DateRangePickerClassToken.Input])]: {
        flex: 1,
      },
    },
  };
});
