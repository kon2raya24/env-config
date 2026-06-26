import { describe, it, expect } from "vitest";
import { getEnv } from "../getenv";

describe("getEnv", () => {
  it("should be a function", () => {
    expect(typeof getEnv).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => getEnv(null as any)).toThrow();
  });
});
