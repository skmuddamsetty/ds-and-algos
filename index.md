## Data Structures and Algorithms

### Linked List Problems

| Problem #    | Problem Title                                                                      |
| ------------ | ---------------------------------------------------------------------------------- |
| 1            | [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/) |
| Content Cell | Content Cell                                                                       |

### Binary Tree Problems

| Problem # | Problem Title           |
| --------- | ----------------------- |
| 1         | Insert Into Binary Tree |

### Binary Search Tree Problems

| Problem #    | Problem Title                                                                      |
| ------------ | ---------------------------------------------------------------------------------- |
| 1            | [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/) |
| Content Cell | Content Cell                                                                       |

### Dynamic Programming Problems

| Problem #    | Problem Title                                                                      |
| ------------ | ---------------------------------------------------------------------------------- |
| 1            | [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/) |
| Content Cell | Content Cell                                                                       |

### LeetCode Problems

| Problem #    | Problem Title                                                                      |
| ------------ | ---------------------------------------------------------------------------------- |
| 1            | [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/) |
| Content Cell | Content Cell                                                                       |

### String Problems

| Problem #    | Problem Title                                                                      |
| ------------ | ---------------------------------------------------------------------------------- |
| 1            | [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/) |
| Content Cell | Content Cell                                                                       |

## Array Problems

| Problem # | Problem Title                         |
| --------- | ------------------------------------- |
| 1         | Find pair with given sum in the array |

## Linked List Problems Solutions

### 1) Insert into Linked List

```javascript
/**
 *
 * @param {ListNode} node
 * prints the linked list with given node
 */
function printLL(node) {
  console.log(JSON.stringify(node), null, 2);
}

/**
 *
 * @param {*} val
 */
function ListNode(val) {
  this.key = val;
  this.next = null;
}

/**
 *
 * @param {ListNode} node
 * @param {Number} val
 * @return {ListNode} final head of the linked list
 */
function insertNode(node, val) {
  if (node === null) {
    return new ListNode(val);
  } else {
    node.next = insertNode(node.next, val);
  }
  return node;
}

// prepare linked list
let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let head = null;
for (let value of values) {
  head = insertNode(head, value);
}
printLL(head);
```

### 2) Insert Node at Front of Linked List

```javascript
/**
 *
 * @param {ListNode} node
 * prints the linked list with given node
 */
function printLL(node) {
  console.log(JSON.stringify(node, null, 2));
}

/**
 *
 * @param {*} val
 */
function ListNode(val) {
  this.key = val;
  this.next = null;
}

/**
 * inserts node at Front of the linked list
 * @param {ListNode} node
 * @param {Number} val
 * @return {ListNode} final head of the linked list
 */
function insertNodeAtFront(node, val) {
  if (node === null) {
    return new ListNode(val);
  }
  let newNode = new ListNode(val);
  newNode.next = node;
  return newNode;
}

// prepare linked list
let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let head = null;
for (let value of values) {
  head = insertNodeAtFront(head, value);
}
printLL(head);
```

### 3) Insert element at given position

```javascript
/**
 *
 * @param {ListNode} node
 * prints the linked list with given node
 */
function printLL(node) {
  console.log(JSON.stringify(node, null, 2));
}

/**
 *
 * @param {*} val
 */
function ListNode(val) {
  this.key = val;
  this.next = null;
}

/**
 *
 * @param {ListNode} node
 * @param {Number} val
 * @return {ListNode} final head of the linked list
 */
function insertNode(node, val) {
  if (node === null) {
    return new ListNode(val);
  } else {
    node.next = insertNode(node.next, val);
  }
  return node;
}

/**
 * inserts node at Front of the linked list
 * @param {ListNode} node
 * @param {Number} val
 * @return {ListNode} final head of the linked list
 */
function insertNodeAtGivenPosition(node, val, pos) {
  // if given node is null return;
  if (node === null) {
    return;
  }
  // create a new pointer which points to the node
  // and use this to traverse through the node
  let temp = node;
  // minimum position should be 1 and if position is less than 1, then it is invalid position
  if (pos < 1) {
    return node;
  }
  // traverse the linked list while the position is greater than 1 and
  // there are nodes present in the linked list
  while (pos > 1 && temp.next) {
    temp = temp.next;
    pos--;
  }
  // if the position is still greater than 1 after traversing all nodes
  // it means we have reached the end point and there are no nodes further
  // so this is an inavlid position
  // in this case we return the given node.
  if (pos > 1) {
    return node;
  }
  let newNode = new ListNode(val);
  newNode.next = temp.next;
  temp.next = newNode;
  return node;
}

// prepare linked list
let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let head = null;
for (let value of values) {
  head = insertNode(head, value);
}
head = insertNodeAtGivenPosition(head, 100, -1);
head = insertNodeAtGivenPosition(head, 100, 1);
head = insertNodeAtGivenPosition(head, 200, 100);
printLL(head);
```

