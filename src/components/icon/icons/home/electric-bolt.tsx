import React from "react";
import { withIcon } from "../../hoc";

const ElectricBolt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4062, 0) scale(1.1998)">
        <path
          d="M10.6859 0.211393L0.325939 9.49139C-0.314061 10.0714 0.0459388 11.1414 0.905939 11.2214L8.99594 12.0014L4.14594 18.7614C3.92594 19.0714 3.95594 19.5014 4.22594 19.7714C4.52594 20.0714 4.99594 20.0814 5.30594 19.7914L15.6659 10.5114C16.3059 9.93139 15.9459 8.86139 15.0859 8.78139L6.99594 8.00139L11.8459 1.24139C12.0659 0.931393 12.0359 0.501393 11.7659 0.231393C11.4659 -0.068607 10.9959 -0.078607 10.6859 0.211393Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ElectricBolt;
