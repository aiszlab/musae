import styled from "@emotion/styled";
import { useClassNames } from "../config";
import { CascaderClassToken, ComponentToken, withSelf } from "../../utils/class-name";

export const StyledOptions = styled.div(() => {
  const classNames = useClassNames(ComponentToken.Cascader);

  return {
    [withSelf(classNames[CascaderClassToken.Options])]: {
      display: "flex",
      columnGap: 4,
    },
  };
});
