const formatDisplayPrice = price => {
  if (!price) throw new Error();
  if (typeof price !== 'number') throw new Error();

  return `$${(price / 100).toFixed(2)}`;
};

export default formatDisplayPrice;
