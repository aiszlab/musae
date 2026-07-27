import React from "react";
import { withIcon } from "../../hoc";

const IconPrivateConnectivity = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM5.07 13C5.56 16.39 8.47 19 12 19C15.53 19 18.44 16.39 18.93 13H22V11H18.93C18.44 7.61 15.53 5 12 5C8.47 5 5.56 7.61 5.07 11H2V13H5.07ZM14 10.5V9.61C14 8.61 13.32 7.69 12.34 7.53C11.08 7.32 10 8.29 10 9.5V10.5C9.45 10.5 9 10.95 9 11.5V14.5C9 15.05 9.45 15.5 10 15.5H14C14.55 15.5 15 15.05 15 14.5V11.5C15 10.95 14.55 10.5 14 10.5ZM12 13.75C11.59 13.75 11.25 13.41 11.25 13C11.25 12.59 11.59 12.25 12 12.25C12.41 12.25 12.75 12.59 12.75 13C12.75 13.41 12.41 13.75 12 13.75ZM13 10.5H11V9.5C11 8.95 11.45 8.5 12 8.5C12.55 8.5 13 8.95 13 9.5V10.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPrivateConnectivity;
