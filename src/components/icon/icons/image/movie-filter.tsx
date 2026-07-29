import React from "react";
import { withIcon } from "../../hoc";

const IconMovieFilter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.995 11L9.05501 13.06L6.995 14L9.05501 14.94L9.995 17L10.935 14.94L12.995 14L10.935 13.06L9.995 11ZM18.005 4L20.005 8H17.005L15.005 4H13.005L15.005 8H12.005L10.005 4H8.005L10.005 8H7.005L5.00501 4H4.00501C2.90501 4 2.015 4.9 2.015 6L2.005 18C2.005 19.1 2.90501 20 4.00501 20H20.005C21.105 20 21.995 19.1 21.995 18V4H18.005ZM20.005 18H4.00501V6.47L5.765 10H15.995L15.365 11.37L13.995 12L15.365 12.63L15.995 14L16.625 12.63L17.995 12L16.625 11.37L15.995 10H20.005V18Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMovieFilter;
