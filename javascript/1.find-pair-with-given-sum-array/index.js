/**
 * @param {Array} A This is input array
 * @param {Number} sum this is equal to target sum
 * @return {Array} with indexes in array which will be equal to given sum
 */
const findPairWithGivenSum = (A, sum) => {
  let map = {};
  let index = 0;
  let diff;
  for (let num of A) {
    // take the diff of sum and num
    diff = sum - num;
    // if an element in the array is found with that value
    // a pair is found which makes the current sum
    if (map[diff] !== undefined) {
      return [map[diff],index];
    }
    // storing the num as key and index as value to keep track of the index
    // of the number we have found during traversal
    map[num] = index;
    // increment index by 1 for each iteration
    index++;
  }
};

module.exports = findPairWithGivenSum;
