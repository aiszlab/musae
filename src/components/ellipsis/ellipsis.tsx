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

const Ellipsis = ({ value = "", textOverflow = "...", className, style }: EllipsisProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [_value, _setValue] = useState(value);

  const styled = {
    ellipsis: stylex.props(styles.ellipsis),
    virtual: stylex.attrs(styles.virtual),
  };

  useEffect(() => {
    console.log("ref=====", ref);

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
    });

    console.log("_exceedAt====", _exceedAt);

    _setValue(value.substring(0, _exceedAt + 1 || void 0).concat(textOverflow));
  }, [value, textOverflow]);

  useEffect(() => {
    console.log("ref2222222=====", ref);
  }, []);

  return (
    <Tooltip title={value}>
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
