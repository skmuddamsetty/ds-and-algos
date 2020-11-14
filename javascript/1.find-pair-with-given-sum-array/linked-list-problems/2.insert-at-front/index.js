/**
 *
 * @param {ListNode} node
 * prints the linked list with given node
 */
function printLL(node){
  console.log(JSON.stringify(node,undefined,2));
}

/**
 *
 * @param {*} val
 */
function ListNode(val){
    this.key = val;
    this.next = null;
}

/**
 *
 * @param {ListNode} node
 * @param {Number} val
 * @return {ListNode} final head of the linked list
 */
function insertNodeAtFront(node,val){
  if(node===null){
    return new ListNode(val);
  }
    let newNode = new ListNode(val);
    newNode.next = node;
  return newNode;
}

// prepare linked list
let values = [0,1,2,3,4,5,6,7,8,9];
let head = null;
for(let value of values){
  head = insertNodeAtFront(head,value);
}
printLL(head);

