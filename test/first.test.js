const _ = require('../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns an empty array when asked for 0 elements', () => {
    expect(_.first(['a', 'b', 'c'], 0)).toEqual([]);
  });

// Note: Behavior differs from Underscore.js so test is modified accordingly below
//  it('returns an empty array when asked for a negative number of elements', () => {
//    expect(_.first(['a', 'b', 'c'], -2)).toEqual(['a']);
//  });

  it('returns array.slice(0,index) when asked for a negative number of elements', () => {
    expect(_.first(['a', 'b', 'c'], -2)).toEqual(['a']);
  });
  
  
});
