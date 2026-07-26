import React from "react";
import { withIcon } from "../../hoc";

const IconLocalPizza = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 0 C 7.716 0 3.876 1.848 1.212 4.8 L 12 24 L 22.788 4.8 C 20.136 1.86 16.284 0 12 0ZM 12 19.104 L 4.212 5.232 C 6.384 3.42 9.144 2.4 12 2.4 C 14.856 2.4 17.616 3.42 19.788 5.232 L 12 19.104ZM 8.4 4.2 C 7.404 4.2 6.6 5.004 6.6 6 C 6.6 6.996 7.404 7.8 8.4 7.8 C 9.396 7.8 10.2 6.996 10.2 6 C 10.2 5.004 9.384 4.2 8.4 4.2ZM 10.2 13.2 C 10.2 14.196 11.004 15 12 15 C 12.984 15 13.8 14.196 13.8 13.2 C 13.8 12.204 12.984 11.4 12 11.4 C 11.016 11.4 10.2 12.204 10.2 13.2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalPizza;
