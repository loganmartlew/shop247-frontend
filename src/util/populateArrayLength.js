const populateArrayLength = arr => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(null);
  }

  return newArr;
};

export default populateArrayLength;
