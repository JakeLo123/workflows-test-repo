import { expect, test } from "vitest";
import { addNumbers } from "./index";

test("adds 1 + 2 to equal 3", () => {
  expect(addNumbers(1, 2)).toBe(4);
});