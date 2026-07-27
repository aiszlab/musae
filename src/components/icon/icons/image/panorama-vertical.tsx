import React from "react";
import { withIcon } from "../../hoc";

const IconPanoramaVertical = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.94 21.12C16.84 18.18 16.3 15.09 16.3 12C16.3 8.91 16.85 5.82 17.94 2.88C17.98 2.77 18 2.66 18 2.57C18 2.23 17.77 2 17.37 2H2.63C2.23 2 2 2.23 2 2.57C2 2.67 2.02 2.77 2.06 2.88C3.16 5.82 3.71 8.91 3.71 12C3.71 15.09 3.16 18.18 2.07 21.12C2.02 21.23 2 21.34 2 21.43C2 21.76 2.23 22 2.63 22H17.38C17.77 22 18.01 21.76 18.01 21.43C18 21.33 17.98 21.23 17.94 21.12ZM4.54 20C5.31 17.4 5.7 14.72 5.7 12C5.7 9.28 5.31 6.6 4.54 4H15.45C14.68 6.6 14.29 9.28 14.29 12C14.29 14.72 14.68 17.4 15.45 20H4.54Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPanoramaVertical;
