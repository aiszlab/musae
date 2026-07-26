import React from "react";
import { withIcon } from "../../hoc";

const IconCommentsDisabled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.485 15.3447H20.655V3.34473H7.485L5.485 1.34473H20.655C21.755 1.34473 22.655 2.24473 22.655 3.34473V18.5147L19.485 15.3447ZM18.655 5.34473H9.485L11.485 7.34473H18.655V5.34473ZM18.655 8.34473H12.485L14.485 10.3447H18.655V8.34473ZM18.655 13.3447V11.3447H15.485L17.485 13.3447H18.655ZM22.555 21.2447L21.145 22.6547L15.825 17.3447H4.655C3.555 17.3447 2.655 16.4447 2.655 15.3447V4.17473L1.345 2.85473L2.755 1.44473L22.555 21.2447ZM13.825 15.3447L11.825 13.3447H6.655V11.3447H9.825L8.825 10.3447H6.655V8.34473H6.825L4.655 6.17473V15.3447H13.825Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCommentsDisabled;
