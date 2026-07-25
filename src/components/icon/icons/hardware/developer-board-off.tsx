import React from "react";
import { withIcon } from "../../hoc";

const DeveloperBoardOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.0563) scale(1.1262)">
        <path
          d="M7.14 2.9H17.31V13.07L19.14 14.9H21.31V12.9H19.31V10.9H21.31V8.9H19.31V6.9H21.31V4.9H19.31V2.9C19.31 1.8 18.41 0.9 17.31 0.9H5.14L7.14 2.9ZM11.31 7.07V4.9H15.31V7.9H12.14L11.31 7.07ZM9.14 4.9H10.31V6.07L9.14 4.9ZM13.14 8.9H15.31V11.07L13.14 8.9ZM17.31 18.9C17.37 18.9 17.42 18.9 17.47 18.89L19.79 21.21L21.2 19.8L1.41 0L0 1.41L1.32 2.73C1.31 2.79 1.31 2.84 1.31 2.9V16.9C1.31 18 2.21 18.9 3.31 18.9H17.31ZM3.31 16.9V4.73L5.31 6.73V9.9H8.48L9.48 10.9H5.31V14.9H10.31V11.73L11.31 12.73V14.9H13.48L15.48 16.9H3.31Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DeveloperBoardOff;
