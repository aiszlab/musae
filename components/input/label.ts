import styled from "@emotion/styled";
import { LabelProps } from "./types";

const Label = styled.label<LabelProps>((props) => {
  const { isFocused, hasPlaceholder } = props;

  return {
    position: "absolute",
    display: "block",
    flexDirection: "column",
    padding: 2,

    transition: "transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    ...(isFocused
      ? {
          transform: "translate(8px, -28px) scale(0.75)",
        }
      : {
          transform: "translate(8px) scale(1)",
        }),
  };
});

export default Label;
