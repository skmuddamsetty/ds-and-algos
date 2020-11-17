/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  let index = 0;
  for (let num of nums) {
    let currDiff = target - num;
    if (map[currDiff] !== undefined) {
      return [map[currDiff], index];
    }
    map[num] = index;
    index++;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
