const makeId = () => {
  let currId = 1;
  console.log('makrOrderId - currId: ', currId)
  const memoizedMakeId = () => {
    currId++;
    return currId;
  }
  return memoizedMakeId
}

const makeCustId = makeId()

module.exports = makeCustId;