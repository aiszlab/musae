import React from "react";
import { withIcon } from "../../hoc";

const IconFormatClear = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 7.06969V4.06969H7.39L10.39 7.06969H12.22L11.67 8.34969L13.76 10.4497L15.21 7.06969H21ZM4.41 3.92969L3 5.33969L9.97 12.3097L7.5 18.0697H10.5L12.07 14.4097L17.73 20.0697L19.14 18.6597L4.41 3.92969Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFormatClear;
