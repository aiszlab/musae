import React from "react";
import { withIcon } from "../../hoc";

const Brightness5 = withIcon(({ size }) => {
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
          d="M19.31 8V3.31H14.62L11.31 0L8 3.31H3.31V8L0 11.31L3.31 14.62V19.31H8L11.31 22.62L14.62 19.31H19.31V14.62L22.62 11.31L19.31 8ZM17.31 13.79V17.31H13.79L11.31 19.79L8.83 17.31H5.31V13.79L2.83 11.31L5.31 8.83V5.31H8.83L11.31 2.83L13.79 5.31H17.31V8.83L19.79 11.31L17.31 13.79ZM11.31 5.81C8.28 5.81 5.81 8.28 5.81 11.31C5.81 14.34 8.28 16.81 11.31 16.81C14.34 16.81 16.81 14.34 16.81 11.31C16.81 8.28 14.34 5.81 11.31 5.81ZM11.31 14.81C9.38 14.81 7.81 13.24 7.81 11.31C7.81 9.38 9.38 7.81 11.31 7.81C13.24 7.81 14.81 9.38 14.81 11.31C14.81 13.24 13.24 14.81 11.31 14.81Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Brightness5;
