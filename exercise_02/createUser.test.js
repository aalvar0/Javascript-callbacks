import OnSuccess from "./callbacks/OnSuccess.js";
import onError from "./callbacks/onError.js";
import createUser from "./createUser.js";

describe("Given function createUser", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockOnError = jest
    .fn()
    .mockImplementation(() => "Error: user not created");
  const mockOnSuccess = jest
    .fn()
    .mockImplementation(
      (email) => `User with email ${email} has been correctly created`,
    );
  describe("When the function is called with an empty string value", () => {
    test("Then the text Error: user not created should be returned.", () => {
      // Arrange
      const email = "";

      // Act
      const result = createUser(email, mockOnError, mockOnSuccess);

      // Assert
      expect(result).toEqual("Error: user not created");
    });
  });
  describe("When the function is called with a value of type string", () => {
    const email = "johndoe@gmail.com";
    test(
      "Then the text User with email " +
        email +
        " has been correctly created should be returned.",
      () => {
        // Arrange
        const email = "johndoe@gmail.com";
        const spyOnMathRandom = jest.spyOn(Math, "random");
        spyOnMathRandom.mockReturnValueOnce(0.5);

        // Act
        const result = createUser(email, mockOnError, mockOnSuccess);

        // Assert
        expect(result).toEqual(
          "User with email " + email + " has been correctly created",
        );
        expect(mockOnSuccess).toHaveBeenCalledTimes(1);
      },
    );
    test(
      "Then the text User with email " +
        email +
        " has been correctly created should be returned.",
      () => {
        // Arrange
        const email = "johndoe@gmail.com";
        const spyOnMathRandom = jest.spyOn(Math, "random");
        spyOnMathRandom.mockReturnValueOnce(0.8);

        // Act
        const result = createUser(email, mockOnError, mockOnSuccess);

        // Assert
        expect(result).toEqual(
          "User with email " + email + " has been correctly created",
        );
        expect(mockOnSuccess).toHaveBeenCalledTimes(1);
      },
    );
    test(
      "Then the text User with email " +
        email +
        " has been correctly created should be returned.",
      () => {
        // Arrange
        const email = "johndoe@gmail.com";
        const spyOnMathRandom = jest.spyOn(Math, "random");
        spyOnMathRandom.mockReturnValueOnce(0.2);

        // Act
        const result = createUser(email, mockOnError, mockOnSuccess);

        // Assert
        expect(result).toEqual("Error: user not created");
        expect(mockOnError).toHaveBeenCalledTimes(1);
      },
    );
  });
});
