import React from "react";
import { withIcon } from "../../hoc";

const IconLocalOffer = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 23.292 11.496 L 12.492 0.696 C 12.06 0.264 11.46 0 10.8 0 H 2.4 C 1.08 0 0 1.08 0 2.4 V 10.8 C 0 11.46 0.264 12.06 0.708 12.504 L 11.508 23.304 C 11.94 23.736 12.54 24 13.2 24 C 13.86 24 14.46 23.736 14.892 23.292 L 23.292 14.892 C 23.736 14.46 24 13.86 24 13.2 C 24 12.54 23.724 11.928 23.292 11.496ZM 13.2 21.612 L 2.4 10.8 V 2.4 H 10.8 V 2.388 L 21.6 13.188 L 13.2 21.612Z"
        fill="currentColor"
      />
      <path
        d="M 5.4 7.2 C 6.3941 7.2 7.2 6.3941 7.2 5.4 C 7.2 4.4059 6.3941 3.6 5.4 3.6 C 4.4059 3.6 3.6 4.4059 3.6 5.4 C 3.6 6.3941 4.4059 7.2 5.4 7.2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalOffer;
