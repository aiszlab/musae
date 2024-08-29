import React, { useMemo } from "react";
import { Popper } from "../../../popper";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { getElementByNode } from "../../utils/get-element-by-node";
import { $createLinkNode, TOGGLE_LINK_COMMAND, type LinkNode } from "@lexical/link";
import { useBoolean, useEvent } from "@aiszlab/relax";
import { Space } from "../../../space";
import { OpenInNew, Edit, LinkOff } from "../../../icon/icons";
import stylex from "@stylexjs/stylex";
import { spacing } from "../../../theme/tokens.stylex";
import { Button } from "../../../button";
import { Form } from "../../../form";
import { Input } from "../../../input";
import { useForm } from "../../../form/hooks";

interface Props {
  link: LinkNode | null;
}

interface FormValues {
  href: string;
}

const styles = stylex.create({
  popper: {
    padding: spacing.small,
  },
});

const FloatingLinkEditorPlugin = ({ link }: Props) => {
  const [editor] = useLexicalComposerContext();
  const isLink = !!link;
  const [isEditable, { turnOn, turnOff }] = useBoolean();
  const form = useForm<FormValues>();

  const trigger = useMemo(() => {
    return getElementByNode(editor, link);
  }, [editor, link]);

  const styled = stylex.props(styles.popper);

  const changeLink = useEvent(async () => {
    const isValid = await form.trigger().catch(() => false);
    if (!isValid) return;

    const { href } = form.getValues();

    editor.update(() => {
      const linkNode = $createLinkNode(href);
      link?.replace(linkNode, true);
    });

    turnOff();
  });

  const edit = () => {
    if (!link) return;

    editor.read(() => {
      const href = link.getURL();

      console.log("href======", href);

      form.setValue("href", href);
      turnOn();
    });
  };

  const linkOff = () => {
    editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
  };

  return (
    <Popper
      open={isLink}
      trigger={trigger}
      className={styled.className}
      style={styled.style}
      onExited={turnOff}
    >
      {!isEditable && (
        <Space>
          <Button variant="text" shape="circular" size="small">
            <OpenInNew />
          </Button>

          <Button variant="text" shape="circular" size="small" onClick={edit}>
            <Edit />
          </Button>

          <Button variant="text" shape="circular" size="small" onClick={linkOff}>
            <LinkOff />
          </Button>
        </Space>
      )}

      {isEditable && (
        <Form form={form}>
          <Form.Item name="href" label="链接">
            <Input />
          </Form.Item>

          <Button variant="filled" size="small" onClick={changeLink}>
            确定
          </Button>
        </Form>
      )}
    </Popper>
  );
};

export default FloatingLinkEditorPlugin;
