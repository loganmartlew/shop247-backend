/**
 * Function to validate if a product has the required fields in the correct format
 *
 * @param {Product} product - A product object
 *
 * @return {boolean} valid - Boolean value describing if the product is valid
 */
const productIsValid = product => {
  if (!product) return false;

  // Validate name
  if (!product.name) return false;
  if (typeof product.name !== 'string')
    if (product.name.length < 1) return false;

  // Validate description
  if (!product.description) return false;
  if (typeof product.description !== 'string')
    if (product.description.length < 1) return false;

  // Validate price
  if (!product.price) return false;
  if (typeof product.price !== 'number');
  if (product.price < 50) return false;

  // Validate image array
  if (!product.images) return false;
  if (!Array.isArray(product.images)) return false;
  if (product.images.length < 1) return false;

  // Validate image array items
  const imagesValid = product.images.reduce((valid, currImage) => {
    if (!currImage.url) return false;
    if (typeof currImage.url !== 'string') return false;
    if (currImage.url.length < 1) return false;

    return valid;
  }, true);

  if (!imagesValid) return false;

  // Validate sellerId
  if (!product.sellerId) return false;
  if (typeof product.sellerId !== 'string') return false;
  if (product.sellerId.length < 1) return false;

  // Product is valid
  return true;
};

module.exports = productIsValid;
