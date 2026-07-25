import React from "react";
import { withIcon } from "../../hoc";

const ViewQuilt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 5V19H21V5H3ZM8.33 17H5V7H8.33V17ZM13.67 17H10.34V13H13.67V17ZM19 17H15.67V13H19V17ZM19 11H10.33V7H19V11Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default ViewQuilt;
