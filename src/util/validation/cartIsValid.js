const cartItemIsValid = require('./cartItemIsValid');

/**
 * Function to validate if all items in a cart are valid
 *
 * @param {CartItem[]} cart - A product object
 *
 * @return {boolean} valid - Boolean value describing if the product is valid
 */
const cartIsValid = cart => {
  try {
    const valid = cart.reduce((valid, currItem) => {
      if (!cartItemIsValid(currItem)) return false;
      return valid;
    }, true);

    return valid;
  } catch (_) {
    return false;
  }
};

module.exports = cartIsValid;
