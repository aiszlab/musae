import { createPortal } from "react-dom";
import React from "react";
import type { DrawerProps } from "./types";

const Drawer = (props: DrawerProps) => {
  const mask = (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "gray",
      }}
    />
  );

  return createPortal(
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {mask}

      {/* popup */}
      <div
        style={{
          width: 300,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
        }}
      >
        {props.children}
      </div>
    </div>,
    document.body
  );
};

export default Drawer;
