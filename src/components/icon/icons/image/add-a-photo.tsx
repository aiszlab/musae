import React from "react";
import { withIcon } from "../../hoc";

const IconAddAPhoto = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.5 6.5H18.33L16.5 4.5H10.5V6.5H15.62L17.45 8.5H21.5V20.5H5.5V11.5H3.5V20.5C3.5 21.6 4.4 22.5 5.5 22.5H21.5C22.6 22.5 23.5 21.6 23.5 20.5V8.5C23.5 7.4 22.6 6.5 21.5 6.5ZM8.5 14.5C8.5 17.26 10.74 19.5 13.5 19.5C16.26 19.5 18.5 17.26 18.5 14.5C18.5 11.74 16.26 9.5 13.5 9.5C10.74 9.5 8.5 11.74 8.5 14.5ZM13.5 11.5C15.15 11.5 16.5 12.85 16.5 14.5C16.5 16.15 15.15 17.5 13.5 17.5C11.85 17.5 10.5 16.15 10.5 14.5C10.5 12.85 11.85 11.5 13.5 11.5ZM5.5 6.5H8.5V4.5H5.5V1.5H3.5V4.5H0.5V6.5H3.5V9.5H5.5V6.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAddAPhoto;
