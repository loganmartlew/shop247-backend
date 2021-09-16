const getLineItemsFromCart = require('./getLineItemsFromCart');

describe('Test line item transformation', () => {
  test('Transformation should be successful', () => {
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
          ],
          sellerId: 'es4rtgiu4a3we',
        },
      },
    ];

    const lineItems = [
      {
        price_data: {
          currency: 'nzd',
          unit_amount: 1000,
          product_data: {
            name: 't-shirt',
            description: 'a very nice shirt',
            images: ['image1'],
          },
        },
        quantity: 4,
        description: 'a very nice shirt',
      },
      {
        price_data: {
          currency: 'nzd',
          unit_amount: 1500,
          product_data: {
            name: 't-shirt',
            description: 'a very nice shirt',
            images: ['image1'],
          },
        },
        quantity: 1,
        description: 'a very nice shirt',
      },
    ];

    expect(getLineItemsFromCart(cart)).toEqual(lineItems);
  });

  test('Should throw as cart is not privided', () => {
    expect(() => getLineItemsFromCart()).toThrow();
  });
});
