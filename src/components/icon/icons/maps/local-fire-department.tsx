import React from "react";
import { withIcon } from "../../hoc";

const LocalFireDepartment = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.8947, 0) scale(1.2632)">
        <path
          d="M12 4L11.56 4.55C11.14 5.07 10.58 5.3 10.02 5.3C9 5.3 8 4.52 8 3.3V0C8 0 0 4 0 11C0 15.42 3.58 19 8 19C12.42 19 16 15.42 16 11C16 8.04 14.39 5.38 12 4ZM8 17C6.9 17 6 16.13 6 15.06C6 14.55 6.2 14.07 6.58 13.7L8 12.3L9.43 13.7C9.8 14.07 10 14.55 10 15.06C10 16.13 9.1 17 8 17ZM11.96 15.5C12 15.14 12.18 13.61 10.83 12.28L8 9.5L5.17 12.28C3.81 13.62 4 15.16 4.04 15.5C2.79 14.4 2 12.79 2 11C2 7.84 4.13 5.35 6.03 3.75C6.26 5.74 7.96 7.3 10.02 7.3C10.8 7.3 11.56 7.07 12.2 6.64C13.34 7.78 14 9.35 14 11C14 12.79 13.21 14.4 11.96 15.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalFireDepartment;
