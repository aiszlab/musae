import React from "react";
import { withIcon } from "../../hoc";

const IconWbCloudy = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C14.61 2 16.89 3.86 17.4 6.43L17.7 7.93L19.22 8.04C20.78 8.15 22 9.45 22 11C22 12.65 20.65 14 19 14H6C3.79 14 2 12.21 2 10C2 7.95 3.53 6.24 5.56 6.03L6.63 5.92L7.13 4.97C8.07 3.14 9.94 2 12 2ZM12 0C9.11 0 6.59 1.64 5.34 4.04C2.34 4.36 0 6.91 0 10C0 13.31 2.69 16 6 16H19C21.76 16 24 13.76 24 11C24 8.36 21.95 6.22 19.36 6.04C18.67 2.59 15.64 0 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWbCloudy;
