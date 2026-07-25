import React from "react";
import { withIcon } from "../../hoc";

const Air = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.8) scale(1.2)">
        <path
          d="M12.5 14C12.5 15.65 11.15 17 9.5 17C7.85 17 6.5 15.65 6.5 14H8.5C8.5 14.55 8.95 15 9.5 15C10.05 15 10.5 14.55 10.5 14C10.5 13.45 10.05 13 9.5 13H0V11H9.5C11.15 11 12.5 12.35 12.5 14ZM17 3.5C17 1.57 15.43 0 13.5 0C11.57 0 10 1.57 10 3.5H12C12 2.67 12.67 2 13.5 2C14.33 2 15 2.67 15 3.5C15 4.33 14.33 5 13.5 5H0V7H13.5C15.43 7 17 5.43 17 3.5ZM16.5 8H0V10H16.5C17.33 10 18 10.67 18 11.5C18 12.33 17.33 13 16.5 13V15C18.43 15 20 13.43 20 11.5C20 9.57 18.43 8 16.5 8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Air;
