import React from "react";
import { withIcon } from "../../hoc";

const MedicalInformation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M18 5H13V2C13 0.9 12.1 0 11 0H9C7.9 0 7 0.9 7 2V5H2C0.9 5 0 5.9 0 7V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V7C20 5.9 19.1 5 18 5ZM9 2H11V7H9V2ZM18 18H2V7H7C7 8.1 7.9 9 9 9H11C12.1 9 13 8.1 13 7H18V18ZM9 14H7V16H5V14H3V12H5V10H7V12H9V14ZM11 12.5V11H17V12.5H11ZM11 15.5V14H15V15.5H11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MedicalInformation;
