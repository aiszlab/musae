import React from "react";
import { withIcon } from "../../hoc";

const Snooze = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.1789, 0) scale(1.1887)">
        <path
          d="M6.944 9.19H10.574L6.944 13.39V15.19H12.944V13.19H9.314L12.944 8.99V7.19H6.944V9.19ZM14 1.536L15.282 0.00100005L19.889 3.851L18.609 5.391L14 1.536ZM1.28 5.38L0 3.844L4.606 0L5.886 1.536L1.28 5.38ZM9.944 4.19C13.804 4.19 16.944 7.33 16.944 11.19C16.944 15.05 13.804 18.19 9.944 18.19C6.084 18.19 2.944 15.05 2.944 11.19C2.944 7.33 6.084 4.19 9.944 4.19ZM9.944 2.19C4.974 2.19 0.944 6.22 0.944 11.19C0.944 16.16 4.974 20.19 9.944 20.19C14.914 20.19 18.944 16.16 18.944 11.19C18.944 6.22 14.914 2.19 9.944 2.19Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Snooze;
