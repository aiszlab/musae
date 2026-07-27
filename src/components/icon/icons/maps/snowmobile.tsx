import React from "react";
import { withIcon } from "../../hoc";

const IconSnowmobile = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 22 16.5 C 22 17.05 21.55 17.5 21 17.5 H 20.83 L 18.63 15.3 C 20.58 14.87 22 13.9 22 12.5 C 22 11.5 14 4.5 14 4.5 H 11 V 6.5 H 13.25 L 14.05 7.22 L 11 9.5 L 2 8.5 L 0 12.5 L 4.54 13.86 L 1.05 15.74 C -0.77 16.72 -0.07 19.5 2 19.5 H 8 C 10.21 19.5 12 17.71 12 15.5 H 16 L 18 17.5 H 15 V 19.5 H 21 C 22.66 19.5 24 18.16 24 16.5 H 22ZM 8 17.5 H 2 L 7.25 14.67 L 10 15.5 C 10 16.6 9.11 17.5 8 17.5ZM 17 13.5 H 10.3 L 2.85 11.27 L 3.16 10.65 L 11.6 11.5 L 15.53 8.56 C 15.53 8.56 19.3 12 19.8 12.7 C 19.8 12.7 18.7 13.5 17 13.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSnowmobile;
