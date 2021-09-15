const getCartPrice = require('./getCartPrice');

describe('Test cart price calculation', () => {
  test('Returned cart price should be 5500', () => {
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
          price: 1500,
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

    const price = getCartPrice(cart);
    expect(price).toBe(5500);
  });

  test('Returned cart price should be 16700', () => {
    const cart = [
      {
        quantity: 4,
        product: {
          name: 't-shirt',
          description: 'a very nice shirt',
          price: 3050,
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
        quantity: 3,
        product: {
          name: 't-shirt',
          description: 'a very nice shirt',
          price: 1500,
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

    const price = getCartPrice(cart);
    expect(price).toBe(16700);
  });

  test('Function should throw. No product provided', () => {
    const cart = [
      {
        quantity: 4,
      },
    ];

    expect(() => getCartPrice(cart)).toThrow();
  });
});
