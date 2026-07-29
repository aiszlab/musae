import React from "react";
import { withIcon } from "../../hoc";

const IconChalet = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.25 15.5L9.75 8L2.25 15.5L3.66 16.91L4.75 15.83V20.5H14.75V15.83L15.84 16.92L17.25 15.5ZM12.75 18.5H10.75V15.5H8.75V18.5H6.75V13.83L9.75 10.83L12.75 13.83V18.5ZM21.75 8H20.56L21.31 8.75L20.6 9.46L19.14 8H18.25V8.89L19.7 10.34L18.99 11.05L18.25 10.31V11.5H17.25V10.31L16.5 11.06L15.79 10.35L17.24 8.9V8H16.35L14.9 9.45L14.19 8.74L14.94 7.99H13.75V6.99H14.94L14.19 6.24L14.9 5.53L16.35 6.98H17.24V6.11L15.79 4.66L16.5 3.95L17.25 4.7V3.5H18.25V4.69L19 3.94L19.71 4.65L18.25 6.11V7H19.14L20.59 5.55L21.3 6.26L20.56 7H21.75V8Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconChalet;
