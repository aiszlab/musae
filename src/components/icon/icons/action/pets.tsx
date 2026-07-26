import React from "react";
import { withIcon } from "../../hoc";

const IconPets = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.5 11.498C5.88071 11.498 7 10.3788 7 8.99805C7 7.61733 5.88071 6.49805 4.5 6.49805C3.11929 6.49805 2 7.61733 2 8.99805C2 10.3788 3.11929 11.498 4.5 11.498Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPets;
