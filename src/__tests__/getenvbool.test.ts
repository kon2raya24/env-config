import { describe, it, expect } from "vitest";
import { getEnvBool } from "../getenvbool";

describe("getEnvBool", () => {
  it("should be a function", () => {
    expect(typeof getEnvBool).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => getEnvBool(null as any)).toThrow();
  });
});
