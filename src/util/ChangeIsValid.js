/**
 * Function to validate if a change in product has the required fields in the correct format
 *
 * @param {Product} product - A product object
 *
 * @return {boolean} valid - Boolean value describing if the product is valid
 */

const ChangeIsValid = product => {
  if (!product) return false;

  /* Validate name */
  // if (!product.name) return false;
  if (typeof product.name !== 'string') return false;
  // if (product.name.length < 1) return false;

  /* Validate description */
  // if (!product.description) return false;
  if (typeof product.description !== 'string') return false;
  // if (product.description.length < 1) return false;

  /* Validate price */
  if (!product.price) return false;
  if (typeof product.price !== 'number') return false;
  if (product.price < 50) return false;

  /* Validate sellerId */
  if (!product.sellerId) return false;
  if (typeof product.sellerId !== 'string') return false;
  if (product.sellerId.length < 1) return false;

  /* Product is valid */
  return true;
};

export default ChangeIsValid;
