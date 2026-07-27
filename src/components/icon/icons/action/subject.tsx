import React from "react";
import { withIcon } from "../../hoc";

const IconSubject = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14 17H4V19H14V17ZM20 9H4V11H20V9ZM4 15H20V13H4V15ZM4 5V7H20V5H4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSubject;
