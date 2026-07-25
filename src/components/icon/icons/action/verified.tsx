import React from "react";
import { withIcon } from "../../hoc";

const Verified = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M23 12L20.56 9.22L20.9 5.54L17.29 4.72L15.4 1.54L12 3L8.6 1.54L6.71 4.72L3.1 5.53L3.44 9.21L1 12L3.44 14.78L3.1 18.47L6.71 19.29L8.6 22.47L12 21L15.4 22.46L17.29 19.28L20.9 18.46L20.56 14.78L23 12ZM10.09 16.72L6.77 13.4L8.18 11.99L10.09 13.89L15.82 8.16L17.23 9.58L10.09 16.72Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Verified;
