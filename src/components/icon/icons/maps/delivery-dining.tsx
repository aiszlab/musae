import React from "react";
import { withIcon } from "../../hoc";

const DeliveryDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.6) scale(1.2)">
        <path
          d="M17 2C17 0.9 16.1 0 15 0H12V2H15V4.65L11.52 9H8V4H4C1.79 4 0 5.79 0 8V11H2C2 12.66 3.34 14 5 14C6.66 14 8 12.66 8 11H12.48L17 5.35V2ZM2 9V8C2 6.9 2.9 6 4 6H6V9H2ZM5 12C4.45 12 4 11.55 4 11H6C6 11.55 5.55 12 5 12Z"
          fill="currentColor"
        />
        <path d="M8 1H3V3H8V1Z" fill="currentColor" />
        <path
          d="M17 8C15.34 8 14 9.34 14 11C14 12.66 15.34 14 17 14C18.66 14 20 12.66 20 11C20 9.34 18.66 8 17 8ZM17 12C16.45 12 16 11.55 16 11C16 10.45 16.45 10 17 10C17.55 10 18 10.45 18 11C18 11.55 17.55 12 17 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DeliveryDining;
