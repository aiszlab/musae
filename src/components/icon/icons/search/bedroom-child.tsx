import React from "react";
import { withIcon } from "../../hoc";

const IconBedroomChild = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 4V20H4V4H20ZM20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM16.5 10.67V9C16.5 7.9 15.6 7 14.5 7H9.5C8.4 7 7.5 7.9 7.5 9V10.67C6.62 11.02 6 11.87 6 12.87V17H7.5V15.5H16.5V17H18V12.87C18 11.87 17.38 11.02 16.5 10.67ZM15 8.5V10.5H9V8.5H15ZM7.5 12.87C7.5 12.39 7.89 12 8.37 12H15.64C16.12 12 16.51 12.39 16.51 12.87V14H7.51V12.87H7.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBedroomChild;
