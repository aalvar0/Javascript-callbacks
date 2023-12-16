import transformStringToArray from "./transformStringToCollection.js";

describe("Given function transformStringToArray", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const mockOnError = jest.fn().mockImplementation(() => []);
  const mockOnSuccess = jest
    .fn()
    .mockImplementation(() => ["Mi", "nombre", "es", "Alvaro"]);

  test("When the value type of is a number then empty array should be returned", () => {
    //Arrange
    const number = 12;
    //Act
    const result = transformStringToArray(number, mockOnError, mockOnSuccess);
    //Assert
    expect(result).toEqual([]);
    expect(mockOnError).toHaveBeenCalledTimes(1);
  });

  test("When the value type of is an array then empty array should be returned", () => {
    // Arrange
    const array = [1, 3, "abc"];
    // Act
    const result = transformStringToArray(array, mockOnError, mockOnSuccess);
    // Assert
    expect(result).toEqual([]);
    expect(mockOnError).toHaveBeenCalledTimes(1);
  });

  test("When the value type of is a boolean then empty array should be returned", () => {
    // Arrange
    const boolean = true;
    // Act
    const result = transformStringToArray(boolean, mockOnError, mockOnSuccess);
    // Assert
    expect(result).toEqual([]);
    expect(mockOnError).toHaveBeenCalledTimes(1);
  });
  test("When the value is an empty string then empty array should be returned", () => {
    // Arrange
    const emptyString = "";
    // Act
    const result = transformStringToArray(
      emptyString,
      mockOnError,
      mockOnSuccess
    );
    // Assert
    expect(result).toEqual([]);
    expect(mockOnError).toHaveBeenCalledTimes(1);
  });
  test("When the value type of is an array then empty array should be returned", () => {
    // Arrange
    const fulfilledString = "Mi nombre es Alvaro";
    // Act
    const result = transformStringToArray(
      fulfilledString,
      mockOnError,
      mockOnSuccess
    );
    // Assert
    expect(result).toEqual(["Mi", "nombre", "es", "Alvaro"]);
    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
  });
});
