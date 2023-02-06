const TestClass = require("./class");

describe("Class Test", () => {
  it("private test", () => {
    const test = new TestClass(5);
    expect(test.privateValue).toBe(5);
    test.privateValue = 10;
    expect(test.privateValue).toBe(10);
  });
});
