import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ActionSheet } from "../index";
import type { ActionItem } from "../../../types/action-sheet";

const DEFAULT_ACTIONS: ActionItem[] = [
  { key: "edit", text: "编辑" },
  { key: "delete", text: "删除" },
  { key: "share", text: "分享", description: "分享给好友" },
];

const TestActionSheet = (props: Partial<Parameters<typeof ActionSheet>[0]> = {}) => {
  const [open, setOpen] = React.useState(props.open ?? true);

  return (
    <ActionSheet
      open={open}
      onClose={() => {
        props.onClose?.();
        setOpen(false);
      }}
      actions={props.actions ?? DEFAULT_ACTIONS}
      title={props.title}
      description={props.description}
      cancelText={props.cancelText}
      height={props.height}
      {...props}
    />
  );
};

describe("ActionSheet", () => {
  describe("rendering", () => {
    it("renders when open", () => {
      render(<TestActionSheet />);
      expect(screen.getByText("编辑")).toBeInTheDocument();
      expect(screen.getByText("删除")).toBeInTheDocument();
    });

    it("does not render when closed", () => {
      render(<TestActionSheet open={false} />);
      expect(screen.queryByText("编辑")).not.toBeInTheDocument();
      expect(screen.queryByText("删除")).not.toBeInTheDocument();
    });

    it("renders title when provided", () => {
      render(<TestActionSheet title="操作" />);
      expect(screen.getByText("操作")).toBeInTheDocument();
    });

    it("renders description when provided", () => {
      render(<TestActionSheet description="请选择你要执行的操作" />);
      expect(screen.getByText("请选择你要执行的操作")).toBeInTheDocument();
    });

    it("does not render title when not provided", () => {
      render(<TestActionSheet />);
      const titleElement = document.querySelector(".musae-action-sheet__title");
      expect(titleElement).not.toBeInTheDocument();
    });

    it("does not render description when not provided", () => {
      render(<TestActionSheet />);
      const descElement = document.querySelector(".musae-action-sheet__description");
      expect(descElement).not.toBeInTheDocument();
    });

    it("renders action descriptions when provided", () => {
      render(<TestActionSheet />);
      expect(screen.getByText("分享给好友")).toBeInTheDocument();
    });

    it("renders all action items", () => {
      render(<TestActionSheet />);
      const actions = document.querySelectorAll(".musae-action-sheet__action");
      expect(actions.length).toBe(3);
    });

    it("renders cancel button with default locale text", () => {
      render(<TestActionSheet />);
      // Default locale is en_US, so cancel text should be "Cancel"
      expect(screen.getByText("Cancel")).toBeInTheDocument();
    });

    it("renders custom cancel text", () => {
      render(<TestActionSheet cancelText="关闭" />);
      expect(screen.getByText("关闭")).toBeInTheDocument();
    });

    it("renders empty actions container when actions array is empty", () => {
      render(<TestActionSheet actions={[]} />);
      expect(document.querySelector(".musae-action-sheet__actions")).not.toBeInTheDocument();
      expect(screen.getByText("Cancel")).toBeInTheDocument();
    });

    it("applies BEM class names", () => {
      render(<TestActionSheet />);
      expect(document.querySelector(".musae-action-sheet")).toBeInTheDocument();
      expect(document.querySelector(".musae-action-sheet__header")).toBeInTheDocument();
      expect(document.querySelector(".musae-action-sheet__actions")).toBeInTheDocument();
      expect(document.querySelector(".musae-action-sheet__action")).toBeInTheDocument();
      expect(document.querySelector(".musae-action-sheet__cancel")).toBeInTheDocument();
    });
  });

  describe("interactions", () => {
    it("calls onClick and onClose when action item is clicked", async () => {
      const onEdit = jest.fn();
      const onClose = jest.fn();

      render(
        <TestActionSheet
          onClose={onClose}
          actions={[{ key: "edit", text: "编辑", onClick: onEdit }]}
        />,
      );

      await userEvent.click(screen.getByText("编辑"));
      expect(onEdit).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("calls onClose even if onClick throws", async () => {
      const onBadAction = jest.fn().mockImplementation(() => {
        throw new Error("action failed");
      });
      const onClose = jest.fn();

      render(
        <TestActionSheet
          onClose={onClose}
          actions={[{ key: "bad", text: "危险操作", onClick: onBadAction }]}
        />,
      );

      await userEvent.click(screen.getByText("危险操作"));
      expect(onBadAction).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("calls onClose when cancel button is clicked", async () => {
      const onClose = jest.fn();
      render(<TestActionSheet onClose={onClose} />);

      await userEvent.click(screen.getByText("Cancel"));
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("calls onClose when overlay is clicked", async () => {
      const onClose = jest.fn();
      render(<TestActionSheet onClose={onClose} />);

      const overlay = document.querySelector(".musae-sheet__overlay");
      expect(overlay).toBeInTheDocument();

      await userEvent.click(overlay!);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("does not call action onClick when clicking cancel", async () => {
      const onEdit = jest.fn();
      const onClose = jest.fn();

      render(
        <TestActionSheet
          onClose={onClose}
          actions={[{ key: "edit", text: "编辑", onClick: onEdit }]}
        />,
      );

      await userEvent.click(screen.getByText("Cancel"));
      expect(onEdit).not.toHaveBeenCalled();
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("snapshot", () => {
    it("matches snapshot with default props", () => {
      const { asFragment } = render(<TestActionSheet />);
      expect(asFragment()).toMatchSnapshot();
    });

    it("matches snapshot with title and description", () => {
      const { asFragment } = render(
        <TestActionSheet title="确认操作" description="此操作不可撤销" />,
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it("matches snapshot with custom cancel text", () => {
      const { asFragment } = render(<TestActionSheet cancelText="关闭" />);
      expect(asFragment()).toMatchSnapshot();
    });

    it("matches snapshot with action descriptions", () => {
      const { asFragment } = render(
        <TestActionSheet
          actions={[
            { key: "photo", text: "拍照", description: "使用相机拍摄" },
            { key: "album", text: "从相册选择", description: "从手机相册选取" },
          ]}
        />,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
