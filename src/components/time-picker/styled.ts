import styled from "@emotion/styled";
import { useClassNames } from "../config";
import { ComponentToken, TimePickerClassToken, withDot, withSelf } from "../../utils/class-name";
import { useValidTheme } from "../theme";

export const StyledInput = styled.input(() => {
  const classNames = useClassNames(ComponentToken.TimePicker);

  return {
    [withSelf(classNames[TimePickerClassToken.Input])]: {
      outline: "none",
      width: "100%",
    },
  };
});

export const StyledPanel = styled.div((props) => {
  const theme = useValidTheme(props.theme);
  const classNames = useClassNames(ComponentToken.TimePicker);

  return {
    [withSelf(classNames[TimePickerClassToken.Panel])]: {
      [withDot(classNames[TimePickerClassToken.PanelFooter])]: {
        borderTop: `1px solid ${theme.colorRole.outlineVariant}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBlock: 4,
        paddingInline: 12,
        minHeight: 40,
      },
    },
  };
});
