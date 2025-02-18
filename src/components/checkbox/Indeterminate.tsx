import React from "react";
import { ComponentProps } from "../../types/element";

const Indeterminate = ({ className, style }: ComponentProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <path d="M6 13.0001V11.0001H18V13.0001H6Z" fill="currentColor" />
    </svg>
  );
};

export default Indeterminate;
