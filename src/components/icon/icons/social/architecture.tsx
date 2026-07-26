import React from "react";
import { withIcon } from "../../hoc";

const IconArchitecture = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 5.728 19.533 L 6.006 22 L 7.806 20.289 L 10.883 11.844 C 10.128 11.656 9.461 11.278 8.917 10.756 L 5.728 19.533 Z"
        fill="currentColor"
      />
      <path
        d="M 15.072 10.756 C 14.528 11.278 13.85 11.656 13.106 11.844 L 16.183 20.289 L 17.983 22 L 18.272 19.533 L 15.072 10.756 Z"
        fill="currentColor"
      />
      <path
        d="M 15.328 7.556 C 15.328 6.111 14.394 4.889 13.106 4.422 L 13.106 2 L 10.883 2 L 10.883 4.422 C 9.594 4.889 8.661 6.111 8.661 7.556 C 8.661 9.4 10.15 10.889 11.994 10.889 C 13.839 10.889 15.328 9.4 15.328 7.556 Z M 11.994 8.667 C 11.383 8.667 10.883 8.167 10.883 7.556 C 10.883 6.944 11.383 6.444 11.994 6.444 C 12.606 6.444 13.106 6.944 13.106 7.556 C 13.106 8.167 12.606 8.667 11.994 8.667 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconArchitecture;
