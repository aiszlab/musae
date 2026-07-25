import React from "react";
import { withIcon } from "../../hoc";

const Gavel = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M1.39502 21H13.395V23H1.39502V21ZM5.63502 8.07L8.46502 5.24L22.605 19.38L19.775 22.21L5.63502 8.07ZM12.715 1L18.375 6.66L15.545 9.49L9.88502 3.83L12.715 1ZM4.22502 9.48L9.88502 15.14L7.05502 17.97L1.39502 12.31L4.22502 9.48Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Gavel;
