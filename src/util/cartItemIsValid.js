import productIsValid from './productIsValid';

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

export default cartItemIsValid;
