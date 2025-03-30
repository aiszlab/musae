import React, {
  cloneElement,
  useRef,
  useMemo,
  isValidElement,
  type MouseEvent,
  type CSSProperties,
} from "react";
import type { PopconfirmProps, ChildProps } from "../../types/popconfirm";
import { $create, $props } from "../../utils/styles";
import { Space } from "../space";
import { Button } from "../button";
import { useBoolean, useClickAway, useEvent } from "@aiszlab/relax";
import { Warning } from "../icon/icons";
import { Popper } from "../popper";
import { spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { useTheme } from "../theme";
import { useLocale } from "../../locale";
import type { PopperRef } from "../../types/popper";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";

const styles = $create({
  popconfirm: {
    padding: spacing.medium,
    maxWidth: "100vw",

    // layout
    display: "grid",
    gridTemplateAreas: "'leading title' '. content' 'footer footer'",
    gap: spacing.xxsmall,
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
  const classNames = useClassNames(CLASS_NAMES);
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
    popconfirm: $props(styles.popconfirm, !title && styles.simple),
    leading: $props(styles.leading({ color: theme.colors.warning })),
    title: $props(styles.title, typography.title.medium),
    content: $props(styles.content, typography.body.medium),
    footer: $props(styles.footer),
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
          className={stringify(classNames.popconfirm, className, styled.popconfirm.className)}
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
              className={stringify(classNames.title, styled.title.className)}
              style={styled.title.style}
            >
              {title}
            </div>
          )}

          <div
            className={stringify(classNames.description, styled.content.className)}
            style={styled.content.style}
          >
            {content}
          </div>

          <Space
            className={stringify(classNames.footer, styled.footer.className)}
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
