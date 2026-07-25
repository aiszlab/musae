import React from "react";
import { withIcon } from "../../hoc";

const AirlineSeatLegroomNormal = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 4.105 12 L 4.105 2.526 L 2 2.526 L 2 12 C 2 14.905 4.358 17.263 7.263 17.263 L 13.579 17.263 L 13.579 15.158 L 7.263 15.158 C 5.516 15.158 4.105 13.747 4.105 12 Z M 20.421 18.316 L 18.842 18.316 L 18.842 10.947 C 18.842 9.789 17.895 8.842 16.737 8.842 L 11.474 8.842 L 11.474 2.526 L 5.158 2.526 L 5.158 10.947 C 5.158 12.684 6.579 14.105 8.316 14.105 L 15.684 14.105 L 15.684 21.474 L 20.421 21.474 C 21.295 21.474 22 20.768 22 19.895 C 22 19.021 21.295 18.316 20.421 18.316 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default AirlineSeatLegroomNormal;
