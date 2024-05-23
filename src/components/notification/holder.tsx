import React, { useState } from "react";
import { Placement } from "./types";

const Holder = () => {
  const [placements, setPlacements] = useState(new Map<Placement, string[]>());

  return Array.from(placements.entries()).map(([placement, value]) => {
    return <div></div>;
  });
};

export default Holder;
