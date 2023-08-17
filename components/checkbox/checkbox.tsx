import React, { useRef } from "react";
import Wrapper from "./wrapper";
import { useControlledState } from "@aiszlab/relax";

const Checkbox = () => {
  const ref = useRef<HTMLInputElement>(null);

  const [isChecked, setIsChecked] = useControlledState(false);

  return <Wrapper type="checkbox" checked={isChecked} />;

  //   return (
  //     <div
  //       className="checkbox"
  //       style={{
  //         width: 16,
  //         height: 16,
  //       }} 
  //     >
  //       <svg viewBox="0 0 18 18">
  //         <polyline points="1 9 7 14 15 4" />
  //       </svg>
  //     </div>
  //   );
};

export default Checkbox;
