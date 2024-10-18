import React from "react";
import type { RateProps } from "musae/types/rate";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { RateClassToken } from "../../utils/class-name";
import { clsx } from "@aiszlab/relax";
import { useHover, useValue } from "./hooks";
import Star from "./star";

const styles = {
  rate: stylex.create({
    default: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  }),
};

const Rate = ({
  count = 5,
  className,
  style,
  halfable = true,
  disabled = false,
  ...props
}: RateProps) => {
  const classNames = useClassNames("rate");
  const { value, change } = useValue({ value: props.value, onChange: props.onChange, halfable });
  const { enter, hovered, leave } = useHover();

  const styled = {
    rate: stylex.props(styles.rate.default),
  };

  return (
    <ul
      className={clsx(classNames[RateClassToken.Rate], className, styled.rate.className)}
      style={{
        ...styled.rate.style,
        ...style,
      }}
    >
      {new Array(count).fill(0).map((_, index) => {
        return (
          <Star
            at={index}
            value={(hovered ?? value) - index}
            disabled={disabled}
            key={index}
            onEnter={enter}
            onLeave={leave}
            onClick={change}
          />
        );
      })}
    </ul>
  );
};

export default Rate;
