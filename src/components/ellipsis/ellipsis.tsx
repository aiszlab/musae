import stylex from "@stylexjs/stylex";
import { EllipsisProps } from "../../types/ellipsis";
import { Tooltip } from "../tooltip";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { exceedAt } from "./utils";
import { stringify } from "@aiszlab/relax/class-name";

const styles = stylex.create({
  ellipsis: {
    overflow: "hidden",
  },

  virtual: {
    position: "fixed",
    visibility: "hidden",
  },
});

const Ellipsis = ({
  value = "",
  textOverflow = "...",
  lineClamp = 1,
  className,
  style,
}: EllipsisProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [_value, _setValue] = useState(value);

  const styled = {
    ellipsis: stylex.props(styles.ellipsis),
    virtual: stylex.attrs(styles.virtual),
  };

  useEffect(() => {
    const _container = ref.current;
    if (!_container) return;

    const width = _container.clientWidth;
    const height = _container.clientHeight;

    const _exceedAt = exceedAt(value, {
      height,
      width,
      className: stringify(_container.className, styled.virtual.class),
      style: stringify(_container.style.cssText, styled.virtual.style),
      textOverflow,
      lineClamp,
    });

    _setValue(
      _exceedAt === value.length ? value : value.substring(0, _exceedAt).concat(textOverflow),
    );
  }, [value, textOverflow, lineClamp]);

  return (
    <Tooltip title={_value === value ? "" : value}>
      <div
        ref={ref}
        className={stringify(className, styled.ellipsis.className)}
        style={{
          ...styled.ellipsis.style,
          ...style,
        }}
      >
        {_value}
      </div>
    </Tooltip>
  );
};

export default Ellipsis;
