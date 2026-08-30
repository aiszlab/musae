import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Search } from "../../search";
import { Portal } from "..";

const ModalStack = ({
  outerOpen,
  renderSearch,
  searchOpen,
}: {
  outerOpen: boolean;
  renderSearch: boolean;
  searchOpen: boolean;
}) => (
  <>
    <Portal open={outerOpen} destroyable modal>
      <div>Outer modal</div>
    </Portal>
    {renderSearch && <Search open={searchOpen} view="modal" />}
  </>
);

describe("Portal scroll locking", () => {
  beforeAll(() => {
    if (!("attributeStyleMap" in HTMLElement.prototype)) {
      Object.defineProperty(HTMLElement.prototype, "attributeStyleMap", {
        configurable: true,
        get() {
          const element = this as HTMLElement;
          return {
            set: (property: string, value: string) =>
              element.style.setProperty(property, String(value)),
          };
        },
      });
    }
  });

  beforeEach(() => {
    document.body.style.overflow = "auto";
    document.body.style.width = "75%";
    Object.defineProperty(document.body, "scrollHeight", {
      configurable: true,
      value: 1200,
    });
    Object.defineProperty(document.body, "offsetWidth", {
      configurable: true,
      value: 980,
    });
    Object.defineProperty(document.documentElement, "clientWidth", {
      configurable: true,
      value: 980,
    });
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: 600,
    });
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      value: 1000,
    });
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: jest.fn(() => ({
        matches: false,
        media: "(max-width: 904px)",
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  afterEach(() => {
    document.body.removeAttribute("style");
  });

  test("mounting a closed Search does not release an outer modal lock", () => {
    const { rerender } = render(<ModalStack outerOpen renderSearch={false} searchOpen={false} />);
    expect(document.body).toHaveStyle({ overflow: "hidden" });

    rerender(<ModalStack outerOpen renderSearch searchOpen={false} />);

    expect(document.body).toHaveStyle({ overflow: "hidden" });
  });

  test("closing Search retains the outer lock until the final modal owner closes", () => {
    const { rerender } = render(<ModalStack outerOpen renderSearch searchOpen />);
    expect(document.body).toHaveStyle({ overflow: "hidden" });

    rerender(<ModalStack outerOpen renderSearch searchOpen={false} />);
    expect(document.body).toHaveStyle({ overflow: "hidden" });

    rerender(<ModalStack outerOpen={false} renderSearch searchOpen={false} />);
    expect(document.body.style.overflow).toBe("auto");
    expect(document.body.style.width).toBe("75%");
  });
});
