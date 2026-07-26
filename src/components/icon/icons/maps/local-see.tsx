import React from "react";
import { withIcon } from "../../hoc";

const IconLocalSee = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21.6 3.6 H 17.796 L 15.6 1.2 H 8.4 L 6.204 3.6 H 2.4 C 1.08 3.6 0 4.68 0 6 V 20.4 C 0 21.72 1.08 22.8 2.4 22.8 H 21.6 C 22.92 22.8 24 21.72 24 20.4 V 6 C 24 4.68 22.92 3.6 21.6 3.6ZM 21.6 20.4 H 2.4 V 6 H 7.26 L 7.968 5.22 L 9.456 3.6 H 14.544 L 16.032 5.22 L 16.74 6 H 21.6 V 20.4ZM 12 7.2 C 8.688 7.2 6 9.888 6 13.2 C 6 16.512 8.688 19.2 12 19.2 C 15.312 19.2 18 16.512 18 13.2 C 18 9.888 15.312 7.2 12 7.2ZM 12 17.04 C 9.876 17.04 8.16 15.324 8.16 13.2 C 8.16 11.076 9.876 9.36 12 9.36 C 14.124 9.36 15.84 11.076 15.84 13.2 C 15.84 15.324 14.124 17.04 12 17.04Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalSee;
