import React, { type CSSProperties } from "react";
import type { RateProps } from "./types";
import { Done } from "../icon/icons";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../config";
import { ComponentToken, RateClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { useValue } from "./hooks";

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
      transition: "all 0.2s",
      cursor: "pointer",

      ":hover": {
        transform: "scale(1.1)",
      },
    },

    disabled: {
      cursor: null,

      ":hover": {
        transform: null,
      },
    },
  }),

  leading: stylex.create({
    default: (props: { color: CSSProperties["color"] }) => ({
      position: "absolute",
      width: sizes.half,
      height: sizes.full,
      overflow: "hidden",
      insetInlineStart: 0,
      insetBlockStart: 0,
      opacity: 0,
      userSelect: "none",

      ":hover": {
        opacity: 1,
        color: props.color,
      },
    }),

    checked: (props: { color: CSSProperties["color"] }) => ({
      opacity: 1,
      color: props.color,
    }),
  }),

  trailing: stylex.create({
    default: {
      userSelect: "none",
    },

    checked: (props: { color: CSSProperties["color"] }) => ({
      color: props.color,
    }),
  }),
};

const Rate = ({ count, className, style, partialable = true, disabled = false, ...props }: RateProps) => {
  const classNames = useClassNames(ComponentToken.Rate);
  const theme = useTheme();
  const { value, change } = useValue({ value: props.value, onChange: props.onChange, partialable });

  const styled = {
    rate: stylex.props(styles.rate.default),
    star: stylex.props(styles.star.default, disabled && styles.star.disabled),
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
        const current = index + 1;
        const partial = current - 0.5;
        const isSame = value === current;
        const isPartial = value === partial;

        const _styled = {
          leading: stylex.props(
            styles.leading.default({ color: theme.colors[ColorToken.Primary] }),
            isPartial &&
              styles.leading.checked({
                color: theme.colors[ColorToken.Primary],
              })
          ),
          trailing: stylex.props(
            styles.trailing.default,
            isSame &&
              styles.trailing.checked({
                color: theme.colors[ColorToken.Primary],
              })
          ),
        };

        return (
          <li className={clsx(classNames[RateClassToken.Star], styled.star.className)} style={styled.star.style}>
            {/* partialable half */}
            {partialable && (
              <div
                className={clsx(classNames[RateClassToken.Leading], _styled.leading.className)}
                style={_styled.leading.style}
                onClick={
                  disabled
                    ? void 0
                    : () => {
                        change(partial);
                      }
                }
              >
                <Done />
              </div>
            )}

            {/* whole */}
            <div
              className={clsx(classNames[RateClassToken.Trailing], _styled.trailing.className)}
              style={_styled.trailing.style}
              onClick={
                disabled
                  ? void 0
                  : () => {
                      change(current);
                    }
              }
            >
              <Done />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Rate;
