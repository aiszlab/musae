import React from "react";
import { withIcon } from "../../hoc";

const IconAlertSvg1 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.01 19.51C7.01 20.61 7.9 21.5 9 21.5C10.1 21.5 10.99 20.61 10.99 19.51H7.01ZM9 4.5C11.76 4.5 14 6.74 14 9.5V16.5H4V9.5C4 6.74 6.24 4.5 9 4.5ZM9 0C8.17 0 7.5 0.67 7.5 1.5V2.67C4.36 3.35 2 6.15 2 9.5V15.5L0 17.5V18.5H18V17.5L16 15.5V9.5C16 6.15 13.64 3.35 10.5 2.67V1.5C10.5 0.67 9.83 0 9 0ZM10 6.5H8V9.5H5V11.5H8V14.5H10V11.5H13V9.5H10V6.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAlertSvg1;
