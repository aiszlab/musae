import React from "react";
import { withIcon } from "../../hoc";

const IconVolcano = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 17.714 8.667 L 11.048 8.667 L 9.143 13.429 L 6.286 13.429 L 2.476 22 L 21.524 22 L 17.714 8.667 Z M 7.524 15.333 L 10.429 15.333 L 10.905 14.133 L 12.333 10.571 L 16.276 10.571 L 19 20.095 L 5.41 20.095 L 7.524 15.333 Z"
        fill="currentColor"
      />
      <path
        d="M 14.857 2 L 12.952 2 L 12.952 5.81 L 14.857 5.81 L 14.857 2 Z"
        fill="currentColor"
      />
      <path
        d="M 18.619 3.562 L 15.925 6.255 L 17.271 7.602 L 19.966 4.909 L 18.619 3.562 Z"
        fill="currentColor"
      />
      <path
        d="M 9.194 3.558 L 7.848 4.905 L 10.541 7.599 L 11.888 6.251 L 9.194 3.558 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVolcano;
