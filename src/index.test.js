import { IndexComponent } from "./index.js";

describe("index.js", () => {
  let indexComponent;

  beforeAll(() => {
    indexComponent = new IndexComponent();
    console.log("before all", indexComponent);
  });

  test("should first", () => {
    console.log("test");
    expect(1).toBe(1);
  });
});
