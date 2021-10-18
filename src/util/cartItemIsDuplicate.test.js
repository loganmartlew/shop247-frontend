import cartItemIsDuplicate from './cartItemIsDuplicate';

describe('test cartItemDuplicate util', () => {
  test('Should return false. No duplicate', () => {
    const cart = [
      {
        product: {
          _id: '123',
        },
      },
    ];
    const item = {
      product: {
        _id: '456',
      },
    };

    expect(cartItemIsDuplicate(cart, item)).toBe(false);
  });

  test('Should return true. has duplicate', () => {
    const cart = [
      {
        product: {
          _id: '123',
        },
      },
    ];
    const item = {
      product: {
        _id: '123',
      },
    };

    expect(cartItemIsDuplicate(cart, item)).toBe(true);
  });

  test('Should throw an Error. Invalid Cart', () => {
    const cart = [
      {
        _id: '123',
      },
    ];
    const item = {
      product: {
        _id: '456',
      },
    };

    expect(() => cartItemIsDuplicate(cart, item)).toThrow();
  });
});
