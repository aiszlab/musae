import React, {
  cloneElement,
  useRef,
  useMemo,
  isValidElement,
  type MouseEvent,
  type CSSProperties,
} from "react";
import type { PopconfirmProps, ChildProps } from "musae/types/popconfirm";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { PopconfirmClassToken } from "../../utils/class-name";
import { Space } from "../space";
import { Button } from "../button";
import { useBoolean, useClickAway, useEvent, clsx } from "@aiszlab/relax";
import { Warning } from "musae/icons";
import { Popper } from "../popper";
import { spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { useTheme } from "../theme";
import { useLocale } from "../../locale";
import type { PopperRef } from "musae/types/popper";

const styles = stylex.create({
  popconfirm: {
    padding: spacing.medium,
    maxWidth: "100vw",

    // layout
    display: "grid",
    gridTemplateAreas: "'leading title' '. content' 'footer footer'",
    gap: spacing.xsmall,
  },

  simple: {
    gridTemplateAreas: "'leading content' 'footer footer'",
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

const Popconfirm = ({
  content,
  title,
  onConfirm,
  onCancel,
  className,
  placement = "top",
  children: _children,
  style,
  offset,
}: PopconfirmProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, { turnOff, toggle }] = useBoolean();
  const classNames = useClassNames("popconfirm");
  const popperRef = useRef<PopperRef>(null);
  const theme = useTheme();
  const [locale] = useLocale("popconfirm");

  const onClick = useEvent((event: MouseEvent<HTMLDivElement>) => {
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

  const children = useMemo(() => {
    const props: ChildProps<HTMLDivElement> = {
      ref,
      onClick,
    };

    if (isValidElement<ChildProps<HTMLDivElement>>(_children)) {
      return cloneElement(_children, props);
    }

    return (
      <div ref={ref} onClick={onClick}>
        {_children}
      </div>
    );
  }, [ref, onClick, _children]);

  useClickAway(() => {
    turnOff();
  }, [popperRef, ref]);

  const styled = {
    popconfirm: stylex.props(styles.popconfirm, !title && styles.simple),
    leading: stylex.props(styles.leading({ color: theme.colors.warning })),
    title: stylex.props(styles.title, typography.title.medium),
    content: stylex.props(styles.content, typography.body.medium),
    footer: stylex.props(styles.footer),
  };

  return (
    <>
      {children}

      <Popper
        trigger={ref.current}
        open={isOpen}
        arrow
        placement={placement}
        ref={popperRef}
        offset={offset}
      >
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

          {!!title && (
            <div
              className={clsx(classNames[PopconfirmClassToken.Title], styled.title.className)}
              style={styled.title.style}
            >
              {title}
            </div>
          )}

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
