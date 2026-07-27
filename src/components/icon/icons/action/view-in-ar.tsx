import React from "react";
import { withIcon } from "../../hoc";

const IconViewInAr = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 1V2H22.5V6.5H23.5V1H18ZM18 22.5H22.5V18H23.5V23.5H18V22.5ZM1 18H2V22.5H6.5V23.5H1V18ZM1 1H6.5V2H2V6.5H1V1ZM12 7.32L17.16 10.28L12 13.28L6.84 10.28L12 7.32ZM12 2.5L4 7.12V16.93L12 21.55L20 16.93V7.12L12 2.5ZM10.5 11.98L6.5 9.67V14.87L10.5 17.18V11.98ZM7.5 16.23L12 18.83L16.5 16.23L12 19.33L7.5 16.23ZM13.5 17.18L17.5 14.87V9.67L13.5 11.98V17.18Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewInAr;
