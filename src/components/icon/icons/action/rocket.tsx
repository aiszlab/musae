import React from "react";
import { withIcon } from "../../hoc";

const Rocket = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14 11C14 9.9 13.1 9 12 9C10.9 9 10 9.9 10 11C10 12.1 10.9 13 12 13C13.1 13 14 12.1 14 11ZM7.98 18.25C7.69 17.35 7.41 16.31 7.22 15.25L6 16.07V19.05L7.98 18.25ZM12 2C12 2 17 4 17 13L19.11 14.41C19.67 14.78 20 15.41 20 16.07V22L15 20H9L4 22V16.07C4 15.4 4.33 14.78 4.89 14.41L7 13C7 4 12 2 12 2ZM12 4.36C12 4.36 9 6.38 9 13C9 15.25 10 18 10 18H14C14 18 15 15.25 15 13C15 6.38 12 4.36 12 4.36ZM18 19.05V16.07L16.78 15.26C16.59 16.31 16.31 17.36 16.02 18.26L18 19.05Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Rocket;
