import React from "react";
import { withIcon } from "../../hoc";

const IconLocalMovies = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 14.6663 2.6666 V 21.3328 H 9.3331 V 2.6666 H 14.6663ZM 22.6661 0 H 20 V 2.6666 H 17.3329 V 0 H 6.6665 V 2.6666 H 4 V 0 H 1.3333 V 23.9994 H 4 V 21.3328 H 6.6665 V 23.9994 H 17.3329 V 21.3328 H 20 V 23.9994 H 22.6661 V 0ZM 17.3329 8 V 5.3332 H 20 V 8 H 17.3329ZM 4 8 V 5.3332 H 6.6665 V 8 H 4ZM 17.3329 13.333 V 10.6664 H 20 V 13.333 H 17.3329ZM 4 13.333 V 10.6664 H 6.6665 V 13.333 H 4ZM 17.3329 18.6662 V 16 H 20 V 18.6662 H 17.3329ZM 4 18.6662 V 16 H 6.6665 V 18.6662 H 4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalMovies;
