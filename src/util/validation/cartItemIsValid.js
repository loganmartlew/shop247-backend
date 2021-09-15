const productIsValid = require('./productIsValid');

/**
 * Function to validate if a cart item has the required fields in the correct format
 *
 * @param {CartItem} item - A product object
 *
 * @return {boolean} valid - Boolean value describing if the product is valid
 */
const cartItemIsValid = item => {
  if (!item) return false;

  // Validate product
  if (!productIsValid(item.product)) return false;

  // Validate quantity
  if (!item.quantity) return false;
  if (typeof item.quantity !== 'number') return false;
  if (item.quantity < 1) return false;

  // Item is valid
  return true;
};

module.exports = cartItemIsValid;
