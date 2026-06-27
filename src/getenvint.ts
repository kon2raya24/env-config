
// Type exports for consumers
// Add specific types as needed
/**
 * getEnvInt
 * @param key
 * @param defaultValue?
 */
export function getEnvInt(key: string, defaultValue?: number): number {
  const val = process.env[key];
  if (val === undefined || val === "") {
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`Missing required env var: ${key}`);
  }
  const num = parseInt(val, 10);
  if (isNaN(num)) throw new Error(`Env var ${key} is not a valid integer: ${val}`);
  return num;
}
