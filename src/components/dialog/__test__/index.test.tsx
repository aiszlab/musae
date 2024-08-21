import { render } from "@testing-library/react";
import Dialog from "../dialog";
import React from "react";
import "@testing-library/jest-dom";

describe("`Dialog` Component", () => {
  test("component render", () => {
    render(<Dialog open />);

    // node render in screen
    expect(document.querySelector(".musae-dialog")).toBeInTheDocument();
  });

  // test("dialog destory after 3s", () => {
  //   jest.useFakeTimers();

  //   const Demo = () => {
  //     const [isOpen, { turnOff, turnOn }] = useBoolean(false);
  //     const ref = useRef<HTMLDivElement>(null);

  //     useEffect(() => {
  //       act(() => {
  //         turnOn();
  //       });
  //     }, []);

  //     useTimeout(() => {
  //       act(() => {
  //         turnOff();
  //       });
  //     }, 3000);

  //     return (
  //       <div ref={ref}>
  //         <Dialog open={isOpen} container={ref.current} />
  //       </div>
  //     );
  //   };

  //   const { asFragment } = render(<Demo />);

  //   jest.runAllTimers();
  //   expect(asFragment()).toMatchSnapshot();
  //   expect(document.querySelector(".musae-dialog")).toBeNull();
  // });
});
