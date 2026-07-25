import React from "react";
import { withIcon } from "../../hoc";

const Update = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 10.12H14.22L16.96 7.38C14.23 4.6 9.81 4.5 7.08 7.2C4.35 9.91 4.35 14.28 7.08 17C9.81 19.72 14.14 19.72 16.87 17C18.43 15.44 19.24 13.34 19.24 11.15H21.24C21.24 14.15 20.13 16.94 18.26 18.81C14.36 22.71 8.14 22.74 4.24 18.81C0.34 14.88 0.34 8.63 4.24 4.71C8.14 0.79 14.36 0.79 18.26 4.71L21 2V10.12Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Update;
