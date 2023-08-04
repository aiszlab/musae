import styled from "@emotion/styled";
import type { LabelProps } from "./types";

const Label = styled.label<LabelProps>((props) => {
  const { isFocused, isNotEmpty } = props;

  return {
    position: "absolute",
    display: "block",
    flexDirection: "column",
    padding: 2,
    zIndex: 3,

    transition: "transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    ...(isFocused || isNotEmpty
      ? {
          transform: "translate(8px, -28px) scale(0.75)",
        }
      : {
          transform: "translate(8px) scale(1)",
        }),
  };
});

export default Label;
