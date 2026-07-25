import React from "react";
import { withIcon } from "../../hoc";

const Deselect = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2121)">
        <path
          d="M1.61 10.19H3.61V8.19H1.61V10.19ZM5.61 18.19H7.61V16.19H5.61V18.19ZM11.61 0.19H9.61V2.19H11.61V0.19ZM17.61 0.19V2.19H19.61C19.61 1.09 18.71 0.19 17.61 0.19ZM3.61 18.19V16.19H1.61C1.61 17.29 2.51 18.19 3.61 18.19ZM1.61 14.19H3.61V12.19H1.61V14.19ZM9.61 18.19H11.61V16.19H9.61V18.19ZM17.61 10.19H19.61V8.19H17.61V10.19ZM17.61 6.19H19.61V4.19H17.61V6.19ZM13.61 2.19H15.61V0.19H13.61V2.19ZM6.44 2.19L5.61 1.36V0.19H7.61V2.19H6.44ZM18.44 14.19L17.61 13.36V12.19H19.61V14.19H18.44ZM19.8 18.38L1.42 0L0 1.41L2.78 4.19H1.61V6.19H3.61V5.02L5.61 7.02V14.19H12.78L14.78 16.19H13.61V18.19H15.61V17.02L18.39 19.8L19.8 18.38ZM7.61 12.19V9.02L10.78 12.19H7.61ZM13.61 9.36V6.19H10.44L8.44 4.19H15.61V11.36L13.61 9.36Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Deselect;
