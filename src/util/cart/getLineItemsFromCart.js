const getLineItemsFromCart = cart => {
  const lineItems = cart.map(cartItem => ({
    price_data: {
      currency: 'nzd',
      unit_amount: cartItem.product.price,
      product_data: {
        name: cartItem.product.name,
        description: cartItem.product.description,
        images: cartItem.product.images.map(image => image.url),
      },
    },
    quantity: cartItem.quantity,
    description: cartItem.product.description,
  }));

  return lineItems;
};

module.exports = getLineItemsFromCart;