### 4) Delete Last node of linked list

```javascript
/**
 *
 * @param {ListNode} node
 * prints the linked list with given node
 */
function printLL(node) {
  console.log(JSON.stringify(node, null, 2));
}

/**
 *
 * @param {*} val
 */
function ListNode(val) {
  this.key = val;
  this.next = null;
}

/**
 *
 * @param {ListNode} node
 * @param {Number} val
 * @return {ListNode} final head of the linked list
 */
function insertNode(node, val) {
  if (node === null) {
    return new ListNode(val);
  } else {
    node.next = insertNode(node.next, val);
  }
  return node;
}

/**
 * deletes the last node of the linked list
 * @param {ListNode} node
 * @return {ListNode} final head of the linked list
 */
function deleteLastNode(node) {
  // if the nodes next is null
  // it is the last node in the linked list
  // so this is our base case and we return null if the next node of the current Node is null
  if (node === null || node.next === null) {
    return null;
  }
  // recursively calling the function to get the next node for the current node
  node.next = deleteLastNode(node.next);
  // return node finally
  return node;
}

// prepare linked list
let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let head = null;
for (let value of values) {
  head = insertNode(head, value);
}
printLL(deleteLastNode(head));
```

## Binary Tree Problems Solutions

## Binary Search Tree Problems Solutions

## Array Problems Solutions

### 1) Find pair with given sum in the array

```javascript
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
      return [map[diff], index];
    }
    // storing the num as key and index as value to keep track of the index
    // of the number we have found during traversal
    map[num] = index;
    // increment index by 1 for each iteration
    index++;
  }
};
```

### 2) Find pair with given sum in the array

```javascript
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
      return [map[diff], index];
    }
    // storing the num as key and index as value to keep track of the index
    // of the number we have found during traversal
    map[num] = index;
    // increment index by 1 for each iteration
    index++;
  }
};
```

## LeetCode Problems

| Problem # | Problem Title                                        |
| --------- | ---------------------------------------------------- |
| 1         | Two Sum                                              |
| 7         | Reverse Integer                                      |
| 9         | Palindrome Number                                    |
| 20        | Valid Parentheses                                    |
| 27        | Remove Element                                       |
| 58        | Length of Last Word                                  |
| 62        | Unique Paths                                         |
| 66        | Plus One                                             |
| 100       | Same Tree                                            |
| 125       | Valid Palindrome                                     |
| 199       | Binary Tree Right Side View                          |
| 242       | Valid Anagram                                        |
| 252       | Meeting Rooms                                        |
| 283       | Move Zeroes                                          |
| 344       | Reverse String                                       |
| 349       | Intersection of Two Arrays                           |
| 350       | Intersection of Two Arrays II                        |
| 657       | Robot Return to Origin                               |
| 700       | Search in a Binary Search Tree                       |
| 704       | Binary Search                                        |
| 876       | Middle of the Linked List                            |
| 917       | Reverse Only Letters                                 |
| 1046      | Last Stone Weight                                    |
| 1119      | Remove Vowels from a String                          |
| 1143      | Longest Common Subsequence                           |
| 1185      | Day of the Week                                      |
| 1213      | Intersection of Three Sorted Arrays                  |
| 1299      | Replace Elements with Greatest Element on Right Side |
| 1331      | Rank Transform of an Array                           |
| 1351      | Count Negative Numbers in a Sorted Matrix            |
| 1360      | Number of Days Between Two Dates                     |
| 242       | Valid Anagram                                        |
| 242       | Valid Anagram                                        |
| 242       | Valid Anagram                                        |
| 242       | Valid Anagram                                        |

