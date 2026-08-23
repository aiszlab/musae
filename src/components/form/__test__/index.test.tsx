import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Form } from "../index";

describe("Form", () => {
  it("uses the default layout when layout is omitted", () => {
    const { container } = render(<Form>content</Form>);

    expect(container.querySelector("form")).not.toHaveStyle({ display: "flex" });
  });

  it("renders form items in an inline layout", () => {
    const { container: defaultContainer } = render(<Form>content</Form>);
    const { container: inlineContainer } = render(<Form layout="inline">content</Form>);

    expect(inlineContainer.querySelector("form")).toHaveClass("musae-form");
    expect(inlineContainer.querySelector("form")?.className).not.toBe(
      defaultContainer.querySelector("form")?.className,
    );
  });

  it("allows custom styles to override layout styles", () => {
    const { container } = render(
      <Form layout="inline" style={{ display: "grid" }}>
        content
      </Form>,
    );

    expect(container.querySelector("form")).toHaveStyle({ display: "grid" });
  });
});
