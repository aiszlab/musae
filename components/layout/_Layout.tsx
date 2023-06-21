import React, { forwardRef, useMemo } from "react";
import { Props } from "./";
import clsx from "clsx";

interface _Props extends Props {
  isChild?: boolean;
}

const _Layout = forwardRef<null, _Props>((props, ref) => {
  /* 是否包含侧边 */
  const hasSider = useMemo(() => !!props.sider, [props.sider]);
  /* 是否包含头部 */
  const hasHeader = useMemo(() => !!props.header, [props.header]);
  /* 是否包含底部 */
  const hasFooter = useMemo(() => !!props.footer, [props.footer]);

  // 没有任何布局时，直接返回正文布局
  if (!hasHeader && !hasSider && !hasFooter)
    return (
      <div
        className={clsx({
          "flex-1": !!props.isChild,
          "w-full": !props.isChild,
          "h-full": !props.isChild,
        })}
      >
        {props.children}
      </div>
    );

  // 不包含侧边时，直接返回垂直布局
  if (!hasSider)
    return (
      <div className={clsx({ "flex-1": !!props.isChild }, "flex flex-col")}>
        {/* 头部 */}
        {props.header ? <div className="h-16">{props.header}</div> : null}

        {/* 正文 */}
        <_Layout isChild>{props.children}</_Layout>

        {/* 底部 */}
        {props.footer ? <div className="h-32">{props.footer}</div> : null}
      </div>
    );

  // 递归创建布局
  return (
    <div className="flex flex-row">
      {/* 侧边布局 */}
      <div className="w-72">{props.sider}</div>

      {/* 正文布局 */}
      <_Layout header={props.header} footer={props.footer} isChild>
        {props.children}
      </_Layout>
    </div>
  );
});

export default _Layout;
