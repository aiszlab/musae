import React from "react";
import { withIcon } from "../../hoc";

const FilterAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.005 6H17.005L11.995 12.3L7.005 6ZM4.255 5.61C6.275 8.2 10.005 13 10.005 13V19C10.005 19.55 10.455 20 11.005 20H13.005C13.555 20 14.005 19.55 14.005 19V13C14.005 13 17.725 8.2 19.745 5.61C20.255 4.95 19.785 4 18.955 4H5.045C4.215 4 3.745 4.95 4.255 5.61Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default FilterAlt;
