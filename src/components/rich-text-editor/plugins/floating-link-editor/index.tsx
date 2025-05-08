import React, { useMemo } from "react";
import { Popper } from "../../../popper";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { getElementByNode } from "../../utils/get-element-by-node";
import { $createLinkNode, TOGGLE_LINK_COMMAND, type LinkNode } from "@lexical/link";
import { useBoolean, useEvent } from "@aiszlab/relax";
import { Space } from "../../../space";
import { OpenInNew, Edit, LinkOff } from "../../../icon/icons";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../../../theme/tokens.stylex";
import { Button } from "../../../button";
import { Form, Item as FormItem } from "../../../form";
import { Input } from "../../../input";
import { $createTextNode } from "lexical";
import { IconButton } from "../../../icon-button";

interface Props {
  link: LinkNode | null;
}

interface FormValues {
  title: string;
  href: string;
}

const styles = $create({
  popper: {
    padding: spacing.xxsmall,
  },
});

const FloatingLinkEditorPlugin = ({ link }: Props) => {
  const [editor] = useLexicalComposerContext();
  const [isEditable, { turnOn, turnOff }] = useBoolean();
  const form = Form.useForm<FormValues>();

  const trigger = useMemo(() => {
    return getElementByNode(editor, link);
  }, [editor, link]);

  const styled = $props(styles.popper);

  const updateLink = useEvent(async () => {
    const isValid = await form.validate().catch(() => false);
    if (!isValid) return;

    const { href, title } = form.getFieldsValue();

    editor.update(() => {
      if (!link) return;
      const linkNode = $createLinkNode(href);
      linkNode.append($createTextNode(title));
      linkNode.select();
      link.replace(linkNode, false);
    });

    turnOff();
  });

  const edit = () => {
    if (!link) return;

    editor.read(() => {
      const href = link.getURL();
      form.setFieldValue("href", href);
      turnOn();
    });
  };

  const linkOff = () => {
    editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
  };

  const openLink = () => {
    if (!link) return;
    window.open(link.getURL());
  };

  return (
    <Popper
      open={!!link}
      trigger={trigger}
      className={styled.className}
      style={styled.style}
      onExited={turnOff}
    >
      {!isEditable && (
        <Space>
          <IconButton variant="text" size="small" onClick={openLink}>
            <OpenInNew />
          </IconButton>

          <IconButton variant="text" size="small" onClick={edit}>
            <Edit />
          </IconButton>

          <IconButton variant="text" size="small" onClick={linkOff}>
            <LinkOff />
          </IconButton>
        </Space>
      )}

      {isEditable && (
        <Form form={form}>
          <Form.Item name="title" label="标题">
            <Input />
          </Form.Item>

          <Form.Item name="href" label="链接">
            <Input />
          </Form.Item>

          <Button variant="filled" size="small" onClick={updateLink}>
            确定
          </Button>
        </Form>
      )}
    </Popper>
  );
};

export default FloatingLinkEditorPlugin;
