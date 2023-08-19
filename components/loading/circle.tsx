import styled from "@emotion/styled";
import { CircleRenderProps } from "./types";

const Circle = styled.circle((props: CircleRenderProps) => {
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
