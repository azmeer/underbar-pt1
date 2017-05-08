const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any number is odd in an object', () => {
    const nums = {a: 2, b: 4, c: 5, d: 6};
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd in an object', () => {
    const nums = {a: 2, b: 4, c: 6, d: 8};
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  
  it('returns true if at least one of the indexed numbers in an array-like object test positive', () => {
    const arrayLikeObj = { length: 4,
                           0: 5,
                           1: 2,
                           2: 6,
                           3: 15
                         };
    expect(_.some(arrayLikeObj, num => num > 10)).toBe(true);
  });

  it('returns false if none of the indexed numbers in an array-like object test positive', () => {
    const arrayLikeObj = { length: 3,
                           0: 5,
                           1: 2,
                           2: 6,
                           3: 15
                         };
    expect(_.some(arrayLikeObj, num => num > 10)).toBe(false);
  });
});
