const makeId = () => {
  let currId = 1;
  // console.log('makeOrderId - currId: ', currId)
  const memoizedMakeId = () => {
    currId++;
    return currId;
  }
  return memoizedMakeId
}

const makeOrderId = makeId()

module.exports = makeOrderId;