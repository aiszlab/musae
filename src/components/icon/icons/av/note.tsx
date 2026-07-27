import React from "react";
import { withIcon } from "../../hoc";

const IconNote = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 4H4C2.9 4 2 4.9 2 6V18.01C2 19.11 2.9 20 4 20H20C21.1 20 22 19.1 22 18V10L16 4ZM4 18.01V6H15V11H20V18.01H4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNote;
