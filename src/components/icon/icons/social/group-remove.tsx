import React from "react";
import { withIcon } from "../../hoc";

const IconGroupRemove = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M24 9V11H18V9H24ZM8 4C5.79 4 4 5.79 4 8C4 10.21 5.79 12 8 12C10.21 12 12 10.21 12 8C12 5.79 10.21 4 8 4ZM8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10ZM8 13C5.33 13 0 14.34 0 17V20H16V17C16 14.34 10.67 13 8 13ZM14 18H2V17.01C2.2 16.29 5.3 15 8 15C10.7 15 13.8 16.29 14 17V18ZM12.51 4.05C13.43 5.11 14 6.49 14 8C14 9.51 13.43 10.89 12.51 11.95C14.47 11.7 16 10.04 16 8C16 5.96 14.47 4.3 12.51 4.05ZM16.53 13.83C17.42 14.66 18 15.7 18 17V20H20V17C20 15.55 18.41 14.49 16.53 13.83Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconGroupRemove;
