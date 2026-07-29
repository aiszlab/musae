import React from "react";
import { withIcon } from "../../hoc";

const IconLocalFireDepartment = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 6.5L15.56 7.05C15.14 7.57 14.58 7.8 14.02 7.8C13 7.8 12 7.02 12 5.8V2.5C12 2.5 4 6.5 4 13.5C4 17.92 7.58 21.5 12 21.5C16.42 21.5 20 17.92 20 13.5C20 10.54 18.39 7.88 16 6.5ZM12 19.5C10.9 19.5 10 18.63 10 17.56C10 17.05 10.2 16.57 10.58 16.2L12 14.8L13.43 16.2C13.8 16.57 14 17.05 14 17.56C14 18.63 13.1 19.5 12 19.5ZM15.96 18C16 17.64 16.18 16.11 14.83 14.78L12 12L9.17 14.78C7.81 16.12 8 17.66 8.04 18C6.79 16.9 6 15.29 6 13.5C6 10.34 8.13 7.85 10.03 6.25C10.26 8.24 11.96 9.8 14.02 9.8C14.8 9.8 15.56 9.57 16.2 9.14C17.34 10.28 18 11.85 18 13.5C18 15.29 17.21 16.9 15.96 18Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalFireDepartment;
