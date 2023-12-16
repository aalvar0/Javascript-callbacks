import validateString from "./validateString.js";
describe("given and function", () => {
  test("undefined: value should return false", () => {
    // Arrange //Act// Assert
    expect(validateString(undefined)).toBe(false);
  }),
    test("number: value should return false", () => {
      // Arrange //Act// Assert
      expect(validateString(5)).toBe(false);
    }),
    test("array: value should return false", () => {
      // Arrange //Act// Assert
      expect(validateString([1, 2, 3, 4, 5])).toBe(false);
    }),
    test("boolean: value should return false", () => {
      // Arrange //Act// Assert
      expect(validateString(true)).toBe(false);
    }),
    test("object: value should return false", () => {
      // Arrange //Act// Assert
      expect(validateString({ key: "key" })).toBe(false);
    }),
    test("empty: string should return false", () => {
      // Arrange //Act// Assert
      expect(validateString("")).toBe(false);
    }),
    test("fulfilled: string should return true", () => {
      // Arrange //Act// Assert
      expect(validateString("alvaro")).toBe(true);
    });
});
