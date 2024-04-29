import React from "react";
import type { RateProps } from "./types";
import { Done } from "../icon/icons";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../config";
import { ComponentToken, RateClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { sizes } from "../theme/tokens.stylex";

const styles = {
  rate: stylex.create({
    default: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
  }),

  star: stylex.create({
    default: {
      position: "absolute",
    },
  }),

  leading: stylex.create({
    default: {
      position: "absolute",
      width: sizes.half,
      height: sizes.full,
      overflow: "hidden",
      insetInlineStart: 0,
      insetBlockStart: 0,
      opacity: 0,
    },
  }),

  trailing: stylex.create({
    default: {},
  }),
};

const Rate = ({ count, className, style }: RateProps) => {
  const classNames = useClassNames(ComponentToken.Rate);

  const styled = {
    rate: stylex.props(styles.rate.default),
    star: stylex.props(styles.star.default),
    leading: stylex.props(styles.leading.default),
    trailing: stylex.props(styles.trailing.default),
  };

  return (
    <ul
      className={clsx(classNames[RateClassToken.Rate], className, styled.rate)}
      style={{
        ...styled.rate.style,
        ...style,
      }}
    >
      {new Array(count).fill(0).map(() => {
        return (
          <li className={clsx(classNames[RateClassToken.Star], styled.star)} style={styled.star.style}>
            <div className={clsx(classNames[RateClassToken.Leading], styled.leading)} style={styled.leading.style}>
              <Done />
            </div>
            <div className={clsx(classNames[RateClassToken.Trailing], styled.trailing)} style={styled.trailing.style}>
              <Done />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Rate;
