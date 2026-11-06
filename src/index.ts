export function rotateArray<T>(items: readonly T[], offset: number): T[] {
  if (!Array.isArray(items) || !Number.isSafeInteger(offset))
    throw new TypeError('Expected array and safe integer offset');
  if (items.length === 0) return [];
  const shift = ((offset % items.length) + items.length) % items.length;
  return [...items.slice(-shift || items.length), ...items.slice(0, -shift || undefined)];
}
