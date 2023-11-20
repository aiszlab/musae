import styled from "@emotion/styled";
import { useContext } from "react";
import { Context } from "../config";
import { CascaderClassToken, ComponentToken, withSelf } from "../../utils/class-name";

export const StyledOptions = styled.div(() => {
  const classNames = useContext(Context).classNames[ComponentToken.Cascader];

  return {
    [withSelf(classNames[CascaderClassToken.Options])]: {
      display: "flex",
      columnGap: 4,
    },
  };
});
