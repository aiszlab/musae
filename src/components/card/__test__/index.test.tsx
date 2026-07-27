import { render } from "@testing-library/react";
import { Card } from "..";
import React from "react";
import "@testing-library/jest-dom";

describe("`Card` Component", () => {
  test("variant render", () => {
    const { asFragment } = render(
      <>
        <Card>outlined card</Card>
        <Card variant="elevated">elevated card</Card>
        <Card variant="filled">filled card</Card>
      </>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("with header, media, content and actions", () => {
    const { asFragment } = render(
      <Card>
        <Card.Header title="Header" subhead="Subhead" monogramText="A" />
        <Card.Media src="https://example.com/image.jpg" alt="example" />
        <Card.Content>
          <div>Content text here</div>
        </Card.Content>
        <Card.Actions>
          <button>Action</button>
        </Card.Actions>
      </Card>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("interactive card renders with state layer", () => {
    const { asFragment } = render(<Card onClick={() => {}}>clickable card</Card>);
    expect(asFragment()).toMatchSnapshot();
  });
});
