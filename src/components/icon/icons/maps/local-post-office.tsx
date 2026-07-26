import React from "react";
import { withIcon } from "../../hoc";

const IconLocalPostOffice = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 24 4.8 C 24 3.48 22.92 2.4 21.6 2.4 H 2.4 C 1.08 2.4 0 3.48 0 4.8 V 19.2 C 0 20.52 1.08 21.6 2.4 21.6 H 21.6 C 22.92 21.6 24 20.52 24 19.2 V 4.8ZM 21.6 4.8 L 12 10.8 L 2.4 4.8 H 21.6ZM 21.6 19.2 H 2.4 V 7.2 L 12 13.2 L 21.6 7.2 V 19.2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalPostOffice;
