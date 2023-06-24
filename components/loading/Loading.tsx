import React from "react";
import styles from "./index.module.css";
import clsx from "clsx";

const Loading = () => {
  return (
    <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
      <circle
        className={clsx([styles["runner"], styles["circle-a"]])}
        cx="120"
        cy="120"
        r="105"
        fill="none"
        stroke="#000"
        stroke-width="20"
        stroke-dasharray="0 660"
        stroke-dashoffset="-330"
        stroke-linecap="round"
      />
      <circle
        className={clsx([styles["runner"], styles["circle-b"]])}
        cx="120"
        cy="120"
        r="35"
        fill="none"
        stroke="#000"
        stroke-width="20"
        stroke-dasharray="0 220"
        stroke-dashoffset="-110"
        stroke-linecap="round"
      />
      <circle
        className={clsx([styles["runner"], styles["circle-c"]])}
        cx="85"
        cy="120"
        r="70"
        fill="none"
        stroke="#000"
        stroke-width="20"
        stroke-dasharray="0 440"
        stroke-linecap="round"
      />
      <circle
        className={clsx([styles["runner"], styles["circle-d"]])}
        cx="155"
        cy="120"
        r="70"
        fill="none"
        stroke="#000"
        stroke-width="20"
        stroke-dasharray="0 440"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Loading;
