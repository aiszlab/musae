import React from "react";
import { withIcon } from "../../hoc";

const IconAlignVerticalCenter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22.08 11H17.08V6H14.08V11H10.08V3H7.08001V11H1.92001V13H7.08001V21H10.08V13H14.08V18H17.08V13H22.08V11Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAlignVerticalCenter;
