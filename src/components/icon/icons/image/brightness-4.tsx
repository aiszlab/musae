import React from "react";
import { withIcon } from "../../hoc";

const Brightness4 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.061)">
        <path
          d="M19.31 8V3.31H14.62L11.31 0L8 3.31H3.31V8L0 11.31L3.31 14.62V19.31H8L11.31 22.62L14.62 19.31H19.31V14.62L22.62 11.31L19.31 8ZM17.31 13.79V17.31H13.79L11.31 19.79L8.83 17.31H5.31V13.79L2.83 11.31L5.31 8.83V5.31H8.83L11.31 2.83L13.79 5.31H17.31V8.83L19.79 11.31L17.31 13.79ZM11.6 6.31C10.86 6.31 10.15 6.48 9.52 6.77C11.24 7.56 12.44 9.3 12.44 11.31C12.44 13.32 11.24 15.06 9.52 15.85C10.15 16.14 10.86 16.31 11.6 16.31C14.36 16.31 16.6 14.07 16.6 11.31C16.6 8.55 14.36 6.31 11.6 6.31Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Brightness4;
