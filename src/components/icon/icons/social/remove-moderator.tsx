import React from "react";
import { withIcon } from "../../hoc";

const RemoveModerator = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12.689 4.077 L 18.511 6.26 L 18.511 10.821 C 18.511 11.976 18.288 13.111 17.89 14.159 L 19.356 15.624 C 20.054 14.14 20.452 12.5 20.452 10.821 L 20.452 4.911 L 12.689 2 L 7.623 3.902 L 9.128 5.406 L 12.689 4.077 Z M 3.771 2.786 L 2.393 4.154 L 4.926 6.687 L 4.926 10.821 C 4.926 15.721 8.235 20.292 12.689 21.408 C 14.358 20.991 15.872 20.088 17.104 18.866 L 20.239 22 L 21.607 20.632 L 3.771 2.786 Z M 12.689 19.39 C 9.341 18.293 6.867 14.712 6.867 10.821 L 6.867 8.628 L 15.736 17.497 C 14.863 18.351 13.824 19.021 12.689 19.39 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default RemoveModerator;
