const _ = require('../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['burger', 'ketchup', 'cookie']);
  });

  it('rejects the indexed numbers from an array-like object', () => {
    const assorted = {
      length: 5,
      0: 'a',
      1: 3,
      2: 2342,
      3: 'Hello, Mrs. Robinson',
      4: 'Jeremy',
      sancho: 'panza',
      theonetrueanswer: 42
    };
    const assortedStrings = _.reject(assorted, (value) => !isNaN(value));
    expect(assortedStrings).toEqual(['a', 'Hello, Mrs. Robinson', 'Jeremy']);
  });
  
});
