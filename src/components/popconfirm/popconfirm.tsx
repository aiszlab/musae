import React, { cloneElement, useRef, type MouseEvent, type CSSProperties } from "react";
import type { PopconfirmProps, ChildProps } from "musae/types/popconfirm";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { PopconfirmClassToken } from "../../utils/class-name";
import { Space } from "../space";
import { Button } from "../button";
import { useBoolean, useClickAway, useEvent, useRefs, clsx } from "@aiszlab/relax";
import { Warning } from "musae/icons";
import { Popper, type PopperRef } from "../popper";
import { spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { ComponentToken } from "../../utils/component-token";
import { useLocale } from "../../locale";

const styles = stylex.create({
  popconfirm: {
    padding: spacing.medium,
    maxWidth: "100vw",

    // layout
    display: "grid",
    grid: "'leading title' '. content' 'footer footer'",
    gap: spacing.small,
  },

  leading: (props: { color: CSSProperties["color"] }) => ({
    gridArea: "leading",
    display: "flex",
    alignSelf: "center",
    color: props.color,
  }),

  title: {
    gridArea: "title",
  },

  content: {
    gridArea: "content",
  },

  footer: {
    gridArea: "footer",
    justifyContent: "flex-end",
  },
});

const Popconfirm = <P extends ChildProps<T>, T extends HTMLElement>({
  content,
  title,
  onConfirm,
  onCancel,
  className,
  placement = "top",
  children: _children,
  style,
}: PopconfirmProps<P, T>) => {
  const _ref = useRef<HTMLElement>(null);
  const [isOpen, { turnOff, toggle }] = useBoolean();
  const classNames = useClassNames(ComponentToken.Popconfirm);
  const childRef = useRefs(_ref, _children.props.ref);
  const popperRef = useRef<PopperRef>(null);
  const theme = useTheme();
  const [locale] = useLocale(ComponentToken.Popconfirm);

  const onClick = useEvent((event: MouseEvent<T>) => {
    event.stopPropagation();
    toggle();
  });

  const confirm = useEvent(() => {
    onConfirm?.();
    turnOff();
  });

  const cancel = useEvent(() => {
    onCancel?.();
    turnOff();
  });

  // @ts-ignore
  const children = cloneElement<P>(_children, {
    ref: childRef,
    onClick,
  });

  useClickAway(() => {
    turnOff();
  }, [popperRef, _ref]);

  const styled = {
    popconfirm: stylex.props(styles.popconfirm),
    leading: stylex.props(styles.leading({ color: theme.colors[ColorToken.Warning] })),
    title: stylex.props(styles.title, typography.title.medium),
    content: stylex.props(styles.content, typography.body.medium),
    footer: stylex.props(styles.footer),
  };

  return (
    <>
      {children}

      <Popper trigger={_ref.current} open={isOpen} arrow placement={placement} ref={popperRef}>
        <div
          className={clsx(
            classNames[PopconfirmClassToken.Popconfirm],
            className,
            styled.popconfirm.className,
          )}
          style={{
            ...styled.popconfirm.style,
            ...style,
          }}
        >
          <div className={styled.leading.className} style={styled.leading.style}>
            <Warning />
          </div>

          <div
            className={clsx(classNames[PopconfirmClassToken.Title], styled.title.className)}
            style={styled.title.style}
          >
            {title}
          </div>

          <div
            className={clsx(classNames[PopconfirmClassToken.Description], styled.content.className)}
            style={styled.content.style}
          >
            {content}
          </div>

          <Space
            className={clsx(classNames[PopconfirmClassToken.Footer], styled.footer.className)}
            style={styled.footer.style}
          >
            <Button variant="filled" size="small" onClick={confirm}>
              {locale.confirm}
            </Button>

            <Button variant="text" size="small" onClick={cancel}>
              {locale.cancel}
            </Button>
          </Space>
        </div>
      </Popper>
    </>
  );
};

export default Popconfirm;
