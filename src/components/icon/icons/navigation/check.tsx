import React from "react";
import { withIcon } from "../../hoc";

const Check = withIcon(({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M8.79496 15.8749L4.62496 11.7049L3.20496 13.1149L8.79496 18.7049L20.795 6.70492L19.385 5.29492L8.79496 15.8749Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Check;
