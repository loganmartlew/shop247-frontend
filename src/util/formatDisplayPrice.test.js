import formatDisplayPrice from './formatDisplayPrice';

/* 
    Formats price value taken from Products database 
    and converts it to be displayed into ($) dollars.  
*/

describe('Test formatDisplayPrice', () => {
  it('if price is empty, throw an error', () => {
    expect(() => formatDisplayPrice()).toThrow();
  });

  it('formats price to have 2 decimal values', () => {
    // convert 2000 to $20.00
    expect(formatDisplayPrice(2000)).toEqual('$20.00');

    // convert 10000 to $100.00
    expect(formatDisplayPrice(10000)).toEqual('$100.00');

    // convert 250 to $2.50
    expect(formatDisplayPrice(250)).toEqual('$2.50');
  });

  it('rejects invalid values', () => {
    //if price is a string and not an integer value
    expect(() => formatDisplayPrice('f')).toThrow();
    expect(() => formatDisplayPrice('twenty')).toThrow();

    //if price has an invalid integer value
    expect(() => formatDisplayPrice('20.0.0')).toThrow();
    expect(() => formatDisplayPrice('500o0')).toThrow();
  });
});
