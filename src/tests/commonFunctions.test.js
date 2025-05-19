import {
  calculatePoints,
  calculateMonthlyPoints,
  calculateTotalPoints,
  getMonthInWord,
} from "../util/commonFunctions";

describe("calculatePoints", () => {
  test("should return 0 for amount <= 50", () => {
    expect(calculatePoints(30)).toBe(0);
  });

  test("should return 50 for amount = 100", () => {
    expect(calculatePoints(100)).toBe(50);
  });

  test("should return 90 for amount = 120", () => {
    expect(calculatePoints(120)).toBe(90); // 2*(120-100) + 1*(100-50)
  });

  test("should return 0.5 points for amount = 50.5", () => {
    expect(calculatePoints(50.5)).toBe(0.5);
  });

  test("should return 1 point for amount = 51", () => {
    expect(calculatePoints(51)).toBe(1);
  });

  test("should return 52.75 points for amount = 101.375", () => {
    // Breakdown:
    // Over 100: 2 * (101.375 - 100) = 2.75
    // Between 50 and 100: 50 points
    // Total = 52.75
    expect(calculatePoints(101.375)).toBe(52.75);
  });
});

describe("calculateMonthlyPoints", () => {
  test("should calculate monthly points correctly", () => {
    const transaction = {
      customerId: "C001",
      amount: 120,
      date: "2025-05-10",
    };
    expect(calculateMonthlyPoints(transaction)).toBe(90);
  });
});

describe("calculateTotalPoints", () => {
  test("should calculate total points correctly", () => {
    const transaction = {
      customerId: "C001",
      amount: 120,
      date: "2025-05-10",
    };
    expect(calculateTotalPoints(transaction)).toBe(90);
  });
});

describe("getMonthInWord", () => {
  test("should return formatted month string", () => {
    expect(getMonthInWord("2025-05-10")).toBe("May-2025");
  });
});
