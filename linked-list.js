export { LinkedList };

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  append(value) {
    if (this.head === null) {
      this.prepend(value);
    } else {
      let tmp = this.head;
      while (tmp.nextNode !== null) tmp = tmp.nextNode;
      tmp.nextNode = new Node(value, null);
    }
  }


  size() {
    if (this.head === null) return 0;
    let count = 0;
    let tmp = this.head;
    while (tmp !== null) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }

  headVal() {
    if (this.head === null) return undefined;
    return this.head.value;
  }

  tail() {
    if (this.head === null) return undefined;
    let tmp = this.head;
    while (tmp.nextNode !== null) tmp = tmp.nextNode;
    return tmp.value;
  }

  at(index) {
    if (this.head === null) return undefined;
    let tmp = this.head;
    for (let i = 0; i < index; i++) {
      if (tmp === null) break;
      tmp = tmp.nextNode;
    }
    if (tmp === null) return undefined;
    return tmp.value;
  }

  pop() {
    if (this.head === null) return undefined;
    let tmp = this.head.value;
    this.head = this.head.nextNode;
    return tmp;
  }

  contains(value) {
    let tmp = this.head;
    while (tmp !== null) {
      if (tmp.value === value) return true;
      tmp = tmp.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let tmp = this.head;
    let count = 0;
    while (tmp !== null) {
      if (tmp.value === value) {
        return count;
      }
      count++;
      tmp = tmp.nextNode;
    }
    return -1;
  }

  toString() {
    let tmp = this.head;
    let resArr = [];
    while (tmp !== null) {
      resArr.push(`(${tmp.value})`);
      tmp = tmp.nextNode;
    }
    resArr.push('null');
    return resArr.join(" -> ");
  }
}


