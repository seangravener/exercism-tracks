export function clean(phoneNumber: string): string {
  return phoneNumber.replace(/[^\d]/g, "").replace(/^1/, "");
}
