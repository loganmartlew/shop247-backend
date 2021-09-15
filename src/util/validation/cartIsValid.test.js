const cartIsValid = require('./cartIsValid');

describe('Test full cart validation', () => {
  test('Returned value should be true. Valid cart', () => {
    const cart = [
      {
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
      },
      {
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
      },
    ];

    const isValid = cartIsValid(cart);
    expect(isValid).toBe(true);
  });

  test('Returned value should be false. Invalid cart item', () => {
    const cart = [
      {
        quantity: -2,
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
      },
      {
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
      },
    ];

    const isValid = cartIsValid(cart);
    expect(isValid).toBe(false);
  });

  test('Returned value should be false. Invalid product', () => {
    const cart = [
      {
        quantity: 2,
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
      },
      {
        quantity: 1,
        product: {
          name: 't-shirt',
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
      },
    ];

    const isValid = cartIsValid(cart);
    expect(isValid).toBe(false);
  });
});
