import styled from "@emotion/styled";
import { useClassNames } from "../config";
import { ClockClassToken, ComponentToken, withDot, withSelf } from "../../utils/class-name";

export const StyledWrapper = styled.div(() => {
  const classNames = useClassNames(ComponentToken.Clock);

  return {
    [withSelf(classNames[ClockClassToken.Clock])]: {
      display: "flex",

      [withDot(classNames[ClockClassToken.Column])]: {
        maxHeight: 200,
        overflow: "auto",
      },
    },
  };
});
