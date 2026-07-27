import React from "react";
import { withIcon } from "../../hoc";

const IconDifference = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.5 23H4.5C3.4 23 2.5 22.1 2.5 21V7H4.5V21H18.5V23ZM15 7V5H13V7H11V9H13V11H15V9H17V7H15ZM17 13H11V15H17V13ZM15.5 1H8.5C7.4 1 6.51 1.9 6.51 3L6.5 17C6.5 18.1 7.39 19 8.49 19H19.5C20.6 19 21.5 18.1 21.5 17V7L15.5 1ZM19.5 17H8.5V3H14.67L19.5 7.83V17Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDifference;
