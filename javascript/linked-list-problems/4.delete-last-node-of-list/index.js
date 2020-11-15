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
