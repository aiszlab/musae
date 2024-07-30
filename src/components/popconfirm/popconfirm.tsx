import React, { useRef } from "react";
import { Popover, PopoverRef } from "../popover";
import { PopconfirmProps, ChildProps } from "./types";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, PopconfirmClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { Space } from "../space";
import { Button } from "../button";
import { useEvent } from "@aiszlab/relax";

const styles = stylex.create({
  title: {},

  footer: {
    justifyContent: "flex-end",
  },
});

const Popconfirm = <P extends ChildProps<T>, T extends HTMLElement>({
  description,
  title,
  onConfirm,
  onCancel,
  className,
  ...props
}: PopconfirmProps<P, T>) => {
  const classNames = useClassNames(ComponentToken.Popconfirm);
  const popoverRef = useRef<PopoverRef>(null);

  const styled = {
    title: stylex.props(styles.title),
    footer: stylex.props(styles.footer),
  };

  const confirm = useEvent(() => {
    onConfirm?.();
    popoverRef.current?.close();
  });

  const cancel = useEvent(() => {
    onCancel?.();
    popoverRef.current?.close();
  });

  return (
    <Popover
      {...props}
      className={clsx(classNames[PopconfirmClassToken.Popconfirm], className)}
      ref={popoverRef}
      triggerBy="click"
      description={
        <>
          <div
            className={clsx(classNames[PopconfirmClassToken.Title], styled.title.className)}
            style={styled.title.style}
          >
            {title}
          </div>

          <div className={clsx(classNames[PopconfirmClassToken.Description])}>{description}</div>

          <Space
            className={clsx(classNames[PopconfirmClassToken.Footer], styled.footer.className)}
            style={styled.footer.style}
          >
            <Button variant="filled" size="small" onClick={confirm}>
              确认
            </Button>

            <Button variant="text" size="small" onClick={cancel}>
              取消
            </Button>
          </Space>
        </>
      }
    />
  );
};

export default Popconfirm;
