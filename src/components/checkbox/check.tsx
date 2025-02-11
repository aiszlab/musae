import React from "react";
import { ComponentProps } from "../../types/element";

const Check = ({ className, style }: ComponentProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M10 16.4001L6 12.4001L7.4 11.0001L10 13.6001L16.6 7.00006L18 8.40006L10 16.4001Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Check;
