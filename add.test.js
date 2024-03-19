import { expect, test } from "vitest";
import { addNumbers } from "./index";

test("adds 1 + 2 to equal 3", () => {
  expect(addNumbers(1, 2)).toBe(3);
  expect(addNumbers(3, 4)).toBe(7);
});
