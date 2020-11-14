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

### Insert into Linked List

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

### Insert Node at Front of Linked List

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
