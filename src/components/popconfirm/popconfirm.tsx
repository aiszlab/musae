import React from "react";
import { Popover } from "../popover";
import { PopconfirmProps, ChildProps } from "./types";

const Popconfirm = <P extends ChildProps<T>, T extends HTMLElement>({
  description,
  ...props
}: PopconfirmProps<P, T>) => {
  return <Popover triggerBy="click" description={<div>{description}</div>} {...props} />;
};

export default Popconfirm;
