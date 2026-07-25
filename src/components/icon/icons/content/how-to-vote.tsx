import React from "react";
import { withIcon } from "../../hoc";

const HowToVote = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2007, 0) scale(1.1999)">
        <path
          d="M15 11.0013H14.32L12.32 13.0013H14.23L16 15.0013H2L3.78 13.0013H5.83L3.83 11.0013H3L0 14.0013V18.0013C0 19.1013 0.89 20.0013 1.99 20.0013H16C17.1 20.0013 18 19.1113 18 18.0013V14.0013L15 11.0013ZM16 18.0013H2V17.0013H16V18.0013ZM8.34 13.0213C8.73 13.4113 9.36 13.4113 9.75 13.0213L16.11 6.66126C16.5 6.27126 16.5 5.64126 16.11 5.25126L11.16 0.301262C10.78 -0.0987381 10.15 -0.0987381 9.76 0.291262L3.39 6.66126C3 7.05126 3 7.68126 3.39 8.07126L8.34 13.0213ZM10.46 2.41126L14 5.95126L9.05 10.9013L5.51 7.36126L10.46 2.41126Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HowToVote;
