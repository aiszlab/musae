import React from "react";
import { withIcon } from "../../hoc";

const IconChair = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 8V6C20 4.35 18.65 3 17 3H7C5.35 3 4 4.35 4 6V8C2.35 8 1 9.35 1 11V16C1 17.65 2.35 19 4 19V20C4 20.55 4.45 21 5 21C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21C19.55 21 20 20.55 20 20V19C21.65 19 23 17.65 23 16V11C23 9.35 21.65 8 20 8ZM6 6C6 5.45 6.45 5 7 5H17C17.55 5 18 5.45 18 6V8.78C17.39 9.33 17 10.12 17 11V13H7V11C7 10.12 6.61 9.33 6 8.78V6ZM21 16C21 16.55 20.55 17 20 17H4C3.45 17 3 16.55 3 16V11C3 10.45 3.45 10 4 10C4.55 10 5 10.45 5 11V15H19V11C19 10.45 19.45 10 20 10C20.55 10 21 10.45 21 11V16Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconChair;
