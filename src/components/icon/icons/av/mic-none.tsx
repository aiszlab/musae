import React from "react";
import { withIcon } from "../../hoc";

const IconMicNone = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 14.5C13.66 14.5 15 13.16 15 11.5V5.5C15 3.84 13.66 2.5 12 2.5C10.34 2.5 9 3.84 9 5.5V11.5C9 13.16 10.34 14.5 12 14.5ZM11 5.5C11 4.95 11.45 4.5 12 4.5C12.55 4.5 13 4.95 13 5.5V11.5C13 12.05 12.55 12.5 12 12.5C11.45 12.5 11 12.05 11 11.5V5.5ZM17 11.5C17 14.26 14.76 16.5 12 16.5C9.24 16.5 7 14.26 7 11.5H5C5 15.03 7.61 17.93 11 18.42V21.5H13V18.42C16.39 17.93 19 15.03 19 11.5H17Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMicNone;
