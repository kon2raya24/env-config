/**
 * getEnv
 * @param key
 * @param defaultValue?
 */
export function getEnv(key: string, defaultValue?: string): string {
  const val = process.env[key];
  if (val === undefined || val === "") {
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`Missing required env var: ${key}`);
  }
  return val;
}