### 1. Two Sum

```javascript
/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time Compexity: O(n) because we traverse each element once in worst case
 * Space Complexity: O(n) for map
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
```

### 7. Reverse Integer

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rem = 0;
  let temp = Math.abs(x);
  while (temp > 0) {
    rem = rem * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  // range of a 32-bit integer is between -2147483648 and 2147483648
  if (Math.abs(rem) > 2147483648) {
    return 0;
  }
  return x < 0 ? rem * -1 : rem;
};
```

### 9. Palindrome Number

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let rem = 0;
  let temp = x;
  while (x > 0) {
    rem = rem * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return rem === temp;
};
```

### 20. Valid Parentheses

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = {
    '}': '{',
    ')': '(',
    ']': '[',
  };
  let stack = [];
  for (let bracket of s) {
    if (bracket === '(' || bracket === '[' || bracket === '{') {
      stack.push(bracket);
    } else {
      if (bracket === ')' && stack[stack.length - 1] !== '(') {
        return false;
      }
      if (bracket === '}' && stack[stack.length - 1] !== '{') {
        return false;
      }
      if (bracket === ']' && stack[stack.length - 1] !== '[') {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};
```

### 27. Remove Element

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      let temp = nums[i];
      nums[i] = nums[pos];
      nums[pos] = temp;
      pos++;
    }
  }
  return pos;
};
```

### 58. Length of Last Word

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      length++;
    } else {
      return length;
    }
  }
  return length;
};
```

### 62. Unique Paths

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(0).map((e) => new Array(n).fill(1));
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
```

