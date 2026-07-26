import React from "react";
import { withIcon } from "../../hoc";

const IconNearMe = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19.0262 4.9732 L 13.373 18.4795 L 11.1864 12.813 L 10.0931 12.3864 L 5.5199 10.6131 L 19.0262 4.9732ZM 23.9994 0 L 0 10.0397 V 11.3464 L 9.1198 14.8796 L 12.6397 23.9994 H 13.9463 L 23.9994 0Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNearMe;
