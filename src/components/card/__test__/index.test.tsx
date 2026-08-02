import { render, fireEvent } from "@testing-library/react";
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

  test("disabled card does not respond to click", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Card onClick={onClick} disabled>
        clickable but disabled
      </Card>,
    );
    fireEvent.click(getByText("clickable but disabled"));
    expect(onClick).not.toHaveBeenCalled();
  });

  test("horizontal layout applies row flex and 80px media", () => {
    const { asFragment } = render(
      <Card layout="horizontal">
        <Card.Header title="Header" subhead="Subhead" monogramText="A" />
        <Card.Media src="https://example.com/image.jpg" alt="example" />
      </Card>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("all three variants in horizontal layout", () => {
    const { asFragment } = render(
      <>
        <Card layout="horizontal" variant="outlined">
          <Card.Header title="Header" subhead="Subhead" monogramText="A" />
          <Card.Media src="https://example.com/image.jpg" alt="example" />
        </Card>
        <Card layout="horizontal" variant="elevated">
          <Card.Header title="Header" subhead="Subhead" monogramText="A" />
          <Card.Media src="https://example.com/image.jpg" alt="example" />
        </Card>
        <Card layout="horizontal" variant="filled">
          <Card.Header title="Header" subhead="Subhead" monogramText="A" />
          <Card.Media src="https://example.com/image.jpg" alt="example" />
        </Card>
      </>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("dragged state applies dragged state layer class", () => {
    const { asFragment } = render(
      <Card onClick={() => {}} dragged>
        dragged card
      </Card>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("draggable auto-detects drag state via HTML5 events", () => {
    const { asFragment, getByText } = render(
      <Card onClick={() => {}} draggable>
        draggable card
      </Card>,
    );
    fireEvent.dragStart(getByText("draggable card"));
    expect(asFragment()).toMatchSnapshot();
  });

  test("elevated hover applies elevation 2", () => {
    const { asFragment } = render(
      <Card variant="elevated" onClick={() => {}}>
        elevated hover
      </Card>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("Title/Subhead/Body subcomponents render with M3 typography", () => {
    const { asFragment } = render(
      <Card>
        <Card.Content>
          <Card.Headline>
            <Card.Title>Title</Card.Title>
            <Card.Subhead>Subhead</Card.Subhead>
          </Card.Headline>
          <Card.Body>Body text content</Card.Body>
          <Card.Actions>
            <button>Action</button>
          </Card.Actions>
        </Card.Content>
      </Card>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("Header action is wrapped in 48x48 container", () => {
    const { asFragment } = render(
      <Card>
        <Card.Header
          title="Header"
          subhead="Subhead"
          monogramText="A"
          action={<button aria-label="more">...</button>}
        />
        <Card.Content>Content</Card.Content>
      </Card>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
