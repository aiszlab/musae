import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { SideSheet } from "../index";

const TITLE = "Side sheet title";
const BODY_CONTENT = "Side sheet content";
const ACTIONS = "Side sheet actions";

const TestSideSheet = (props: Partial<Parameters<typeof SideSheet>[0]> = {}) => {
  const [open, setOpen] = React.useState(props.open ?? true);

  return (
    <SideSheet
      title={TITLE}
      open={open}
      onClose={() => {
        props.onClose?.();
        setOpen(false);
      }}
      {...props}
    >
      {props.children ?? BODY_CONTENT}
    </SideSheet>
  );
};

describe("SideSheet", () => {
  it("renders title and content when open", () => {
    render(<TestSideSheet />);
    expect(screen.getByText(TITLE)).toBeInTheDocument();
    expect(screen.getByText(BODY_CONTENT)).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(<TestSideSheet open={false} />);
    expect(screen.queryByText(TITLE)).not.toBeInTheDocument();
    expect(screen.queryByText(BODY_CONTENT)).not.toBeInTheDocument();
  });

  it("renders close button and calls onClose when clicked", async () => {
    const onClose = jest.fn();
    render(<TestSideSheet onClose={onClose} />);

    const header = document.querySelector(".musae-side-sheet__header");
    const closer = header?.querySelector("button");
    expect(closer).toBeInTheDocument();

    await userEvent.click(closer!);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("renders back button when onBack is provided and calls onBack when clicked", async () => {
    const onBack = jest.fn();
    render(<TestSideSheet onBack={onBack} />);

    const header = document.querySelector(".musae-side-sheet__header");
    const buttons = header?.querySelectorAll("button");
    expect(buttons?.length).toBe(2);

    await userEvent.click(buttons![0]);
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it("does not render back button when onBack is not provided", () => {
    render(<TestSideSheet />);

    const header = document.querySelector(".musae-side-sheet__header");
    expect(header?.querySelectorAll("button").length).toBe(1);
  });

  it("renders actions with a divider when provided", () => {
    render(<TestSideSheet actions={ACTIONS} />);

    expect(screen.getByText(ACTIONS)).toBeInTheDocument();
    expect(document.querySelector(".musae-side-sheet__actions")).toBeInTheDocument();
    expect(document.querySelector(".musae-divider")).toBeInTheDocument();
  });

  it("does not render actions area when actions are not provided", () => {
    render(<TestSideSheet />);
    expect(document.querySelector(".musae-side-sheet__actions")).not.toBeInTheDocument();
  });

  it("calls onClose when overlay is clicked in modal type", async () => {
    const onClose = jest.fn();
    render(<TestSideSheet onClose={onClose} />);

    const overlay = document.querySelector(".musae-sheet__overlay");
    expect(overlay).toBeInTheDocument();

    await userEvent.click(overlay!);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Escape is pressed in modal type", async () => {
    const onClose = jest.fn();
    render(<TestSideSheet onClose={onClose} />);

    const sheet = document.querySelector(".musae-side-sheet");
    expect(sheet).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("renders inline without overlay in standard type", () => {
    render(<TestSideSheet type="standard" />);

    expect(screen.getByText(TITLE)).toBeInTheDocument();
    expect(screen.getByText(BODY_CONTENT)).toBeInTheDocument();
    expect(document.querySelector(".musae-sheet__overlay")).not.toBeInTheDocument();
    expect(document.querySelector(".musae-side-sheet")).toBeInTheDocument();
  });

  it("does not render standard type when closed", () => {
    render(<TestSideSheet type="standard" open={false} />);
    expect(document.querySelector(".musae-side-sheet")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked in standard type", async () => {
    const onClose = jest.fn();
    render(<TestSideSheet type="standard" onClose={onClose} />);

    const header = document.querySelector(".musae-side-sheet__header");
    const closer = header?.querySelector("button");
    await userEvent.click(closer!);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("applies custom size to panel", () => {
    render(<TestSideSheet type="standard" size={400} />);
    const sideSheet = document.querySelector(".musae-side-sheet");
    expect(sideSheet).toHaveStyle({ "--size": "400px" });
  });
});
