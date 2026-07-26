import React from "react";
import { withIcon } from "../../hoc";

const IconMoney = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 15.6 16.8 H 19.2 C 19.86 16.8 20.4 16.26 20.4 15.6 V 8.4 C 20.4 7.74 19.86 7.2 19.2 7.2 H 15.6 C 14.94 7.2 14.4 7.74 14.4 8.4 V 15.6 C 14.4 16.26 14.94 16.8 15.6 16.8ZM 16.8 9.6 H 18 V 14.4 H 16.8 V 9.6ZM 8.4 16.8 H 12 C 12.66 16.8 13.2 16.26 13.2 15.6 V 8.4 C 13.2 7.74 12.66 7.2 12 7.2 H 8.4 C 7.74 7.2 7.2 7.74 7.2 8.4 V 15.6 C 7.2 16.26 7.74 16.8 8.4 16.8ZM 9.6 9.6 H 10.8 V 14.4 H 9.6 V 9.6ZM 3.6 7.2 H 6 V 16.8 H 3.6 V 7.2ZM 0 2.4 V 21.6 H 24 V 2.4 H 0ZM 21.6 19.2 H 2.4 V 4.8 H 21.6 V 19.2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMoney;
