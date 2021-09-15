const cartItemIsValid = require('./cartItemIsValid');

describe('Test cart item validation', () => {
  test('Returned value should be true. Valid cart item', () => {
    const item = {
      quantity: 4,
      product: {
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
      },
    };

    const isValid = cartItemIsValid(item);
    expect(isValid).toBe(true);
  });

  test('Returned value should be true. Edge case for quantity', () => {
    const item = {
      quantity: 1,
      product: {
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
      },
    };

    const isValid = cartItemIsValid(item);
    expect(isValid).toBe(true);
  });

  test('Returned value should be false. Edge case for quantity', () => {
    const item = {
      quantity: 0,
      product: {
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
      },
    };

    const isValid = cartItemIsValid(item);
    expect(isValid).toBe(false);
  });

  test('Returned value should be false. Invalid quantity', () => {
    const item = {
      quantity: -4,
      product: {
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
      },
    };

    const isValid = cartItemIsValid(item);
    expect(isValid).toBe(false);
  });

  test('Returned value should be false. Missing product', () => {
    const item = {
      quantity: 4,
    };

    const isValid = cartItemIsValid(item);
    expect(isValid).toBe(false);
  });
});
