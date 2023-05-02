import { getegid } from "process";
import getEquality from "./utils.js";
import { equal } from "assert";

describe("Given a strictEquals function", () => {
  describe("When it receives as values, 1 and 1", () => {
    test("Then it should return true", () => {
      const valueA = 1;
      const valueB = 1;
      const equality = getEquality(valueA, valueB);
      const expectedBoolean = true;

      expect(equality).toBe(expectedBoolean);
    });
  });

  describe("When it receives as values, NaN and NaN", () => {
    test("Then it should return false", () => {
      const valueA = NaN;
      const valueB = NaN;
      const equality = getEquality(valueA, valueB);
      const expectedBoolean = false;

      expect(equality).toBe(expectedBoolean);
    });
  });

  describe("When it receives as values, 0 and -0", () => {
    test("Then it should return false", () => {
      const valueA = 0;
      const valueB = -0;
      const equality = getEquality(valueA, valueB);
      const expectedBoolean = true;

      expect(equality).toBe(expectedBoolean);
    });
  });

  describe("When it receives as value, -0 and 0", () => {
    test("Then it should return false", () => {
      const valueA = -0;
      const valueB = 0;
      const equality = getEquality(valueA, valueB);
      const expectedBoolean = true;

      expect(equality).toBe(expectedBoolean);
    });
  });

  describe("When it receives as value, 1 and '1'", () => {
    test("Then it should return false", () => {
      const valueA = 1;
      const valueB = "1";
      const equality = getEquality(valueA, valueB);
      const expectedBoolean = false;

      expect(equality).toBe(expectedBoolean);
    });
  });

  describe("When it receives as value, true and false", () => {
    test("Then it should return false", () => {
      const valueA = true;
      const valueB = false;
      const equality = getEquality(valueA, valueB);
      const expectedBoolean = false;

      expect(equality).toBe(expectedBoolean);
    });
  });

  describe("When it receives as value, false and false", () => {
    test("Then it should return true", () => {
      const valueA = false;
      const valueB = false;
      const equality = getEquality(valueA, valueB);
      const expectedBoolean = true;

      expect(equality).toBe(expectedBoolean);
    });
  });

  describe("When it receives as value, 'Water' and 'oil'", () => {
    test("Then it should return false", () => {
      const valueA = "Water";
      const valueB = "oil";
      const equality = getEquality(valueA, valueB);
      const expectedBoolean = false;

      expect(equality).toBe(expectedBoolean);
    });
  });
});
