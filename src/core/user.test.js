import { CoreUser } from "./users.js";

describe("CoreUser", () => {
  let coreUser;

  beforeAll(() => {
    coreUser = new CoreUser();
  });

  test("should first", () => {
    expect(1).toBe(1);
    // expect(coreUser).toExist();
  });
});
