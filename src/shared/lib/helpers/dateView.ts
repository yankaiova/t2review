export function dateView(date: string): string {
  /* eslint-disable no-useless-escape */
  return date.replace(/\-/g, ".");
}
