import React from "react";
import { withIcon } from "../hocs";

const SwapHoriz = withIcon((props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24">
      <path d="M6.99 11L3 15L6.99 19V16H14V14H6.99V11ZM21 9L17.01 5V8H10V10H17.01V13L21 9Z" fill={props.color} />
    </svg>
  );
});

export default SwapHoriz;