### 66. Plus One

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let lastIndex = digits.length - 1;
  let lastNum = digits[lastIndex];
  if (lastNum !== 9) {
    digits[lastIndex] = lastNum + 1;
    return digits;
  }
  // last num is 9
  let carry = 1;
  let results = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9 && carry == 1) {
      results.unshift(0);
      carry = 1;
    } else {
      results.unshift(digits[i] + carry);
      carry = 0;
    }
  }
  if (carry === 1) {
    results.unshift(1);
  }
  return results;
};
```

### 100. Same Tree

```javascript
/**
 * Definition for a binary tree node.
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @param {Number} val
 *
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * Time Complexity: O(n) because we travserse all nodes
 * Space Complexity: O(n) for recursive call stack.
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if ((p === null) | (q === null)) return false;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};
```

### 125. Valid Palindrome

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s
    .trim()
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase();
  if (s.trim().length === 0) return true;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
```

### 199. Binary Tree Right Side View

```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  let map = {};
  helper(root, 0, map);
  return Object.values(map);
};

var helper = function (root, level, map) {
  if (root === null) {
    return;
  }
  map[level] = root.val;
  helper(root.left, level + 1, map);
  helper(root.right, level + 1, map);
};
```

### 242. Valid Anagram

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let a1 = new Array(26).fill(0);
  let a2 = new Array(26).fill(0);
  for (let char of s) {
    a1[char.charCodeAt(0) - 97]++;
  }
  for (let char of t) {
    if (a1[char.charCodeAt(0) - 97] === 0) {
      return false;
    }
    a1[char.charCodeAt(0) - 97]--;
    if (a1[char.charCodeAt(0) - 97] < 0) {
      return false;
    }
  }
  return true;
};
```

### 252. Meeting Rooms

```javascript
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let curr_meeting = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (curr_meeting[1] > intervals[i][0]) {
      return false;
    } else {
      curr_meeting = intervals[i];
    }
  }
  return true;
};
```

### 283. Move Zeroes

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[pos];
      nums[pos] = temp;
      pos++;
    }
  }
  return nums;
};
```

### 344. Reverse String

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};
```

### 349. Intersection of Two Arrays

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set1 = new Set();
  let resultSet = new Set();
  for (let num of nums1) {
    set1.add(num);
  }
  for (let num of nums2) {
    if (set1.has(num)) {
      resultSet.add(num);
    }
  }
  return Array.from(resultSet);
};
```

### 350. Intersection of Two Arrays II

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let hashMap = {};
  let results = [];
  for (let num of nums1) {
    hashMap[num] = hashMap[num] + 1 || 1;
  }
  for (let num of nums2) {
    if (hashMap[num] > 0) {
      results.push(num);
      hashMap[num]--;
    }
  }
  return results;
};
```

### 657. Robot Return to Origin

```javascript
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let left = 0;
  let right = 0;
  let up = 0;
  let down = 0;
  let total = 0;
  for (let move of moves) {
    if (move === 'R') {
      right++;
    } else if (move === 'L') {
      left++;
    } else if (move === 'U') {
      up++;
    } else {
      down++;
    }
  }
  return left === right && up === down;
};
```

### 700. Search in a Binary Search Tree

```javascript
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (root === null) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  if (root.val > val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};
```

### 704. Binary Search

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= target) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return -1;
};
```

### 876. Middle of the Linked List

```javascript
/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
```

### 917. Reverse Only Letters

```javascript
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  S = S.split('');
  let left = 0;
  let right = S.length - 1;
  while (left < right) {
    if (S[left].match(/[a-zA-Z]/) && S[right].match(/[a-zA-Z]/)) {
      let temp = S[left];
      S[left] = S[right];
      S[right] = temp;
      left++;
      right--;
    } else if (!S[left].match(/[a-zA-Z]/)) {
      left++;
    } else {
      right--;
    }
  }
  return S.join('');
};
```

### 1046. Last Stone Weight

```javascript
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let maxHeap = new MaxBinaryHeap();
  for (let stone of stones) {
    maxHeap.insert(stone);
  }
  console.log(maxHeap);
  while (maxHeap.values.length > 1) {
    let stone1 = maxHeap.extractMax();
    let stone2 = maxHeap.extractMax();
    console.log(stone1, stone2);
    if (stone1 !== stone2) {
      maxHeap.insert(Math.abs(stone1 - stone2));
    }
  }
  if (maxHeap.values.length) {
    return maxHeap.values[0];
  } else {
    return 0;
  }
};

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let currVal = this.values[this.values.length - 1];
    let currIndex = this.values.length - 1;
    let parentIndex = Math.floor((this.values.length - 2) / 2);
    while (this.values[parentIndex] < currVal) {
      if (currVal > this.values[parentIndex]) {
        this.values[currIndex] = this.values[parentIndex];
        this.values[parentIndex] = currVal;
        currIndex = parentIndex;
      }
      parentIndex = Math.floor(currIndex - 1 / 2);
    }
  }

  extractMax() {
    let ans = this.values[0];
    this.sinkDown();
    return ans;
  }

  sinkDown() {
    this.values[0] = this.values[this.values.length - 1];
    let currSinkDownVal = this.values.pop();
    let currParentIndex = 0;
    let child1Idx = 2 * currParentIndex + 1;
    let child2Idx = 2 * currParentIndex + 2;
    while (
      currSinkDownVal < this.values[child2Idx] ||
      currSinkDownVal < this.values[child1Idx]
    ) {
      if (this.values[child2Idx] > this.values[child1Idx]) {
        this.values[currParentIndex] = this.values[child2Idx];
        this.values[child2Idx] = currSinkDownVal;
        currParentIndex = child2Idx;
      } else {
        this.values[currParentIndex] = this.values[child1Idx];
        this.values[child1Idx] = currSinkDownVal;
        currParentIndex = child1Idx;
      }
      child1Idx = 2 * currParentIndex + 1;
      child2Idx = 2 * currParentIndex + 2;
    }
  }
}
```

### 1119. Remove Vowels from a String

```javascript
/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function (S) {
  return S.replace(/[aeiou]/g, '');
};
```

### 1143. Longest Common Subsequence

```javascript
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  return longestCommonSubsequence_recursive(
    text1,
    text2,
    text1.length,
    text2.length
  );
};

/**
 * @param {string} text1
 * @param {string} text2
 * @param {number} m
 * @param {number} n
 * @return {number}
 * For longer strings this method will give Time Limit Exceeded
 */
