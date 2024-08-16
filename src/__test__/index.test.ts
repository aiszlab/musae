import * as Musae from "../index";

describe("`Musae` Entry", () => {
  test("without src", () => {
    expect(Musae).not.toBeNull();
  });
});
