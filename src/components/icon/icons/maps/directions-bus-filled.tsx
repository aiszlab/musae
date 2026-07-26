import React from "react";
import { withIcon } from "../../hoc";

const IconDirectionsBusFilled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2.5C8 2.5 4 3 4 6.5V16C4 16.95 4.38 17.81 5 18.44V20.5C5 21.05 5.45 21.5 6 21.5H7C7.55 21.5 8 21.05 8 20.5V19.5H16V20.5C16 21.05 16.45 21.5 17 21.5H18C18.55 21.5 19 21.05 19 20.5V18.44C19.62 17.81 20 16.95 20 16V6.5C20 3 16.42 2.5 12 2.5ZM12 4.5C15.71 4.5 17.13 4.96 17.67 5.5H6.43C7.03 4.98 8.48 4.5 12 4.5ZM18 15.5C18 16.6 17.1 17.5 16 17.5H8C6.9 17.5 6 16.6 6 15.5V12.5H18V15.5ZM18 10.5H6V7.5H18V10.5Z"
        fill="currentColor"
      />
      <path
        d="M8.5 16.5C9.32843 16.5 10 15.8284 10 15C10 14.1716 9.32843 13.5 8.5 13.5C7.67157 13.5 7 14.1716 7 15C7 15.8284 7.67157 16.5 8.5 16.5Z"
        fill="currentColor"
      />
      <path
        d="M15.5 16.5C16.3284 16.5 17 15.8284 17 15C17 14.1716 16.3284 13.5 15.5 13.5C14.6716 13.5 14 14.1716 14 15C14 15.8284 14.6716 16.5 15.5 16.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDirectionsBusFilled;
