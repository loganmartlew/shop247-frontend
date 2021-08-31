const cartItemIsDuplicate = (cart, item) => {
  const isDuplicate = cart.reduce((duplicate, curr) => {
    if (curr.product._id === item.product._id) return true;
    return duplicate;
  }, false);

  return isDuplicate;
};

export default cartItemIsDuplicate;
