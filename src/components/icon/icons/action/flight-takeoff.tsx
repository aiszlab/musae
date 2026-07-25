import React from "react";
import { withIcon } from "../../hoc";

const FlightTakeoff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2.51999 18.7152H21.52V20.7152H2.51999V18.7152ZM22.09 9.35516C21.88 8.55516 21.05 8.07516 20.25 8.29516L14.94 9.71516L8.03999 3.28516L6.10999 3.79516L10.25 10.9652L5.27999 12.2952L3.30999 10.7552L1.85999 11.1452L4.44999 15.6352L21.02 11.2052C21.83 10.9752 22.3 10.1552 22.09 9.35516Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default FlightTakeoff;
