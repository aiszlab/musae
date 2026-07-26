import React from "react";
import { withIcon } from "../../hoc";

const IconElectricBolt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.69 2.21042L4.33003 11.4904C3.69003 12.0704 4.05003 13.1404 4.91003 13.2204L13 14.0004L8.15003 20.7604C7.93003 21.0704 7.96003 21.5004 8.23003 21.7704C8.53003 22.0704 9.00003 22.0804 9.31003 21.7904L19.67 12.5104C20.31 11.9304 19.95 10.8604 19.09 10.7804L11 10.0004L15.85 3.24042C16.07 2.93042 16.04 2.50042 15.77 2.23042C15.47 1.93042 15 1.92042 14.69 2.21042Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconElectricBolt;
