import React from "react";
import "../../styles/loading.css";
import clsx from "clsx";

const Loading = () => {
  return (
    <svg className="musae-loading" width="240" height="240" viewBox="0 0 240 240">
      <circle
        className={clsx(["runner", "circle-a"])}
        cx="120"
        cy="120"
        r="105"
        fill="none"
        stroke="#000"
        strokeWidth="20"
        strokeDasharray="0 660"
        strokeDashoffset="-330"
        strokeLinecap="round"
      />
      <circle
        className={clsx(["runner", "circle-b"])}
        cx="120"
        cy="120"
        r="35"
        fill="none"
        stroke="#000"
        strokeWidth="20"
        strokeDasharray="0 220"
        strokeDashoffset="-110"
        strokeLinecap="round"
      />
      <circle
        className={clsx(["runner", "circle-c"])}
        cx="85"
        cy="120"
        r="70"
        fill="none"
        stroke="#000"
        strokeWidth="20"
        strokeDasharray="0 440"
        strokeLinecap="round"
      />
      <circle
        className={clsx(["runner", "circle-d"])}
        cx="155"
        cy="120"
        r="70"
        fill="none"
        stroke="#000"
        strokeWidth="20"
        strokeDashoffset="0 440"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Loading;
