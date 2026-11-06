import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('rotates right', () => {
  assert.deepEqual(api.rotateArray([1, 2, 3], 1), [3, 1, 2]);
});
test('rotates left', () => {
  assert.deepEqual(api.rotateArray([1, 2, 3], -1), [2, 3, 1]);
});
test('normalizes large offset', () => {
  assert.deepEqual(api.rotateArray([1, 2, 3], 7), [3, 1, 2]);
});
test('keeps array for full turn', () => {
  assert.deepEqual(api.rotateArray([1, 2], 2), [1, 2]);
});
test('handles empty array', () => {
  assert.deepEqual(api.rotateArray([], 4), []);
});
test('rejects fractional offset', () => {
  assert.throws(() => api.rotateArray([1], 1.5), TypeError);
});
