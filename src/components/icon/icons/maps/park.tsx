import React from "react";
import { withIcon } from "../../hoc";

const IconPark = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 17.94 12 H 20.34 L 11.94 0 L 3.6 12 H 5.94 L 1.26 19.2 H 9.564 V 24 H 14.304 V 19.2 H 22.74 L 17.94 12ZM 5.688 16.8 L 10.368 9.6 H 8.196 L 11.952 4.2 L 15.732 9.6 H 13.452 L 18.252 16.8 H 5.688Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPark;
