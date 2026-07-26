import React from "react";
import { withIcon } from "../../hoc";

const IconNoMeetingRoom = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12.541 4.75 L 12.541 8.469 L 14.458 10.385 L 14.458 5.709 L 17.333 5.709 L 17.333 13.26 L 19.25 15.177 L 19.25 3.792 L 14.458 3.792 L 14.458 2.834 L 6.907 2.834 L 8.823 4.75 L 12.541 4.75 Z M 3.351 2 L 2 3.351 L 5.833 7.184 L 5.833 18.167 L 3.917 18.167 L 3.917 20.083 L 14.458 20.083 L 14.458 15.809 L 20.649 22 L 22 20.649 L 3.351 2 Z M 12.541 18.167 L 7.75 18.167 L 7.75 9.101 L 12.541 13.893 L 12.541 18.167 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNoMeetingRoom;
