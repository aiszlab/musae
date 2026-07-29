import React from "react";
import { withIcon } from "../../hoc";

const IconMedicalInformation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 7H15V4C15 2.9 14.1 2 13 2H11C9.9 2 9 2.9 9 4V7H4C2.9 7 2 7.9 2 9V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V9C22 7.9 21.1 7 20 7ZM11 4H13V9H11V4ZM20 20H4V9H9C9 10.1 9.9 11 11 11H13C14.1 11 15 10.1 15 9H20V20ZM11 16H9V18H7V16H5V14H7V12H9V14H11V16ZM13 14.5V13H19V14.5H13ZM13 17.5V16H17V17.5H13Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMedicalInformation;
