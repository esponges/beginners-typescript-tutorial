import { expect, it } from "vitest";

interface Numbers {
  a: number;
  b: number;
}

export const addTwoNumbers = (a: Numbers['a'], b: Numbers['b']): number => {
  return a + b;
};

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
