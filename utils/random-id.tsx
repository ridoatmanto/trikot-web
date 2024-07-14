export function RandomId() {
  return Math.random().toString(36).slice(2, 7);
}
