import changeIsValid from './changeIsValid';

describe('Test change validation', () => {
  /* Expect valid tests */

  test('Returned value should be true. Change is valid', () => {
    const product = {
      name: 'cap',
      description: 'Best cap, mint condition, rich history, many memes',
      price: 250,
      images: [
        {
          url: 'image1',
        },
      ],
      sellerId: 'a6VkjGwgbBgFOUsqJ6sByQT4lJ13',
    };

    const isValid = changeIsValid(product);
    expect(isValid).toBe(true);
  });

  test('User changes name, description with string and price with integer. Change is valid', () => {
    const product = {
      name: 'Yankee with no brim',
      description: 'Its a cap with no brim',
      price: 450,
      images: [
        {
          url: 'image1',
        },
      ],
      sellerId: 'a6VkjGwgbBgFOUsqJ6sByQT4lJ13',
    };

    const isValid = changeIsValid(product);
    expect(isValid).toBe(true);
  });

  test('If there user puts in new images for product. Change is valid', () => {
    const product = {
      name: 'cap',
      description: 'Best cap, mint condition, rich history, many memes',
      price: 250,
      images: [
        {
          url: 'image1',
        },
        {
          url: 'image2',
        },
        {
          url: 'image3',
        },
      ],
      sellerId: 'a6VkjGwgbBgFOUsqJ6sByQT4lJ13',
    };

    const isValid = changeIsValid(product);
    expect(isValid).toBe(true);
  });

  /* Expect invalid tests */

  test('If price value is a string and not an integer. Change is invalid', () => {
    const product = {
      name: 'cap',
      description: 'Best cap, mint condition, rich history, many memes',
      price: 'fifty',
      images: [
        {
          url: 'image1',
        },
      ],
      sellerId: 'a6VkjGwgbBgFOUsqJ6sByQT4lJ13',
    };

    const isValid = changeIsValid(product);
    expect(isValid).toBe(false);
  });

  test('If price is less than 50 cents (0.50). Change is invalid', () => {
    const product = {
      name: 'cap',
      description: 'Best cap, mint condition, rich history, many memes',
      price: 0.49,
      images: [
        {
          url: 'image1',
        },
      ],
      sellerId: 'a6VkjGwgbBgFOUsqJ6sByQT4lJ13',
    };

    const isValid = changeIsValid(product);
    expect(isValid).toBe(false);
  });

  test('If there is no name. Change is invalid', () => {
    const product = {
      name: '',
      description: 'Best cap, mint condition, rich history, many memes',
      price: 250,
      images: [
        {
          url: 'image1',
        },
      ],
      sellerId: 'a6VkjGwgbBgFOUsqJ6sByQT4lJ13',
    };

    const isValid = changeIsValid(product);
    expect(isValid).toBe(false);
  });

  test('If there is no description. Change is invalid', () => {
    const product = {
      name: 'cap',
      description: '',
      price: 250,
      images: [
        {
          url: 'image1',
        },
      ],
      sellerId: 'a6VkjGwgbBgFOUsqJ6sByQT4lJ13',
    };

    const isValid = changeIsValid(product);
    expect(isValid).toBe(false);
  });
});
