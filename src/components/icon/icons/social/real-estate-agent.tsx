import React from "react";
import { withIcon } from "../../hoc";

const IconRealEstateAgent = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.5 6.5V14H19.5V7.5L14.5 4L9.5 7.5V9H7.5V6.5L14.5 1.5L21.5 6.5ZM16 7H15V8H16V7ZM14 7H13V8H14V7ZM16 9H15V10H16V9ZM14 9H13V10H14V9ZM19.5 16H17.5C17.5 14.8 16.75 13.72 15.63 13.3L9.47 11H1.5V22H7.5V20.56L14.5 22.5L22.5 20V19C22.5 17.34 21.16 16 19.5 16ZM3.5 20V13H5.5V20H3.5ZM14.47 20.41L7.5 18.48V13H9.11L14.93 15.17C15.27 15.3 15.5 15.63 15.5 16C15.5 16 13.51 15.95 13.2 15.85L10.82 15.06L10.19 16.96L12.57 17.75C13.08 17.92 13.61 18.01 14.15 18.01H19.5C19.89 18.01 20.24 18.24 20.4 18.57L14.47 20.41Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRealEstateAgent;
