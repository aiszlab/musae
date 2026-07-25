import React from "react";
import { withIcon } from "../../hoc";

const SavedSearch = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.73 13.31C15.52 12.24 16 10.93 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C10.93 16 12.24 15.52 13.31 14.73L19.59 21L21 19.59L14.73 13.31ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
        fill="currentColor"
      />
      <path
        d="M10.29 8.44L9.5 6L8.71 8.44H6.25L8.26 10.03L7.49 12.5L9.5 10.97L11.51 12.5L10.74 10.03L12.75 8.44H10.29Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default SavedSearch;
