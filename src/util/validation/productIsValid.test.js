const productIsValid = require('./productIsValid');

describe('Test product validation', () => {
  test('Returned value should be true. Valid product', () => {
    const product = {
      name: 't-shirt',
      description: 'a very nice shirt',
      price: 1000,
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
      sellerId: 'es4rtgiu4a3we',
    };

    const isValid = productIsValid(product);
    expect(isValid).toBe(true);
  });

  test('Returned value should be true. Edge case for price', () => {
    const product = {
      name: 't-shirt',
      description: 'a very nice shirt',
      price: 50,
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
      sellerId: 'es4rtgiu4a3we',
    };

    const isValid = productIsValid(product);
    expect(isValid).toBe(true);
  });

  test('Returned value should be false. Invalid price', () => {
    const product = {
      name: 't-shirt',
      description: 'a very nice shirt',
      price: 49,
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
      sellerId: 'es4rtgiu4a3we',
    };

    const isValid = productIsValid(product);
    expect(isValid).toBe(false);
  });

  test('Returned value should be false. Missing description', () => {
    const product = {
      name: 't-shirt',
      price: 50,
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
      sellerId: 'es4rtgiu4a3we',
    };

    const isValid = productIsValid(product);
    expect(isValid).toBe(false);
  });

  test('Returned value should be false. Invalid images format', () => {
    const product = {
      name: 't-shirt',
      description: 'a very nice shirt',
      price: 50,
      images: ['image1', 'image2', 'image3'],
      sellerId: 'es4rtgiu4a3we',
    };

    const isValid = productIsValid(product);
    expect(isValid).toBe(false);
  });
});
