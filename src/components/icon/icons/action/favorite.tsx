import React from "react";
import { withIcon } from "../../hoc";

const Favorite = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 21.1752L10.55 19.8552C5.4 15.1852 2 12.1052 2 8.3252C2 5.2452 4.42 2.8252 7.5 2.8252C9.24 2.8252 10.91 3.6352 12 4.9152C13.09 3.6352 14.76 2.8252 16.5 2.8252C19.58 2.8252 22 5.2452 22 8.3252C22 12.1052 18.6 15.1852 13.45 19.8652L12 21.1752Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Favorite;
