import React from "react";
import { withIcon } from "../../hoc";

const IconPhishing = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 6.68V2.5H15V6.68C13.84 7.1 13 8.2 13 9.5C13 10.8 13.84 11.9 15 12.32V15.5C15 17.71 13.21 19.5 11 19.5C8.79 19.5 7 17.71 7 15.5V14.33L8.59 15.92L10 14.5L5 9.5V15.5C5 18.81 7.69 21.5 11 21.5C14.31 21.5 17 18.81 17 15.5V12.32C18.16 11.91 19 10.81 19 9.5C19 8.19 18.16 7.1 17 6.68ZM16 10.5C15.45 10.5 15 10.05 15 9.5C15 8.95 15.45 8.5 16 8.5C16.55 8.5 17 8.95 17 9.5C17 10.05 16.55 10.5 16 10.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPhishing;
