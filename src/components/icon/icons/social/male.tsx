import React from "react";
import { withIcon } from "../../hoc";

const Male = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 8.875 10.75 C 11.288 10.75 13.25 12.713 13.25 15.125 C 13.25 17.538 11.288 19.5 8.875 19.5 C 6.462 19.5 4.5 17.538 4.5 15.125 C 4.5 12.713 6.462 10.75 8.875 10.75 Z M 8.875 8.25 C 5.075 8.25 2 11.325 2 15.125 C 2 18.925 5.075 22 8.875 22 C 12.675 22 15.75 18.925 15.75 15.125 C 15.75 13.675 15.3 12.337 14.538 11.225 L 19.5 6.275 L 19.5 9.5 L 22 9.5 L 22 2 L 14.5 2 L 14.5 4.5 L 17.725 4.5 L 12.763 9.462 C 11.663 8.7 10.325 8.25 8.875 8.25 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Male;
