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

  getLast2() {
    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let currentNode = this.head;
    let nextNode = this.head.next;
    while (nextNode.next) {
      currentNode = nextNode;
      nextNode = nextNode.next;
    }

    currentNode.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      const prevLastNode = this.getLast();
      prevLastNode.next = new Node(data);
    }
  }

  getAt(index) {
    let count = 0;
    let node = this.head;

    while (count < index && node) {
      count++;
      node = node.next;
    }

    return node;
  }

  removeAt(index) {
    const node = this.getAt(index);
    if (!node) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prev = this.getAt(index - 1);
    prev.next = node.next;
  }

  insertAt(data, index) {
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    let prev = this.getAt(Math.min(index - 1, this.size() - 1));
    if (prev) prev.next = new Node(data, prev.next);
    else this.insertFirst(data);
  }
}

module.exports = { Node, LinkedList };
