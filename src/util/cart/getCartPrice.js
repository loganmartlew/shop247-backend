/**
 * Function to get the price of a provided cart
 *
 * @param {CartItem[]} cart - A cart array
 *
 * @return {number} price - Price of the cart in cents
 */
const getCartPrice = cart => {
  const price = cart.reduce((price, currItem) => {
    return price + currItem.product.price * currItem.quantity;
  }, 0);

  return price;
};

module.exports = getCartPrice;
