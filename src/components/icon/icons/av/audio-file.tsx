import React from "react";
import { withIcon } from "../../hoc";

const IconAudioFile = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM6 20V4H13V9H18V20H6ZM16 11H12V14.88C11.64 14.64 11.21 14.5 10.75 14.5C9.51 14.5 8.5 15.51 8.5 16.75C8.5 17.99 9.51 19 10.75 19C11.99 19 13 17.99 13 16.75V13H16V11Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAudioFile;
