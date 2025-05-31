import React, { useContext, type CSSProperties } from "react";
import { type ReactNode } from "react";
import type { ContextValue } from "../../../types/form";
import Context from "../context";
import { Grid } from "../../grid";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { typography } from "../../theme/theme";
import { sizes, spacing } from "../../theme/tokens.stylex";
import { useTheme } from "../../theme";
import { stringify } from "@aiszlab/relax/class-name";
import type { ComponentProps } from "../../../types/element";

const { Row, Col } = Grid;

const styles = $create({
  space: {
    marginBlockEnd: spacing.xxlarge,
  },

  required: (props: { color: CSSProperties["color"] }) => ({
    "::before": {
      content: '"*"',
      color: props.color,
      marginRight: spacing.xxxxxsmall,
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
  label?: ReactNode;

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
  const { classNames, ...contextValue } = useContext(Context);
  const labelCol = props.labelCol ?? contextValue.labelCol;
  const wrapperCol = props.wrapperCol ?? contextValue.wrapperCol;
  const theme = useTheme();
  const isLabeled = labelCol > 0 && !!props.label;

  const styled = {
    item: $props(space && !supporting && styles.space),
    label: $props(
      required &&
        styles.required({
          color: theme.colors.error,
        }),
      typography.label.small,
    ),
    supporting: $props(styles.supporting, typography.body.small),
  };

  return (
    <Row
      gutter={[0, 8]}
      className={stringify(className, styled.item.className)}
      style={{
        ...styled.item.style,
        ...style,
      }}
    >
      {/* label */}
      {isLabeled && (
        <Col span={labelCol}>
          <span className={stringify(styled.label.className)} style={styled.label.style}>
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
            className={stringify(classNames.fieldSupporting, styled.supporting.className)}
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
