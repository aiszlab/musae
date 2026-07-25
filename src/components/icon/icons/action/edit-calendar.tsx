import React from "react";
import { withIcon } from "../../hoc";

const EditCalendar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.93378 9.5H17.9338V11.5H19.9338V5.5C19.9338 4.4 19.0338 3.5 17.9338 3.5H16.9338V1.5H14.9338V3.5H6.93378V1.5H4.93378V3.5H3.93378C2.82378 3.5 1.94378 4.4 1.94378 5.5L1.93378 19.5C1.93378 20.6 2.82378 21.5 3.93378 21.5H10.9338V19.5H3.93378V9.5ZM3.93378 5.5H17.9338V7.5H3.93378V5.5ZM21.7738 15.78L21.0638 16.49L18.9438 14.37L19.6538 13.66C20.0438 13.27 20.6738 13.27 21.0638 13.66L21.7738 14.37C22.1638 14.76 22.1638 15.39 21.7738 15.78ZM18.2338 15.08L20.3538 17.2L15.0538 22.5H12.9338V20.38L18.2338 15.08Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default EditCalendar;
