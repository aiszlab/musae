import React from "react";
import { withIcon } from "../../hoc";

const ContentPasteSearch = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.0909, 0) scale(1.0909)">
        <path
          d="M2 4H4V7H14V4H16V9H18V4C18 2.9 17.1 2 16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H7V18H2V4ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2Z"
          fill="currentColor"
        />
        <path
          d="M17.3 17.9C17.7 17.2 18 16.4 18 15.5C18 13 16 11 13.5 11C11 11 9 13 9 15.5C9 18 11 20 13.5 20C14.4 20 15.2 19.7 15.9 19.3L18.6 22L20 20.6L17.3 17.9ZM13.5 18C12.1 18 11 16.9 11 15.5C11 14.1 12.1 13 13.5 13C14.9 13 16 14.1 16 15.5C16 16.9 14.9 18 13.5 18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ContentPasteSearch;
