import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import type { BottomSheetProps } from "../../../types/bottom-sheet";
import { BottomSheet } from "../index";

const BODY_CONTENT = "Bottom sheet content";

const TestBottomSheet = (props: Partial<Parameters<typeof BottomSheet>[0]> = {}) => {
  const [open, setOpen] = React.useState(props.open ?? true);

  return (
    <BottomSheet
      open={open}
      onClose={() => {
        props.onClose?.();
        setOpen(false);
      }}
      {...props}
    >
      {props.children ?? BODY_CONTENT}
    </BottomSheet>
  );
};

describe("BottomSheet", () => {
  it("defaults to closed when rendered without props", () => {
    const props: BottomSheetProps = {};

    render(<BottomSheet {...props} />);
    expect(document.querySelector(".musae-bottom-sheet")).not.toBeInTheDocument();
  });

  it("renders content when open", () => {
    render(<TestBottomSheet />);
    expect(screen.getByText(BODY_CONTENT)).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(<TestBottomSheet open={false} />);
    expect(screen.queryByText(BODY_CONTENT)).not.toBeInTheDocument();
  });

  it("renders drag handle", () => {
    render(<TestBottomSheet />);
    const handle = document.querySelector(".musae-bottom-sheet__drag-handle");
    expect(handle).toBeInTheDocument();
  });

  it("calls onClose when overlay is clicked", async () => {
    const onClose = jest.fn();
    render(<TestBottomSheet onClose={onClose} />);

    const overlay = document.querySelector(".musae-sheet__overlay");
    expect(overlay).toBeInTheDocument();

    await userEvent.click(overlay!);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Escape is pressed", async () => {
    const onClose = jest.fn();
    render(<TestBottomSheet onClose={onClose} />);

    const sheet = document.querySelector(".musae-bottom-sheet");
    expect(sheet).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("applies custom height to panel", () => {
    render(<TestBottomSheet height={300} />);
    const container = document.querySelector('[style*="--size"]');
    expect(container).toHaveStyle({ "--size": "300px" });
  });

  it("forwards className and style to the sheet container", () => {
    render(
      <TestBottomSheet
        className="custom-bottom-sheet"
        style={{ backgroundColor: "rgb(255, 0, 0)" }}
      />,
    );

    const sheet = document.querySelector(".musae-bottom-sheet");
    expect(sheet).toHaveClass("custom-bottom-sheet");
    expect(sheet).toHaveStyle({ backgroundColor: "rgb(255, 0, 0)" });
  });

  it("forwards panelClassName and panelStyle to the sheet panel", () => {
    render(
      <TestBottomSheet
        panelClassName="custom-bottom-sheet-panel"
        panelStyle={{ backgroundColor: "rgb(0, 0, 255)" }}
      />,
    );

    const panel = document.querySelector(".musae-sheet__panel");
    expect(panel).toHaveClass("custom-bottom-sheet-panel");
    expect(panel).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" });
  });

  it("respects closable prop — does not close on overlay click when closable excludes overlay", async () => {
    const onClose = jest.fn();
    render(<TestBottomSheet onClose={onClose} closable={["esc"]} />);

    const overlay = document.querySelector(".musae-sheet__overlay");
    await userEvent.click(overlay!);
    expect(onClose).not.toHaveBeenCalled();
  });
});
