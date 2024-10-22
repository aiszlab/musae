import React, { type CSSProperties } from "react";
import { useContext, type ReactNode } from "react";
import type { ContextValue } from "musae/types/form";
import Context from "../context";
import { Grid } from "../../grid";
import stylex from "@stylexjs/stylex";
import { typography } from "../../theme/theme";
import { sizes, spacing } from "../../theme/tokens.stylex";
import { useTheme } from "../../theme";
import { clsx } from "@aiszlab/relax";
import { ComponentProps } from "musae/types/element";
import { useClassNames } from "../../../hooks/use-class-names";
import { FormClassToken } from "../../../utils/class-name";

const { Row, Col } = Grid;

const styles = stylex.create({
  space: {
    marginBlockEnd: spacing.xlarge,
  },

  required: (props: { color: CSSProperties["color"] }) => ({
    "::before": {
      content: '"*"',
      color: props.color,
      marginRight: spacing.xxsmall,
    },
  }),

  supporting: {
    minHeight: sizes.xsmall,
    paddingInline: spacing.large,
    display: "flex",
    flexDirection: "column",
  },
});

/**
 * @description
 * layout props
 */
type Props = ComponentProps & {
  /**
   * @description
   * children
   */
  children: ReactNode;

  /**
   * @description
   * label for current input
   */
  label?: string;

  /**
   * @description
   * how many columns should the label take
   */
  labelCol?: ContextValue["labelCol"];

  /**
   * @description
   * how many columns should the input take
   */
  wrapperCol?: ContextValue["wrapperCol"];

  /**
   * @description
   * display required
   */
  required: boolean;

  /**
   * @description
   * if this item has margin space
   */
  space?: boolean;

  /**
   * @description
   * supporting
   */
  supporting?: ReactNode;
};

/**
 * @description
 * item layout
 */
const Layout = ({ required, space = false, className, style, supporting, ...props }: Props) => {
  const contextValue = useContext(Context);
  const labelCol = props.labelCol ?? contextValue.labelCol;
  const wrapperCol = props.wrapperCol ?? contextValue.wrapperCol;
  const theme = useTheme();
  const classNames = useClassNames("form");
  const isLabeled = labelCol > 0 && !!props.label;

  const styled = {
    item: stylex.props(space && !supporting && styles.space),
    label: stylex.props(
      required &&
        styles.required({
          color: theme.colors.error,
        }),
      typography.label.small,
    ),
    supporting: stylex.props(styles.supporting, typography.body.small),
  };

  return (
    <Row
      gutter={[0, 8]}
      className={clsx(className, styled.item.className)}
      style={{
        ...styled.item.style,
        ...style,
      }}
    >
      {/* label */}
      {isLabeled && (
        <Col span={labelCol}>
          <span className={clsx(styled.label.className)} style={styled.label.style}>
            {props.label}
          </span>
        </Col>
      )}

      {/* input */}
      <Col span={wrapperCol}>{props.children}</Col>

      {/* supporting */}
      {!!supporting && (
        <Col span={24}>
          <div
            className={clsx(
              classNames[FormClassToken.FieldSupporting],
              styled.supporting.className,
            )}
            style={styled.supporting.style}
          >
            {supporting}
          </div>
        </Col>
      )}
    </Row>
  );
};

export default Layout;
