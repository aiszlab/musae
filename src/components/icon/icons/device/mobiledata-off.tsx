import React from "react";
import { withIcon } from "../../hoc";

const IconMobiledataOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.71 6.11L18.3 7.7L19.71 6.29L15.71 2.29L11.71 6.29L13.12 7.7L14.71 6.11V10.46L16.71 12.46V6.11Z"
        fill="currentColor"
      />
      <path
        d="M2.1 3.51L8.71 10.12V16.47L7.12 14.88L5.71 16.29L9.71 20.29L13.71 16.29L12.3 14.88L10.71 16.47V12.12L20.49 21.9L21.9 20.48L3.52 2.1L2.1 3.51Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMobiledataOff;
