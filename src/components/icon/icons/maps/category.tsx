import React from "react";
import { withIcon } from "../../hoc";

const Category = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.6, 0) scale(1.2)">
        <path
          d="M9 0L3.5 9H14.5L9 0ZM9 3.84L10.93 7H7.06L9 3.84ZM14.5 11C12.01 11 10 13.01 10 15.5C10 17.99 12.01 20 14.5 20C16.99 20 19 17.99 19 15.5C19 13.01 16.99 11 14.5 11ZM14.5 18C13.12 18 12 16.88 12 15.5C12 14.12 13.12 13 14.5 13C15.88 13 17 14.12 17 15.5C17 16.88 15.88 18 14.5 18ZM0 19.5H8V11.5H0V19.5ZM2 13.5H6V17.5H2V13.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Category;
