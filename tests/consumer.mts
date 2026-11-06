import * as api from '@lp-labs/array-rotator';
import { rotateArray } from '@lp-labs/array-rotator';
console.log(rotateArray([1, 2, 3, 4], 1));
// @ts-expect-error invalid argument must be rejected by declarations
api.rotateArray('array', 1);
