import React from "react";
import { withIcon } from "../../hoc";

const IconScience = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 13.11 11.256 L 18.666 18.667 L 5.332 18.667 L 10.888 11.256 L 10.888 5.333 L 13.11 5.333 M 16.399 3.111 L 7.599 3.111 C 7.132 3.111 6.877 3.644 7.166 4.011 L 8.666 5.889 L 8.666 10.522 L 2.221 19.111 C 1.677 19.844 2.199 20.889 3.11 20.889 L 20.888 20.889 C 21.799 20.889 22.321 19.844 21.777 19.111 L 15.332 10.522 L 15.332 5.889 L 16.832 4.011 C 17.121 3.644 16.866 3.111 16.399 3.111 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconScience;
