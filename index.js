// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newHeadNode = new Node(data, this.head);
    this.head = newHeadNode;

    // CAN ALSO COMBINE INTO ONE LINE
    // this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }
}

module.exports = { Node, LinkedList };
