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
