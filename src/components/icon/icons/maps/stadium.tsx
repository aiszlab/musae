import React from "react";
import { withIcon } from "../../hoc";

const IconStadium = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 6 3.6 L 1.2 6 V 1.2 L 6 3.6ZM 19.2 1.2 V 6 L 24 3.6 L 19.2 1.2ZM 10.8 0 V 4.8 L 15.6 2.4 L 10.8 0ZM 13.2 19.2 H 10.8 V 24 C 4.74 23.82 0 22.272 0 20.4 V 9.6 C 0 7.608 5.376 6 12 6 C 18.624 6 24 7.608 24 9.6 V 20.4 C 24 22.272 19.26 23.82 13.2 24 V 19.2ZM 3.6 9.648 C 5.256 10.236 8.124 10.8 12 10.8 C 15.876 10.8 18.744 10.236 20.4 9.648 C 20.4 9.432 17.064 8.4 12 8.4 C 6.936 8.4 3.6 9.432 3.6 9.648ZM 21.6 11.76 C 19.416 12.636 15.924 13.2 12 13.2 C 8.076 13.2 4.584 12.636 2.4 11.76 V 19.896 C 3.132 20.388 5.232 21.108 8.4 21.432 V 16.8 H 15.6 V 21.432 C 18.768 21.108 20.868 20.388 21.6 19.896 V 11.76Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconStadium;