var longestCommonSubsequence_recursive = function (text1, text2, m, n) {
  if (m === 0 || n === 0) {
    return 0;
  }
  if (text1[m - 1] === text2[n - 1]) {
    return 1 + longestCommonSubsequence_recursive(text1, text2, m - 1, n - 1);
  } else {
    return Math.max(
      longestCommonSubsequence_recursive(text1, text2, m - 1, n),
      longestCommonSubsequence_recursive(text1, text2, m, n - 1)
    );
  }
};

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * This solution uses dynamic programming top down solution
 */
var longestCommonSubsequence = function (text1, text2) {
  let dp = new Array(text1.length + 1)
    .fill(0)
    .map((e) => new Array(text2.length + 1).fill(-1));
  longestCommonSubsequence_memoized(
    text1,
    text2,
    text1.length,
    text2.length,
    dp
  );
  return dp[text1.length][text2.length];
};

var longestCommonSubsequence_memoized = function (text1, text2, m, n, dp) {
  if (m === 0 || n === 0) {
    return 0;
  }
  if (dp[m][n] !== -1) {
    return dp[m][n];
  }
  if (text1[m - 1] === text2[n - 1]) {
    return (dp[m][n] =
      1 + longestCommonSubsequence_memoized(text1, text2, m - 1, n - 1, dp));
  } else {
    return (dp[m][n] = Math.max(
      longestCommonSubsequence_memoized(text1, text2, m - 1, n, dp),
      longestCommonSubsequence_memoized(text1, text2, m, n - 1, dp)
    ));
  }
};
```

### 1185. Day of the Week

```javascript
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  var d = new Date(year, month - 1, day);
  console.log(d);
  var weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';
  return weekday[d.getDay()];
};
```

### 1213. Intersection of Three Sorted Arrays

```javascript
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
  let result = [];
  const hashMap = {};

  for (let i = 0; i < arr1.length; i++) {
    hashMap[arr1[i]] = false;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (hashMap[arr2[i]] === false) {
      hashMap[arr2[i]] = true;
    }
  }

  for (let i = 0; i < arr3.length; i++) {
    if (hashMap[arr3[i]] === true) {
      result.push(arr3[i]);
    }
  }

  return result;
};
```

### 1299. Replace Elements with Greatest Element on Right Side

```javascript
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let results = new Array(arr.length);
  let max = Number.MIN_VALUE;
  results[arr.length - 1] = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    max = Math.max(max, arr[i + 1]);
    results[i] = max;
  }
  return results;
};
```

### 1331. Rank Transform of an Array

```javascript
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  // clone the array into temp variable
  let temp = [...arr];
  let map = {};
  // sort the cloned array o(nlogn)
  temp.sort((a, b) => a - b);
  let index = 1;
  // loop through the sorted array and assign value to each num starting from 1
  for (let num of temp) {
    if (map[num] === undefined) {
      map[num] = index;
      index++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = map[arr[i]];
  }
  return arr;
};
```

### 1351. Count Negative Numbers in a Sorted Matrix

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 * Naive Solution
 */
var countNegatives = function (grid) {
  let negatives = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        negatives++;
      }
    }
  }
  return negatives;
};

/**
 * @param {number[][]} grid
 * @return {number}
 * Better than naive solution and taking the advantage of the fact that the grid is in sorted manner
 */
var countNegatives_sol_2 = function (grid) {
  let row = 0;
  let col = grid[0].length - 1;
  let negatives = 0;
  while (row < grid.length && col >= 0) {
    if (grid[row][col] < 0) {
      negatives = negatives + grid.length - row;
      col--;
    } else {
      row++;
    }
  }
  return negatives;
};
```

### 1360. Number of Days Between Two Dates

```javascript
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  /**
  1) Define two dates using new Date().
  2) Calculate the time difference of two dates using date2.getTime() – date1.getTime();
  3) Calculate the no. of days between two dates, divide the time difference of both the dates by no. of milliseconds in a day (1000*60*60*24)
  */
  date1 = new Date(date1);
  date2 = new Date(date2);
  let diff_in_time = Math.abs(date2.getTime() - date1.getTime());
  return diff_in_time / (1000 * 3600 * 24);
};
```
