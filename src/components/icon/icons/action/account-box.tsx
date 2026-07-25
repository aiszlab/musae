import React from "react";
import { withIcon } from "../../hoc";

const AccountBox = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 19H7V18.76C8.42 17.62 10.16 17 12 17C13.84 17 15.58 17.62 17 18.76V19ZM19 17.86C17.2 16.09 14.73 15 12 15C9.27 15 6.8 16.09 5 17.86V5H19V17.86ZM12 13C13.93 13 15.5 11.43 15.5 9.5C15.5 7.57 13.93 6 12 6C10.07 6 8.5 7.57 8.5 9.5C8.5 11.43 10.07 13 12 13ZM12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default AccountBox;
