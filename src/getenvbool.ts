/**
 * getEnvBool
 * @param key
 * @param defaultValue?
 */
export function getEnvBool(key: string, defaultValue?: boolean): boolean {
  const val = process.env[key];
  if (val === undefined || val === "") {
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`Missing required env var: ${key}`);
  }
  return ["true", "1", "yes"].includes(val.toLowerCase());
}
