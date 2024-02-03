import React from "react";
import { withIcon } from "../../hocs";

const Done = withIcon(({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M8.80001 15.8998L4.60001 11.6998L3.20001 13.0998L8.80001 18.6998L20.8 6.6998L19.4 5.2998L8.80001 15.8998Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Done;
