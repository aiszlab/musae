import React from "react";
import { withIcon } from "../../hoc";

const IconAddBusiness = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M17 2.5H2V4.5H17V2.5Z" fill="currentColor" />
      <path
        d="M15 15.5H17V12.5H18V10.5L17 5.5H2L1 10.5V12.5H2V18.5H11V12.5H15V15.5ZM9 16.5H4V12.5H9V16.5ZM3.04 10.5L3.64 7.5H15.36L15.96 10.5H3.04Z"
        fill="currentColor"
      />
      <path d="M23 16.5H20V13.5H18V16.5H15V18.5H18V21.5H20V18.5H23V16.5Z" fill="currentColor" />
    </svg>
  );
});

export default IconAddBusiness;
