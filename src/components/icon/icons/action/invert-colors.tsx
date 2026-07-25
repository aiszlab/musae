import React from "react";
import { withIcon } from "../../hoc";

const InvertColors = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 5.31V19.5C8.69 19.5 6 16.87 6 13.63C6 12.07 6.62 10.6 7.75 9.49L12 5.31ZM12 2.5L6.35 8.06C4.9 9.49 4 11.46 4 13.63C4 17.98 7.58 21.5 12 21.5C16.42 21.5 20 17.98 20 13.63C20 11.46 19.1 9.49 17.65 8.06L12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default InvertColors;
