import styled from "@emotion/styled";
import { CircleProps } from "./types";

const Circle = styled.circle((props: CircleProps) => {
  return {
    animationName: props.animationName,
    animationDuration: "2s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",

    fill: "none",
    strokeLinecap: "round",
  };
});

export default Circle;
