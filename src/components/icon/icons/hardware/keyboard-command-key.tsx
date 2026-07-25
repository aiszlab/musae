import React from "react";
import { withIcon } from "../../hoc";

const KeyboardCommandKey = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M14.5 0C12.57 0 11 1.57 11 3.5V5H7V3.5C7 1.57 5.43 0 3.5 0C1.57 0 0 1.57 0 3.5C0 5.43 1.57 7 3.5 7H5V11H3.5C1.57 11 0 12.57 0 14.5C0 16.43 1.57 18 3.5 18C5.43 18 7 16.43 7 14.5V13H11V14.5C11 16.43 12.57 18 14.5 18C16.43 18 18 16.43 18 14.5C18 12.57 16.43 11 14.5 11H13V7H14.5C16.43 7 18 5.43 18 3.5C18 1.57 16.43 0 14.5 0ZM13 5V3.5C13 2.67 13.67 2 14.5 2C15.33 2 16 2.67 16 3.5C16 4.33 15.33 5 14.5 5H13ZM3.5 5C2.67 5 2 4.33 2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5V5H3.5ZM7 11V7H11V11H7ZM14.5 16C13.67 16 13 15.33 13 14.5V13H14.5C15.33 13 16 13.67 16 14.5C16 15.33 15.33 16 14.5 16ZM3.5 16C2.67 16 2 15.33 2 14.5C2 13.67 2.67 13 3.5 13H5V14.5C5 15.33 4.33 16 3.5 16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default KeyboardCommandKey;
