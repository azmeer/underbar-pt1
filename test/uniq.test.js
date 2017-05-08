const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups the values of an object', () => {
    const fruit = { 1: 'orange',
                    2: 'kumquat',
                    3: 'apple',
                    4: 'cherry',
                    5: 'orange'
                  };
    expect(_.uniq(fruit)).toEqual(['orange', 'kumquat', 'apple', 'cherry']);
  });
  
  it('de-dups an array-like object', () => {
    const assorted = {
      length: 6,
      0: 'a',
      1: 3,
      2: 2342,
      3: 'Hello, Mrs. Robinson',
      4: 'Jeremy',
      5: 2342,
      sancho: 'panza',
      theonetrueanswer: 42
    };
    expect(_.uniq(assorted)).
      toEqual(['a', 3, 2342, 'Hello, Mrs. Robinson', 'Jeremy']);
  });
});
