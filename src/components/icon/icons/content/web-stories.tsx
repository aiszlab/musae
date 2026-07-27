import React from "react";
import { withIcon } from "../../hoc";

const IconWebStories = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.75 4V20C17.85 20 18.75 19.1 18.75 18V6C18.75 4.9 17.85 4 16.75 4Z"
        fill="currentColor"
      />
      <path
        d="M12.75 2H3.75C2.65 2 1.75 2.9 1.75 4V20C1.75 21.1 2.65 22 3.75 22H12.75C13.85 22 14.75 21.1 14.75 20V4C14.75 2.9 13.85 2 12.75 2ZM12.75 20H3.75V4H12.75V20Z"
        fill="currentColor"
      />
      <path
        d="M20.75 6V18C21.58 18 22.25 17.33 22.25 16.5V7.5C22.25 6.67 21.58 6 20.75 6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWebStories;
