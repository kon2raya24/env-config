import { describe, it, expect } from "vitest";
import { getEnvInt } from "../getenvint";

describe("getEnvInt", () => {
  it("should be a function", () => {
    expect(typeof getEnvInt).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => getEnvInt(null as any)).toThrow();
  });
});
