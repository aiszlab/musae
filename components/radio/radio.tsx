import React, { useContext, useEffect } from "react";
import Wrapper from "./wrapper";
import Context from "./context";

const Radio = () => {
  const contextValue = useContext(Context);

  return <Wrapper type="radio" />;
};

export default Radio;
