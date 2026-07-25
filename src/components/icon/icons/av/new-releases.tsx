import React from "react";
import { withIcon } from "../../hoc";

const NewReleases = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.5836) scale(1.0909)">
        <path
          d="M22 10.46L19.56 7.68L19.9 4L16.29 3.18L14.4 0L11 1.46L7.6 0L5.71 3.18L2.1 3.99L2.44 7.67L0 10.46L2.44 13.24L2.1 16.93L5.71 17.75L7.6 20.93L11 19.46L14.4 20.92L16.29 17.74L19.9 16.92L19.56 13.24L22 10.46ZM17.49 12.57L17.75 15.36L15.01 15.98L13.58 18.39L11 17.28L8.42 18.39L6.99 15.98L4.25 15.36L4.51 12.56L2.66 10.46L4.51 8.34L4.25 5.56L6.99 4.95L8.42 2.54L11 3.64L13.58 2.53L15.01 4.94L17.75 5.56L17.49 8.35L19.34 10.46L17.49 12.57ZM10 13.46H12V15.46H10V13.46ZM10 5.46H12V11.46H10V5.46Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default NewReleases;
