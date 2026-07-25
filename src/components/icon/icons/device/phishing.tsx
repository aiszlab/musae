import React from "react";
import { withIcon } from "../../hoc";

const Phishing = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.1579, 0) scale(1.2632)">
        <path
          d="M12 4.18V0H10V4.18C8.84 4.6 8 5.7 8 7C8 8.3 8.84 9.4 10 9.82V13C10 15.21 8.21 17 6 17C3.79 17 2 15.21 2 13V11.83L3.59 13.42L5 12L0 7V13C0 16.31 2.69 19 6 19C9.31 19 12 16.31 12 13V9.82C13.16 9.41 14 8.31 14 7C14 5.69 13.16 4.6 12 4.18ZM11 8C10.45 8 10 7.55 10 7C10 6.45 10.45 6 11 6C11.55 6 12 6.45 12 7C12 7.55 11.55 8 11 8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Phishing;
