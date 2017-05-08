const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('it returns an array of ages, given an object with people properties', () => {
    const people = {
      'Harriet': {age: 12},
      'Lazarus': {age: 999},
      'Bethany': {age: 14}
    };
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });
});
