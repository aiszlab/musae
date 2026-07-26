import React from "react";
import { withIcon } from "../../hoc";

const IconUpload = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 16.5H15V10.5H19L12 3.5L5 10.5H9V16.5ZM12 6.33L14.17 8.5H13V14.5H11V8.5H9.83L12 6.33ZM5 18.5H19V20.5H5V18.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconUpload;
