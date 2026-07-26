import React from "react";
import { withIcon } from "../../hoc";

const IconVrpano = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.01 2C20.45 2 17.4 3.5 12 3.5C6.69 3.5 3.51 2.01 2.99 2.01C2.46 2.01 2 2.45 2 3.02V17C2 17.57 2.46 18 2.99 18C3.56 18 6.54 16.5 12 16.5C17.42 16.5 20.44 18 21.01 18C21.54 18 22 17.57 22 17V3C22 2.43 21.54 2 21.01 2ZM20 15.63C17.99 15.04 15.38 14.5 12 14.5C8.61 14.5 6.01 15.04 4 15.63V4.38C6.58 5.11 9.32 5.5 12 5.5C15.38 5.5 17.99 4.96 20 4.37V15.63Z"
        fill="currentColor"
      />
      <path
        d="M9.17 8.99L5.48 13.41C7.48 13.15 9.66 13 12 13C14.3 13 16.52 13.15 18.51 13.4L14 8L11.17 11.39L9.17 8.99Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVrpano;
