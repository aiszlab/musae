import React from "react";
import { withIcon } from "../../hoc";

const NaturePeople = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.2023) scale(1.1899)">
        <path
          d="M2.5 8.83C3.32843 8.83 4 8.15843 4 7.33C4 6.50157 3.32843 5.83 2.5 5.83C1.67157 5.83 1 6.50157 1 7.33C1 8.15843 1.67157 8.83 2.5 8.83Z"
          fill="currentColor"
        />
        <path
          d="M20.17 7C20.17 3.13 17.04 0 13.17 0C9.3 0 6.17 3.13 6.17 7C6.17 10.47 8.69 13.34 12 13.89V17.83H4V14.83H5V10.83C5 10.28 4.55 9.83 4 9.83H1C0.45 9.83 0 10.28 0 10.83V14.83H1V19.83H17V17.83H14V13.95C17.47 13.54 20.17 10.59 20.17 7ZM13.17 12C10.41 12 8.17 9.76 8.17 7C8.17 4.24 10.41 2 13.17 2C15.93 2 18.17 4.24 18.17 7C18.17 9.76 15.93 12 13.17 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default NaturePeople;
