import React from "react";
import { withIcon } from "../../hoc";

const IconSpoke = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11C14.21 11 16 9.21 16 7ZM12 9C10.9 9 10 8.1 10 7C10 5.9 10.9 5 12 5C13.1 5 14 5.9 14 7C14 8.1 13.1 9 12 9ZM7 13C4.79 13 3 14.79 3 17C3 19.21 4.79 21 7 21C9.21 21 11 19.21 11 17C11 14.79 9.21 13 7 13ZM7 19C5.9 19 5 18.1 5 17C5 15.9 5.9 15 7 15C8.1 15 9 15.9 9 17C9 18.1 8.1 19 7 19ZM17 13C14.79 13 13 14.79 13 17C13 19.21 14.79 21 17 21C19.21 21 21 19.21 21 17C21 14.79 19.21 13 17 13ZM17 19C15.9 19 15 18.1 15 17C15 15.9 15.9 15 17 15C18.1 15 19 15.9 19 17C19 18.1 18.1 19 17 19Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSpoke;
