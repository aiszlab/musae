import React from "react";
import { withIcon } from "../../hoc";

const IconBrightness3 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8.7 4.91C11.25 6.24 13 8.92 13 12C13 15.08 11.25 17.76 8.7 19.09C10.16 17.09 11 14.63 11 12C11 9.37 10.16 6.91 8.7 4.91ZM5 2C3.95 2 2.95 2.16 2 2.46C6.06 3.73 9 7.52 9 12C9 16.48 6.06 20.27 2 21.54C2.95 21.84 3.95 22 5 22C10.52 22 15 17.52 15 12C15 6.48 10.52 2 5 2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBrightness3;
