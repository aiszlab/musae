import React from "react";
import { withIcon } from "../../hoc";

const IconLabel = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.13 5.84C16.77 5.33 16.17 5 15.5 5L4.5 5.01C3.4 5.01 2.5 5.9 2.5 7V17C2.5 18.1 3.4 18.99 4.5 18.99L15.5 19C16.17 19 16.77 18.67 17.13 18.16L21.5 12L17.13 5.84ZM15.5 17H4.5V7H15.5L19.05 12L15.5 17Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLabel;
